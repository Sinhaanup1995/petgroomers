import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDayMonthYear } from "@/lib/format";
import {
  AlertTriangle,
  Baby,
  Bath,
  Brush,
  Bug,
  CalendarCheck,
  CalendarClock,
  Cat,
  Check,
  ClipboardCheck,
  CloudRain,
  Droplets,
  Ear,
  Fan,
  Feather,
  GlassWater,
  HandHeart,
  HeartHandshake,
  Layers,
  PawPrint,
  Scissors,
  Snowflake,
  Sparkles,
  Sun,
  ThermometerSun,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, FaqSection } from "@/components/site/sections";
import { guideIndex, guidesModified } from "@/data/guide-index";
import { serviceIndexBySlug } from "@/data/service-index";
import { breedIndex } from "@/data/breed-index";
import { BRAND, PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageHead } from "@/lib/seo";

/** Must cover every `icon` value in src/data/guides.ts — an unmapped name
 *  silently falls back to a generic icon. `npm run seo:generate` fails loudly
 *  if a guide uses a name that is missing here. */
const ICONS: Record<string, LucideIcon> = {
  AlertTriangle,
  Baby,
  Bath,
  Brush,
  Bug,
  CalendarCheck,
  CalendarClock,
  Cat,
  ClipboardCheck,
  CloudRain,
  Droplets,
  Ear,
  Fan,
  Feather,
  GlassWater,
  HandHeart,
  HeartHandshake,
  Layers,
  PawPrint,
  Scissors,
  Snowflake,
  Sparkles,
  Sun,
  ThermometerSun,
  Wind,
};

export const Route = createFileRoute("/guides/$guide")({
  loader: async ({ params }) => {
    const { guidesBySlug } = await import("@/data/guides");
    if (!Object.hasOwn(guidesBySlug, params.guide)) throw notFound();
    const guide = guidesBySlug[params.guide];
    return { guide };
  },
  head: ({ loaderData }) => {
    const g = loaderData?.guide;
    if (!g) return {};
    return pageHead({ title: g.title, description: g.description, path: `/guides/${g.slug}` });
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData();
  const Icon = ICONS[guide.icon] ?? Sparkles;
  const services = guide.relatedServices.map((s: string) => serviceIndexBySlug[s]).filter(Boolean);
  const breeds = guide.relatedBreeds
    .map((s: string) => breedIndex.find((b) => b.slug === s))
    .filter(Boolean);
  const more = guideIndex.filter((g) => g.slug !== guide.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.name,
          description: guide.description,
          url: absoluteUrl(`/guides/${guide.slug}`),
          author: { "@type": "Organization", name: BRAND, url: absoluteUrl("/") },
          publisher: { "@type": "Organization", name: BRAND, url: absoluteUrl("/") },
          mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
          articleSection: guide.category,
          datePublished: guidesModified,
          dateModified: guidesModified,
        }}
      />
      <JsonLd data={faqSchema(guide.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.name, path: `/guides/${guide.slug}` },
        ])}
      />

      <Nav />
      <Breadcrumbs
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Guides", to: "/guides" },
          { name: guide.name },
        ]}
      />

      <article>
        <header className="relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-aqua/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-6 py-12 md:py-16">
            <span className="h-16 w-16 rounded-2xl bg-aqua/25 grid place-items-center">
              <Icon className="h-8 w-8 text-primary" />
            </span>
            <h1 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-[1.1]">
              {guide.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{guide.intro}</p>
            <p className="mt-5 text-sm text-muted-foreground">
              Written by the {BRAND} grooming team · Last updated{" "}
              <time dateTime={guidesModified}>{formatDayMonthYear(guidesModified)}</time>
            </p>
          </div>
        </header>

        {/* --------------------------------------------------- key takeaways */}
        <section className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-cream border border-border/70 p-7">
            <h2 className="font-display text-xl font-extrabold text-primary">The short version</h2>
            <ul className="mt-4 space-y-2.5">
              {guide.keyTakeaways.map((t: string) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-aqua/40 grid place-items-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------- the body */}
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 space-y-10">
          {guide.sections.map((s: { heading: string; body: string }) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl md:text-3xl font-black text-primary">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {s.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-foreground/90 leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* --------------------------------------------------- soft CTA block */}
      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <h2 className="font-display text-2xl font-black">Would rather not do it yourself?</h2>
            <p className="mt-3 text-primary-foreground/80">
              Our groomers come to your home, so your pet never has to sit in traffic or wait in a
              salon. Tell us the breed and when they were last groomed and we&apos;ll tell you what
              they actually need.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="coral" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Ask on WhatsApp
                </a>
              </Button>
              <Button
                variant="tealOutline"
                size="lg"
                asChild
                className="rounded-full bg-background"
              >
                <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={guide.faqs} heading="Common questions" />

      {/* ----------------------------------------------------- related links */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          {services.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-primary">Services mentioned here</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$service"
                    params={{ service: s.slug }}
                    className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/20 hover:border-aqua transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {breeds.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-primary">Breeds this matters most for</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {breeds.map((b) => (
                  <Link
                    key={b!.slug}
                    to="/breeds/$breed"
                    params={{ breed: b!.slug }}
                    className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/20 hover:border-aqua transition-colors"
                  >
                    {b!.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {more.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-primary">More guides</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {more.map((g) => (
                  <Link
                    key={g.slug}
                    to="/guides/$guide"
                    params={{ guide: g.slug }}
                    className="group rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
                  >
                    <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                      {g.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactSection heading="Book a groomer who explains things" />
      <Footer />
      <FloatingActions />
    </div>
  );
}
