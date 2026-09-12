/**
 * Crawls the running site and checks the things that decide whether Google
 * will index these pages — and whether it would treat them as spam.
 *
 *   node scripts/seo-audit.mjs [baseUrl]     (default http://localhost:8080)
 *
 * Exits non-zero if any BLOCKER is found, so it can gate a deploy.
 */
const BASE = (process.argv[2] ?? "http://localhost:8080").replace(/\/$/, "");

const blockers = [];
const warnings = [];
const fail = (m) => blockers.push(m);
const warn = (m) => warnings.push(m);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
// Length must be measured on the DECODED text — "&amp;" is one character to
// Google, not five, and counting the entity over-reports every title with "&".
const text = (html, re) => decode((html.match(re)?.[1] ?? "").trim());
const strip = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/* ------------------------------------------------------- robots + sitemap */

const robots = await fetch(`${BASE}/robots.txt`).then((r) => (r.ok ? r.text() : null));
if (!robots) fail("robots.txt is missing — crawlers get a 404");
else {
  if (/^\s*Disallow:\s*\/\s*$/im.test(robots)) fail("robots.txt Disallows the whole site");
  if (!/Sitemap:/i.test(robots)) warn("robots.txt does not reference the sitemap");
}

const sitemapXml = await fetch(`${BASE}/sitemap.xml`).then((r) => (r.ok ? r.text() : null));
if (!sitemapXml) fail("sitemap.xml is missing");
const sitemapPaths = [...(sitemapXml ?? "").matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .map((p) => (p !== "/" ? p.replace(/\/$/, "") : p));

/* ------------------------------------------------------------ fetch pages */

const pages = new Map();
for (const path of sitemapPaths) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = await res.text();
  pages.set(path, { status: res.status, html });
  if (res.status !== 200) fail(`${path} returns ${res.status} (in sitemap but not reachable)`);
}

/* -------------------------------------------------- per-page index checks */

const titles = new Map();
const descs = new Map();

for (const [path, { status, html }] of pages) {
  if (status !== 200) continue;
  const where = (msg) => `${path}: ${msg}`;

  const title = text(html, /<title>([^<]*)<\/title>/i);
  const desc = text(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = text(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const robotsMeta = text(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1]));

  if (!title) fail(where("no <title>"));
  if (!desc) fail(where("no meta description"));
  if (/noindex/i.test(robotsMeta)) fail(where(`meta robots is "${robotsMeta}" — blocks indexing`));
  if (!canonical) fail(where("no canonical link"));
  else {
    const cPath = new URL(canonical).pathname.replace(/\/$/, "") || "/";
    const want = path === "/" ? "/" : path.replace(/\/$/, "");
    if (cPath !== want) fail(where(`canonical points to ${cPath}, not itself (${want})`));
  }
  if (h1s.length === 0) fail(where("no <h1>"));
  if (h1s.length > 1) warn(where(`${h1s.length} <h1> tags`));
  if (title.length > 65) warn(where(`title ${title.length} chars (Google truncates ~60)`));
  if (desc && (desc.length < 110 || desc.length > 165))
    warn(where(`meta description ${desc.length} chars (aim 140-160)`));

  if (titles.has(title)) fail(where(`duplicate <title> with ${titles.get(title)}`));
  else titles.set(title, path);
  if (desc) {
    if (descs.has(desc)) fail(where(`duplicate meta description with ${descs.get(desc)}`));
    else descs.set(desc, path);
  }
}

/* ---------------------------------------------- orphan / reachability check */

const internal = (html) =>
  [...html.matchAll(/href="(\/[^"#?]*)"/g)]
    .map((m) => (m[1] !== "/" ? m[1].replace(/\/$/, "") : "/"))
    // Ignore build/dev asset URLs — they are resources, not crawlable pages.
    .filter(
      (h) =>
        !h.startsWith("/assets") &&
        !h.startsWith("/_") &&
        !h.startsWith("/src/") &&
        !h.startsWith("/@") &&
        !h.startsWith("/node_modules") &&
        !/\.(css|js|mjs|png|jpe?g|webp|svg|ico|xml|txt|woff2?)$/i.test(h),
    );

const seen = new Set(["/"]);
const queue = ["/"];
while (queue.length) {
  const path = queue.shift();
  let html = pages.get(path)?.html;
  if (html === undefined) {
    const res = await fetch(BASE + path);
    if (!res.ok) continue;
    html = await res.text();
  }
  for (const link of internal(html)) {
    if (!seen.has(link)) {
      seen.add(link);
      if (sitemapPaths.includes(link)) queue.push(link);
    }
  }
}

const orphans = sitemapPaths.filter((p) => !seen.has(p));
for (const o of orphans)
  fail(
    `${o} is in the sitemap but NOT reachable by following links from the homepage (orphan — Google may never crawl it)`,
  );

const crawledNotInSitemap = [...seen].filter((p) => !sitemapPaths.includes(p));
for (const p of crawledNotInSitemap) warn(`${p} is linked internally but missing from sitemap.xml`);

/* ------------------------------------------- duplicate-body (doorway) check */

const bodies = new Map();
for (const [path, { status, html }] of pages) {
  if (status !== 200) continue;
  const main = strip(html.replace(/<(script|style|nav|footer|head)[\s\S]*?<\/\1>/gi, " "));
  bodies.set(
    path,
    new Set(
      main
        .toLowerCase()
        .split(" ")
        .filter((w) => w.length > 4),
    ),
  );
}
const entries = [...bodies.entries()];
let worst = { score: 0, a: "", b: "" };
const tooSimilar = [];
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const [pa, A] = entries[i];
    const [pb, B] = entries[j];
    const inter = [...A].filter((w) => B.has(w)).length;
    const score = inter / (A.size + B.size - inter);
    if (score > worst.score) worst = { score, a: pa, b: pb };
    if (score > 0.9) tooSimilar.push([pa, pb, score]);
  }
}
for (const [a, b, s] of tooSimilar)
  fail(
    `${a} and ${b} are ${(s * 100).toFixed(0)}% identical in body text — Google's doorway-page policy risk`,
  );

/* -------------------------------------------------------------- reporting */

console.log(`\nCrawl audit of ${BASE}`);
console.log(`  pages in sitemap        ${sitemapPaths.length}`);
console.log(
  `  returned 200            ${[...pages.values()].filter((p) => p.status === 200).length}`,
);
console.log(`  unique titles           ${titles.size}`);
console.log(`  unique descriptions     ${descs.size}`);
console.log(
  `  reachable from homepage ${sitemapPaths.filter((p) => seen.has(p)).length}/${sitemapPaths.length}`,
);
console.log(
  `  most similar page pair  ${(worst.score * 100).toFixed(0)}%  (${worst.a} vs ${worst.b})`,
);

if (warnings.length) {
  console.log(`\n  WARNINGS (${warnings.length}):`);
  for (const w of warnings.slice(0, 25)) console.log(`    - ${w}`);
  if (warnings.length > 25) console.log(`    ... and ${warnings.length - 25} more`);
}
if (blockers.length) {
  console.log(`\n  BLOCKERS (${blockers.length}):`);
  for (const b of blockers.slice(0, 40)) console.log(`    ! ${b}`);
  if (blockers.length > 40) console.log(`    ... and ${blockers.length - 40} more`);
  console.log("");
  process.exit(1);
}
console.log("\n  No blockers. Every page is crawlable, indexable and internally linked.\n");
