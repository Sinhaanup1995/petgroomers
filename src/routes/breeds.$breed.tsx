import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertCircle, Cat, Check, Clock, Dog, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, FaqSection, WhyUsSection } from "@/components/site/sections";
import { breedIndex } from "@/data/breed-index";
import { cityCount, cityIndexBySlug } from "@/data/city-index";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { breadcrumbSchema, faqSchema, pageHead, serviceSchema } from "@/lib/seo";

const LINKED_CITY_SLUGS = [
  "delhi",
  "mumbai",
  "bengaluru",
  "hyderabad",
  "chennai",
  "pune",
  "gurgaon",
  "noida",
];

export const Route = createFileRoute("/breeds/$breed")({
  loader: async ({ params }) => {
    const { breedsBySlug } = await import("@/data/breeds");
    // Object.hasOwn, not truthiness: "constructor"/"toString" resolve on the
    // prototype chain and would otherwise sail past this guard.
    if (!Object.hasOwn(breedsBySlug, params.breed)) throw notFound();
    const breed = breedsBySlug[params.breed];
    return { breed };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.breed;
    if (!b) return {};
    return pageHead({
      title: `${b.title} | Petgroomers`,
      description: b.description,
      path: `/breeds/${b.slug}`,
    });
  },
  component: BreedPage,
});

function BreedPage() {
  const { breed } = Route.useLoaderData();
  const SpeciesIcon = breed.species === "cat" ? Cat : Dog;
  const cities = LINKED_CITY_SLUGS.map((s) => cityIndexBySlug[s]).filter(Boolean);
  const related = breedIndex
    .filter((b) => b.species === breed.species && b.slug !== breed.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={serviceSchema({
          name: `${breed.name} grooming at home`,
          description: breed.description,
          path: `/breeds/${breed.slug}`,
          price: breed.price,
        })}
      />
      <JsonLd data={faqSchema(breed.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Breeds", path: "/breeds" },
          { name: breed.name, path: `/breeds/${breed.slug}` },
        ])}
      />

      <Nav />
      <Breadcrumbs
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Breeds", to: "/breeds" },
          { name: breed.name },
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <span className="mx-auto h-20 w-20 rounded-3xl bg-aqua/25 grid place-items-center">
            <SpeciesIcon className="h-10 w-10 text-primary" />
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            {breed.name} Grooming at Home
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{breed.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book {breed.name} grooming
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- quick facts */}
      <section className="pb-4">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Sparkles, label: "Coat type", value: breed.coatType },
            { icon: AlertCircle, label: "Shedding", value: breed.sheddingLevel },
            { icon: Clock, label: "Groom every", value: breed.groomingFrequency },
            {
              icon: Scissors,
              label: "We recommend",
              value: `${breed.recommendedPackage} · ${breed.price}`,
            },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-2xl bg-card border border-border/70 p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="h-10 w-10 rounded-xl bg-aqua/25 grid place-items-center">
                <f.icon className="h-5 w-5 text-primary" />
              </span>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {f.label}
              </p>
              <p className="mt-1 font-bold text-primary leading-snug">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- challenges */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              What to watch for
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Grooming a {breed.name}
            </h2>
            <div className="mt-8 space-y-4">
              {breed.challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-card p-6 border border-border/60 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-bold text-lg text-primary">{c.title}</h3>
                  <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-coral font-bold uppercase tracking-widest text-sm">
              Care tips
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Between our visits
            </h2>
            <ul className="mt-8 space-y-4">
              {breed.careTips.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-aqua/40 grid place-items-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-coral/10 border border-coral/30 p-6">
              <p className="font-bold text-primary">Recommended for a {breed.name}</p>
              <p className="mt-1 font-display text-2xl font-black text-coral">
                {breed.recommendedPackage} — {breed.price}
              </p>
              <Button variant="coral" size="lg" asChild className="mt-4 w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Book this package
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <FaqSection faqs={breed.faqs} heading={`${breed.name} grooming — FAQs`} />

      {/* ------------------------------------------------------- city links */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-black text-primary">{breed.name} grooming near you</h2>
          <p className="mt-2 text-muted-foreground">
            We come to your home in {cityCount} cities across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {cities.map((c) => (
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

      {/* ---------------------------------------------------- related breeds */}
      {related.length > 0 && (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-black text-primary">
              Other {breed.species === "cat" ? "cat" : "dog"} breeds we groom
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((b) => (
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection heading={`Book grooming for your ${breed.name}`} />
      <Footer />
      <FloatingActions />
    </div>
  );
}
