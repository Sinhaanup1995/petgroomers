import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import {
  Breadcrumbs,
  ContactSection,
  FaqSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/site/sections";
import { cityCount, cityIndexBySlug } from "@/data/city-index";
import { serviceIndex, serviceIndexBySlug } from "@/data/service-index";
import { servicesForCity } from "@/data/city-service-index";
import { HOURS, PHONE_DISPLAY, TEL_URL, whatsappUrl } from "@/data/site";
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-grooming.webp";
import hero480 from "@/assets/hero-grooming-480w.webp";
import hero768 from "@/assets/hero-grooming-768w.webp";
import cat from "@/assets/cat.webp";
import cat320 from "@/assets/cat-320w.webp";
import cat480 from "@/assets/cat-480w.webp";

export const Route = createFileRoute("/pet-grooming/$city/")({
  // Dynamic import keeps the 44-city content module out of every client
  // bundle: on first load the data arrives already serialised in the SSR
  // payload, so this only fetches on a client-side navigation.
  loader: async ({ params }) => {
    const { citiesBySlug } = await import("@/data/cities");
    if (!Object.hasOwn(citiesBySlug, params.city)) throw notFound();
    const city = citiesBySlug[params.city];
    return { city };
  },
  head: ({ loaderData }) => {
    const city = loaderData?.city;
    if (!city) return {};
    return pageHead({
      title: `Pet Grooming in ${city.name} at Home | Petgroomers`,
      description: `Doorstep dog & cat grooming in ${city.name}. Spa bath Rs. 1,500, full grooming Rs. 2,000. Trained groomers at your home, open daily. Call ${PHONE_DISPLAY}.`,
      path: `/pet-grooming/${city.slug}`,
    });
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const wa = whatsappUrl(city.name);
  const nearby = city.nearby.map((slug) => cityIndexBySlug[slug]).filter(Boolean);
  // Dedicated, hand-written pages for this city + service, where they exist.
  const localPages = servicesForCity(city.slug)
    .map((slug) => serviceIndexBySlug[slug])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={localBusinessSchema({
          city: city.name,
          state: city.state,
          path: `/pet-grooming/${city.slug}`,
          includeCatalog: true,
        })}
      />
      <JsonLd data={faqSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: `Pet Grooming in ${city.name}`, path: `/pet-grooming/${city.slug}` },
        ])}
      />

      <Nav />
      <Breadcrumbs
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Locations", to: "/locations" },
          { name: `Pet Grooming in ${city.name}` },
        ]}
      />

      {/* ------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-coral/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
          {/* min-w-0: grid items default to min-width:auto, so a long city name
              like "Thiruvananthapuram" widens the column past the viewport. */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
              <MapPin className="h-4 w-4" /> Serving {city.name}, {city.state}
            </span>
            <h1 className="mt-6 font-display text-3xl leading-[1.08] font-black text-primary break-words sm:text-4xl md:text-5xl lg:text-6xl">
              Pet Grooming in {city.name} — At Your Doorstep
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {city.intro}
            </p>
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
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Groomers travel to your home",
                "Dogs & cats, all breeds",
                "Open 7 days, 8 AM – 8 PM",
                "Certified, 10+ years experience",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-aqua/30 to-coral/20 rounded-[3rem] rotate-2 -z-10" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src={hero}
                srcSet={`${hero480} 480w, ${hero768} 768w, ${hero} 1280w`}
                sizes="(max-width: 767px) 45vw, 30vw"
                alt="Illustration of a dog being bathed and groomed"
                width={1280}
                height={1024}
                fetchPriority="high"
                className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover"
              />
              <img
                src={cat}
                srcSet={`${cat320} 320w, ${cat480} 480w, ${cat} 640w`}
                sizes="(max-width: 767px) 45vw, 30vw"
                alt="Illustration of a cat being groomed"
                width={640}
                height={640}
                loading="lazy"
                className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- contact strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 sm:grid-cols-3">
          <a href={TEL_URL} className="flex items-center gap-4 group">
            <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <Phone className="h-5 w-5 text-aqua" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-primary-foreground/60">
                Call us in {city.name}
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
                WhatsApp booking
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

      {/* ------------------------------------------------------------ areas */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              Areas We Cover
            </span>
            <h2 className="mt-3 text-3xl font-black break-words text-primary md:text-4xl">
              Doorstep grooming across {city.name}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{city.coatTip}</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {city.areas.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <MapPin className="h-3.5 w-3.5 text-coral" /> {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Not seeing your locality? We cover all of {city.name} — call{" "}
            <a href={TEL_URL} className="text-primary font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            and we&apos;ll confirm a slot.
          </p>
        </div>
      </section>

      <ServicesSection
        eyebrow={`Packages in ${city.name}`}
        heading={`Grooming packages & prices in ${city.name}`}
        sub={`Transparent pricing, no hidden charges. The same rates apply right across ${city.name}.`}
        whatsappHref={wa}
      />

      {/* --------------------------------------------------- service links */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl font-black break-words text-primary md:text-4xl">
              Every grooming service, delivered in {city.name}
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceIndex.map((s) => (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="group rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">in {city.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {localPages.length > 0 && (
        <section className="pb-4">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-black text-primary">Most booked in {city.name}</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {localPages.map((s) => (
                <Link
                  key={s.slug}
                  to="/pet-grooming/$city/$service"
                  params={{ city: city.slug, service: s.slug }}
                  className="group rounded-2xl bg-coral/10 border border-coral/30 p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <h3 className="font-bold text-primary group-hover:text-coral transition-colors">
                    {s.name} in {city.name}
                  </h3>
                  {s.price && <p className="mt-1 text-sm text-muted-foreground">from {s.price}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyUsSection />
      <FaqSection faqs={city.faqs} heading={`Pet grooming in ${city.name} — your questions`} />

      {/* ----------------------------------------------------- nearby cities */}
      {nearby.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-black text-primary flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-coral" /> We also groom nearby
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  to="/pet-grooming/$city"
                  params={{ city: n.slug }}
                  className="rounded-full bg-aqua/15 border border-aqua/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/30 transition-colors"
                >
                  Pet Grooming in {n.name}
                </Link>
              ))}
              <Link
                to="/locations"
                className="rounded-full bg-coral/15 border border-coral/40 px-5 py-2.5 text-sm font-semibold text-coral hover:bg-coral/25 transition-colors"
              >
                All {cityCount} cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactSection
        heading={`Book grooming in ${city.name}`}
        areaLine={`${city.name}, ${city.state} — we come to you`}
        blurb={`Tell us your locality in ${city.name} and your pet's breed, and we'll confirm a slot that suits you. Same-day appointments are often available.`}
        whatsappHref={wa}
      />
      <Footer />
      <FloatingActions whatsappHref={wa} />
    </div>
  );
}
