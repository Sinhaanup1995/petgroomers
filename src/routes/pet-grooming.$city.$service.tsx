import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, FaqSection, WhyUsSection } from "@/components/site/sections";
import { cityIndexBySlug } from "@/data/city-index";
import { serviceIndexBySlug } from "@/data/service-index";
import { HOURS, PHONE_DISPLAY, TEL_URL, whatsappUrl } from "@/data/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  pageHead,
  serviceSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/pet-grooming/$city/$service")({
  loader: async ({ params }) => {
    const [{ cityServiceByKey }, { citiesBySlug }, { seoServicesBySlug }] = await Promise.all([
      import("@/data/city-services"),
      import("@/data/cities"),
      import("@/data/services-seo"),
    ]);
    // Object.hasOwn, not truthiness: prototype keys like "constructor" resolve
    // on Object.prototype and would sail past the guard below.
    const key = `${params.city}/${params.service}`;
    if (
      !Object.hasOwn(cityServiceByKey, key) ||
      !Object.hasOwn(citiesBySlug, params.city) ||
      !Object.hasOwn(seoServicesBySlug, params.service)
    ) {
      throw notFound();
    }
    const combo = cityServiceByKey[key];
    const city = citiesBySlug[params.city];
    const service = seoServicesBySlug[params.service];
    // Only the hand-written combinations exist as pages. Anything else 404s
    // rather than rendering an auto-generated page, which is what Google's
    // doorway-page policy targets.
    if (!combo || !city || !service) throw notFound();
    return { combo, city, service };
  },
  head: ({ loaderData }) => {
    const d = loaderData;
    if (!d) return {};
    return pageHead({
      title: `${d.combo.title} | Petgroomers`,
      description: d.combo.description,
      path: `/pet-grooming/${d.combo.citySlug}/${d.combo.serviceSlug}`,
    });
  },
  component: CityServicePage,
});

function CityServicePage() {
  const { combo, city, service } = Route.useLoaderData();
  const path = `/pet-grooming/${combo.citySlug}/${combo.serviceSlug}`;
  const wa = whatsappUrl(`${city.name} (${service.name})`);
  const cityMeta = cityIndexBySlug[combo.citySlug];
  const siblings = ["dog-grooming-at-home", "cat-grooming-at-home", "tick-and-flea-treatment"]
    .filter((s) => s !== combo.serviceSlug)
    .map((s) => serviceIndexBySlug[s])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={localBusinessSchema({ city: city.name, state: city.state, path })} />
      <JsonLd
        data={serviceSchema({
          name: `${service.name} in ${city.name}`,
          description: combo.description,
          path,
          price: service.price,
        })}
      />
      <JsonLd data={faqSchema(combo.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: city.name, path: `/pet-grooming/${city.slug}` },
          { name: service.name, path },
        ])}
      />

      <Nav />
      <Breadcrumbs
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Locations", to: "/locations" },
          { name: city.name, to: "/pet-grooming/$city", params: { city: city.slug } },
          { name: service.name },
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
            <MapPin className="h-4 w-4" /> {city.name}, {city.state}
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-black text-primary leading-[1.08] break-words">
            {service.name} in {city.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{combo.intro}</p>
          {service.price && (
            <p className="mt-6 inline-flex items-baseline gap-2 rounded-full bg-coral/15 border-2 border-coral/40 px-6 py-2.5">
              <span className="text-sm font-semibold text-coral uppercase tracking-widest">
                From
              </span>
              <span className="font-display text-2xl font-black text-coral">{service.price}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={wa} target="_blank" rel="noopener noreferrer">
                Book in {city.name}
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 sm:grid-cols-3">
          <a href={TEL_URL} className="flex items-center gap-4 group">
            <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <Phone className="h-5 w-5 text-aqua" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                Call us
              </span>
              <span className="block font-bold group-hover:text-aqua transition-colors">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <MessageCircle className="h-5 w-5 text-aqua" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                WhatsApp
              </span>
              <span className="block font-bold group-hover:text-aqua transition-colors">
                Message us now
              </span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <Clock className="h-5 w-5 text-aqua" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                Open
              </span>
              <span className="block font-bold">{HOURS.replace("7 Days a Week: ", "")}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              In {city.name}
            </span>
            <h2 className="mt-3 text-3xl font-black text-primary">What this looks like locally</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{combo.localNote}</p>
            {cityMeta && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-primary">Areas we cover</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {city.areas.map((a: string) => (
                    <li
                      key={a}
                      className="rounded-full bg-card border border-border px-3.5 py-1.5 text-xs font-medium"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              What&apos;s included
            </span>
            <h2 className="mt-3 text-3xl font-black text-primary">Every session covers</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-aqua/40 grid place-items-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services/$service"
              params={{ service: service.slug }}
              className="mt-6 inline-block text-primary font-semibold hover:underline"
            >
              Full details of {service.name} →
            </Link>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <FaqSection faqs={combo.faqs} heading={`${service.name} in ${city.name} — FAQs`} />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-black text-primary">More in {city.name}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/pet-grooming/$city"
              params={{ city: city.slug }}
              className="rounded-full bg-aqua/15 border border-aqua/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/30 transition-colors"
            >
              All grooming in {city.name}
            </Link>
            {siblings.map((s) => (
              <Link
                key={s.slug}
                to="/pet-grooming/$city/$service"
                params={{ city: city.slug, service: s.slug }}
                className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/20 hover:border-aqua transition-colors shadow-[var(--shadow-soft)]"
              >
                {s.name} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={`Book ${service.name.toLowerCase()} in ${city.name}`}
        areaLine={`${city.name}, ${city.state} — we come to you`}
        whatsappHref={wa}
      />
      <Footer />
      <FloatingActions whatsappHref={wa} />
    </div>
  );
}
