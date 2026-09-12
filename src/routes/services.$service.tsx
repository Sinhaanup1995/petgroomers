import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Baby,
  Bath,
  Bug,
  Cat,
  Check,
  Dog,
  Heart,
  PawPrint,
  Scissors,
  Truck,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, FaqSection, WhyUsSection } from "@/components/site/sections";
import { serviceIndex } from "@/data/service-index";
import { cityCount, cityIndexBySlug } from "@/data/city-index";
import { citiesForService } from "@/data/city-service-index";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { breadcrumbSchema, faqSchema, pageHead, serviceSchema } from "@/lib/seo";

/** Explicit map so only the icons we actually use get bundled. */
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

/** Cities linked from every service page, so each one has local entry points. */
const LINKED_CITY_SLUGS = [
  "delhi",
  "mumbai",
  "bengaluru",
  "hyderabad",
  "chennai",
  "kolkata",
  "pune",
  "ahmedabad",
  "gurgaon",
  "noida",
  "jaipur",
  "lucknow",
  "chandigarh",
  "indore",
  "kochi",
  "surat",
];

export const Route = createFileRoute("/services/$service")({
  // See the note on the city route: dynamic import keeps the full service
  // copy out of the shared client bundle.
  loader: async ({ params }) => {
    const { seoServicesBySlug } = await import("@/data/services-seo");
    if (!Object.hasOwn(seoServicesBySlug, params.service)) throw notFound();
    const service = seoServicesBySlug[params.service];
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return pageHead({
      title: `${s.title} | Petgroomers`,
      description: s.description,
      path: `/services/${s.slug}`,
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = ICONS[service.icon] ?? PawPrint;
  const linkedCities = LINKED_CITY_SLUGS.map((slug) => cityIndexBySlug[slug]).filter(Boolean);
  const others = serviceIndex.filter((s) => s.slug !== service.slug).slice(0, 6);
  const localPages = citiesForService(service.slug)
    .map((slug) => cityIndexBySlug[slug])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.description,
          path: `/services/${service.slug}`,
          price: service.price,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <Nav />
      <Breadcrumbs
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Services", to: "/services" },
          { name: service.name },
        ]}
      />

      {/* ------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <span className="mx-auto h-20 w-20 rounded-3xl bg-aqua/25 grid place-items-center">
            <Icon className="h-10 w-10 text-primary" />
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            {service.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
          {service.price && (
            <p className="mt-6 inline-flex items-baseline gap-2 rounded-full bg-coral/15 border-2 border-coral/40 px-6 py-2.5">
              <span className="text-sm font-semibold text-coral uppercase tracking-widest">
                From
              </span>
              <span className="font-display text-2xl font-black text-coral">{service.price}</span>
            </p>
          )}
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

      {/* --------------------------------------------------------- includes */}
      <section className="py-16 md:py-20 bg-aqua/10">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              What&apos;s Included
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Everything in this service
            </h2>
            <ul className="mt-8 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-aqua/40 grid place-items-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] border border-border/60"
              >
                <h3 className="font-bold text-lg text-primary">{b.title}</h3>
                <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection heading="Grooming you can trust" />

      {/* ------------------------------------------------------ city links */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              Where We Serve
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              {service.name} near you
            </h2>
            <p className="mt-4 text-muted-foreground">
              We bring this service to your doorstep in {cityCount}+ cities across India.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {linkedCities.map((c) => (
              <Link
                key={c.slug}
                to="/pet-grooming/$city"
                params={{ city: c.slug }}
                className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/20 hover:border-aqua transition-colors shadow-[var(--shadow-soft)]"
              >
                {c.name}
              </Link>
            ))}
            <Link
              to="/locations"
              className="rounded-full bg-coral/15 border border-coral/40 px-5 py-2.5 text-sm font-semibold text-coral hover:bg-coral/25 transition-colors"
            >
              All cities →
            </Link>
          </div>
        </div>
      </section>

      {localPages.length > 0 && (
        <section className="pb-4">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-black text-primary">{service.name} city by city</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {localPages.map((c) => (
                <Link
                  key={c.slug}
                  to="/pet-grooming/$city/$service"
                  params={{ city: c.slug, service: service.slug }}
                  className="group rounded-2xl bg-coral/10 border border-coral/30 p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                    {service.name} in {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={service.faqs} heading={`${service.name} — FAQs`} />

      {/* --------------------------------------------------- other services */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-black text-primary">Other grooming services</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((s) => {
              const OtherIcon = ICONS[s.icon] ?? PawPrint;
              return (
                <Link
                  key={s.slug}
                  to="/services/$service"
                  params={{ service: s.slug }}
                  className="group flex items-start gap-4 rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <span className="h-11 w-11 rounded-xl bg-aqua/25 grid place-items-center shrink-0">
                    <OtherIcon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-primary group-hover:text-coral transition-colors">
                      {s.name}
                    </span>
                    {s.price && (
                      <span className="block text-sm text-muted-foreground mt-0.5">
                        from {s.price}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection heading={`Book ${service.name.toLowerCase()}`} />
      <Footer />
      <FloatingActions />
    </div>
  );
}
