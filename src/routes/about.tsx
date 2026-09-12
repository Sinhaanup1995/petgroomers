import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection } from "@/components/site/sections";
import { LEGAL } from "@/data/legal";
import { cityCount } from "@/data/city-index";
import { guideCount } from "@/data/guide-index";
import { BRAND, HOURS, PHONE_DISPLAY, services, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { breadcrumbSchema, localBusinessSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Petgroomers",
      description:
        "Who we are and how doorstep dog and cat grooming works: one groomer, your bathroom or balcony, no salon and no cage. Serving 44 cities across India.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  const who = LEGAL.entityName ?? BRAND;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={localBusinessSchema({ path: "/about" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "About" }]} />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="font-display text-4xl md:text-5xl font-black text-primary leading-tight">
          About {BRAND}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          We groom dogs and cats at home. No salon, no cage, no drive across town with an anxious
          animal in the back seat — a groomer comes to you, works in your bathroom or on your
          balcony, and leaves.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-primary">
            Why we work this way
          </h2>
          <div className="mt-3 space-y-3 text-foreground/90 leading-[1.75]">
            <p>
              Most of what frightens a pet about grooming happens before the grooming starts. The
              carrier, the car, the unfamiliar room, the noise of other animals, the wait in a
              holding cage. By the time a nervous dog reaches the table, a good half of its stress
              has nothing to do with the bath.
            </p>
            <p>
              Taking the session to the pet removes all of that. It also means you can watch. You
              see how your animal is handled, you can step in, and nothing happens to your pet out
              of your sight — which is not something a salon can offer, however good it is.
            </p>
            <p>
              The trade-off is honest: we have no walk-in tub and no hydraulic table. For a very
              large, heavily-coated dog a well-equipped salon has better equipment than we can carry
              up a staircase. We will tell you if we think that is your situation.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-primary">
            What a session involves
          </h2>
          <div className="mt-3 space-y-3 text-foreground/90 leading-[1.75]">
            <p>
              A groomer arrives with their own kit — clippers, blades, scissors, dryer, pet-safe
              shampoos and towels. They need water, a power point, a space that can get wet, and an
              adult at home.
            </p>
            <p>
              Drying is the part that takes longest and matters most, particularly in a humid Indian
              monsoon where a coat left damp at the skin is how fungal trouble starts. We would
              rather spend an extra half hour drying properly than finish early.
            </p>
          </div>
          <ul className="mt-5 space-y-2">
            {services.map((s) => (
              <li key={s.name} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-aqua/40 grid place-items-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-foreground">
                  <strong className="text-primary">{s.name}</strong> — {s.short}{" "}
                  <span className="text-coral font-semibold">{s.price}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Full breakdown on the{" "}
            <Link to="/pricing" className="text-primary font-semibold hover:underline">
              pricing page
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-primary">
            What we don&apos;t do
          </h2>
          <div className="mt-3 space-y-3 text-foreground/90 leading-[1.75]">
            <p>
              We are groomers, not veterinarians. We do not diagnose, prescribe, medicate or sedate,
              and we will not groom an animal that has been sedated so we can work on it. If we find
              something on your pet that worries us — a lump, an inflamed ear, raw skin under a mat
              — we will show you and tell you to see a vet. We will not treat it.
            </p>
            <p>
              We also do not shave double-coated breeds on request alone. The undercoat insulates
              against heat as well as cold, and clipping it can permanently damage how it regrows.
              We will explain the alternative, and if you still want the coat taken off we will turn
              the job down rather than do it. There is a{" "}
              <Link
                to="/guides/$guide"
                params={{ guide: "is-it-safe-to-shave-your-dog-in-summer" }}
                className="text-primary font-semibold hover:underline"
              >
                full guide on this
              </Link>
              .
            </p>
            <p>
              And we will tell you when your pet does not need us. A healthy short-coated dog walked
              on pavements often needs no nail trim and no monthly bath. We have written{" "}
              {guideCount} guides, several of which exist mainly to say so.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-primary">Where we operate</h2>
          <div className="mt-3 space-y-3 text-foreground/90 leading-[1.75]">
            <p>
              We currently serve {cityCount} cities across India,{" "}
              {HOURS.replace("7 Days a Week: ", "seven days a week, ")}. Coverage varies by locality
              within each city — the quickest way to find out is to call.
            </p>
          </div>
          <Link
            to="/locations"
            className="mt-4 inline-block text-primary font-semibold hover:underline"
          >
            See every city we cover →
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-primary">Business details</h2>
          <dl className="mt-3 space-y-2 text-foreground/90">
            <div className="flex gap-2">
              <dt className="font-semibold text-primary">Trading as:</dt>
              <dd>{who}</dd>
            </div>
            {LEGAL.foundedYear && (
              <div className="flex gap-2">
                <dt className="font-semibold text-primary">Operating since:</dt>
                <dd>{LEGAL.foundedYear}</dd>
              </div>
            )}
            {LEGAL.gstin && (
              <div className="flex gap-2">
                <dt className="font-semibold text-primary">GSTIN:</dt>
                <dd>{LEGAL.gstin}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="font-semibold text-primary">Phone:</dt>
              <dd>
                <a href={TEL_URL} className="hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
          {LEGAL.credentials.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold text-primary">Training and certification</h3>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-foreground/90">
                {LEGAL.credentials.map((c) => (
                  <li key={c.body}>
                    <strong>{c.body}</strong> — {c.detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="coral" size="xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
          </Button>
          <Button variant="tealOutline" size="xl" asChild>
            <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
          </Button>
        </div>
      </article>

      <ContactSection heading="Questions before you book?" />
      <Footer />
      <FloatingActions />
    </div>
  );
}
