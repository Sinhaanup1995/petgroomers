import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection } from "@/components/site/sections";
import { guideIndex } from "@/data/guide-index";
import { absoluteUrl, breadcrumbSchema, pageHead } from "@/lib/seo";

const GROUPS = [
  {
    key: "problem",
    title: "When something's wrong",
    blurb: "Mats, smells, ticks, a pet who hates being groomed.",
  },
  {
    key: "seasonal",
    title: "Through the Indian year",
    blurb: "Monsoon, summer heat and the cooler months.",
  },
  {
    key: "how-to",
    title: "Doing it yourself",
    blurb: "What you can handle at home, and how to do it properly.",
  },
] as const;

export const Route = createFileRoute("/guides/")({
  head: () =>
    pageHead({
      title: "Pet Grooming Guides",
      description:
        "Honest grooming advice for Indian pet parents — shaving in summer, removing mats, tick season, monsoon coat care and how often your pet really needs a groom.",
      path: "/guides",
    }),
  component: GuidesHub,
});

function GuidesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pet grooming guides",
          numberOfItems: guideIndex.length,
          itemListElement: guideIndex.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: g.name,
            url: absoluteUrl(`/guides/${g.slug}`),
          })),
        }}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Guides" }]} />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-20 text-center">
          <span className="mx-auto h-16 w-16 rounded-2xl bg-aqua/25 grid place-items-center">
            <BookOpen className="h-8 w-8 text-primary" />
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-black text-primary leading-[1.08]">
            Grooming Guides
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            What we&apos;d tell you if you asked us at your door — including the times we&apos;d
            tell you your pet doesn&apos;t need a groomer at all.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => {
        const list = guideIndex.filter((g) => g.category === group.key);
        if (list.length === 0) return null;
        return (
          <section key={group.key} className="py-8">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="text-2xl md:text-3xl font-black text-primary">{group.title}</h2>
              <p className="mt-1.5 text-muted-foreground">{group.blurb}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {list.map((g) => (
                  <Link
                    key={g.slug}
                    to="/guides/$guide"
                    params={{ guide: g.slug }}
                    className="group rounded-2xl bg-card border border-border/70 p-6 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                  >
                    <h3 className="font-bold text-lg text-primary group-hover:text-coral transition-colors">
                      {g.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="py-8" />
      <ContactSection
        heading="Still not sure what your pet needs?"
        blurb="Send us a photo of your pet's coat on WhatsApp. We'll tell you what it needs — and if that's nothing, we'll say so."
      />
      <Footer />
      <FloatingActions />
    </div>
  );
}
