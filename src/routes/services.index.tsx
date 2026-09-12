import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  Bath,
  Bug,
  Cat,
  Dog,
  Heart,
  PawPrint,
  Scissors,
  Sparkles,
  Truck,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, ServicesSection } from "@/components/site/sections";
import { serviceIndex } from "@/data/service-index";
import { cityCount } from "@/data/city-index";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, pageHead } from "@/lib/seo";

const ICONS: Record<string, LucideIcon> = {
  Baby,
  Bath,
  Bug,
  Cat,
  Dog,
  Heart,
  PawPrint,
  Scissors,
  Truck,
  Wind,
};

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Pet Grooming Services & Prices in India | Petgroomers",
      description:
        "Dog & cat grooming at home: spa bath Rs. 1,500, full grooming Rs. 2,000, haircuts, tick treatment, de-shedding and nail trimming. Doorstep service across India.",
      path: "/services",
    }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pet grooming services",
          numberOfItems: serviceIndex.length,
          itemListElement: serviceIndex.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        }}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Services" }]} />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> Dogs &amp; cats, all breeds
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            Pet Grooming Services &amp; Prices
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a quick spa bath to full breed-specific styling, tick treatment and de-shedding —
            our certified groomers bring everything to your home in {cityCount} cities across India.
            Transparent pricing, no hidden charges.
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

      <ServicesSection
        eyebrow="Packages"
        heading="Our grooming packages"
        sub="Four simple packages — pick what suits your pet."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              All Services
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Explore every service in detail
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceIndex.map((s) => {
              const Icon = ICONS[s.icon] ?? PawPrint;
              return (
                <Link
                  key={s.slug}
                  to="/services/$service"
                  params={{ service: s.slug }}
                  className="group rounded-3xl bg-card border border-border/70 p-7 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all flex flex-col"
                >
                  <span className="h-14 w-14 rounded-2xl bg-aqua/25 grid place-items-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-primary group-hover:text-coral transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.blurb}
                  </p>
                  {s.price && (
                    <p className="mt-5 font-display text-2xl font-black text-primary">
                      from {s.price}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection heading="Book your pet's grooming" />
      <Footer />
      <FloatingActions />
    </div>
  );
}
