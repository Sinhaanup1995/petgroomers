import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, WhyUsSection } from "@/components/site/sections";
import { cityIndex, cityCount } from "@/data/city-index";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, localBusinessSchema, pageHead } from "@/lib/seo";

const REGION_ORDER = ["North", "West", "South", "East", "Central", "Northeast"] as const;

export const Route = createFileRoute("/locations")({
  head: () =>
    pageHead({
      title: `Pet Grooming Near You — ${cityCount} Cities Across India | Petgroomers`,
      description: `Doorstep dog and cat grooming in ${cityCount} Indian cities including Delhi, Mumbai, Bengaluru, Pune and Hyderabad. Certified groomers at your home, 7 days a week.`,
      path: "/locations",
    }),
  component: LocationsPage,
});

function LocationsPage() {
  const grouped = REGION_ORDER.map((region) => ({
    region,
    list: cityIndex.filter((c) => c.region === region).sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((g) => g.list.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={localBusinessSchema({ path: "/locations" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Petgroomers service locations across India",
          numberOfItems: cityCount,
          itemListElement: cityIndex.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Pet Grooming in ${c.name}`,
            url: absoluteUrl(`/pet-grooming/${c.slug}`),
          })),
        }}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Locations" }]} />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
            <MapPin className="h-4 w-4" /> Pan India Services
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            Pet Grooming Near You, Across India
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our certified groomers travel to your home in {cityCount} cities — bath, haircut, nail
            trimming and tick treatment for dogs and cats, without the stressful drive to a salon.
            Pick your city below for the areas we cover and how to book.
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

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-14">
          {grouped.map((g) => (
            <div key={g.region}>
              <h2 className="text-2xl md:text-3xl font-black text-primary">
                {g.region} India
                <span className="ml-3 text-base font-semibold text-muted-foreground">
                  {g.list.length} cities
                </span>
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {g.list.map((c) => (
                  <Link
                    key={c.slug}
                    to="/pet-grooming/$city"
                    params={{ city: c.slug }}
                    className="group rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                  >
                    <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                      Pet Grooming in {c.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.state}</p>
                    <p className="mt-3 text-xs text-muted-foreground/80 line-clamp-2">
                      {c.areasPreview.join(" · ")} &amp; more
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyUsSection heading="The same standard of care in every city" />
      <ContactSection
        heading="Don't see your city?"
        blurb="We're expanding fast across India. Message us with your location and we'll tell you the soonest slot we can reach you."
      />
      <Footer />
      <FloatingActions />
    </div>
  );
}
