import { createFileRoute, Link } from "@tanstack/react-router";
import { Cat, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, WhyUsSection } from "@/components/site/sections";
import { breedIndex } from "@/data/breed-index";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/breeds/")({
  head: () =>
    pageHead({
      title: "Dog & Cat Grooming by Breed | Petgroomers India",
      description:
        "Breed-specific grooming advice and pricing for Golden Retrievers, Labradors, Shih Tzus, Persian cats and more. Doorstep grooming across India from Rs. 1,500.",
      path: "/breeds",
    }),
  component: BreedsHub,
});

function BreedsHub() {
  const dogs = breedIndex.filter((b) => b.species === "dog");
  const cats = breedIndex.filter((b) => b.species === "cat");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Breeds", path: "/breeds" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Grooming guides by breed",
          numberOfItems: breedIndex.length,
          itemListElement: breedIndex.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${b.name} grooming`,
            url: absoluteUrl(`/breeds/${b.slug}`),
          })),
        }}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Breeds" }]} />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            Grooming, Breed by Breed
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Husky and a Shih Tzu need completely different things from a groomer — and a double
            coat should never be shaved. Pick your breed for how often it needs grooming, what to
            watch for in Indian weather, and which package suits it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      {[
        { title: "Dog breeds", icon: Dog, list: dogs },
        { title: "Cat breeds", icon: Cat, list: cats },
      ].map((group) => (
        <section key={group.title} className="py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl md:text-3xl font-black text-primary flex items-center gap-3">
              <span className="h-11 w-11 rounded-xl bg-aqua/25 grid place-items-center">
                <group.icon className="h-6 w-6 text-primary" />
              </span>
              {group.title}
              <span className="text-base font-semibold text-muted-foreground">
                {group.list.length}
              </span>
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {group.list.map((b) => (
                <Link
                  key={b.slug}
                  to="/breeds/$breed"
                  params={{ breed: b.slug }}
                  className="group rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                    {b.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.coatType}</p>
                  <p className="mt-3 text-xs text-muted-foreground/80">
                    Groom {b.groomingFrequency.toLowerCase()} · {b.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <WhyUsSection heading="Breed-aware grooming, at your door" />
      <ContactSection
        heading="Not sure what your breed needs?"
        blurb="Tell us the breed and when they were last groomed — we'll tell you what they actually need, even if it's the cheaper package."
      />
      <Footer />
      <FloatingActions />
    </div>
  );
}
