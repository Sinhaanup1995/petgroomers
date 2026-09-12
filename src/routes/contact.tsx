import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/sections";
import { LEGAL } from "@/data/legal";
import { cityCount } from "@/data/city-index";
import { HOURS, PHONE_DISPLAY, SOCIAL, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { breadcrumbSchema, localBusinessSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Petgroomers",
      description:
        "Call or WhatsApp +91 99905 99189 to book doorstep dog and cat grooming. Open 7 days a week, 8 AM to 8 PM, across 44 cities in India.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={localBusinessSchema({ path: "/contact" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Contact" }]} />

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <h1 className="font-display text-4xl md:text-5xl font-black text-primary leading-tight">
          Contact Us
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          There is no booking form on this site — you talk to a person. Call us, or send a WhatsApp
          message with your city, your pet&apos;s breed and roughly when you&apos;d like us, and
          we&apos;ll come back with a slot.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <a
            href={TEL_URL}
            className="group rounded-3xl bg-card border border-border p-7 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
          >
            <span className="h-12 w-12 rounded-2xl bg-aqua/25 grid place-items-center">
              <Phone className="h-6 w-6 text-primary" />
            </span>
            <h2 className="mt-4 font-bold text-lg text-primary">Call us</h2>
            <p className="mt-1 font-display text-2xl font-black text-coral group-hover:underline">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Fastest if you want a slot today or tomorrow.
            </p>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-card border border-border p-7 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
          >
            <span className="h-12 w-12 rounded-2xl bg-aqua/25 grid place-items-center">
              <MessageCircle className="h-6 w-6 text-primary" />
            </span>
            <h2 className="mt-4 font-bold text-lg text-primary">WhatsApp</h2>
            <p className="mt-1 font-semibold text-primary group-hover:underline">
              Message {PHONE_DISPLAY}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Send a photo of your pet&apos;s coat and we&apos;ll tell you what it needs.
            </p>
          </a>
        </div>

        <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
          <div className="flex gap-4">
            <span className="h-11 w-11 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </span>
            <div>
              <dt className="font-bold text-primary">Hours</dt>
              <dd className="text-muted-foreground">{HOURS}</dd>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="h-11 w-11 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </span>
            <div>
              <dt className="font-bold text-primary">Where we work</dt>
              <dd className="text-muted-foreground">
                {cityCount} cities across India — we travel to your home.{" "}
                <Link to="/locations" className="text-primary font-semibold hover:underline">
                  See the list
                </Link>
                .
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-10">
          <h2 className="font-bold text-primary">Find us elsewhere</h2>
          <div className="mt-3 flex gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 rounded-full bg-card border border-border grid place-items-center hover:bg-aqua/20 transition-colors"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-11 w-11 rounded-full bg-card border border-border grid place-items-center hover:bg-aqua/20 transition-colors"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-primary text-primary-foreground p-8">
          <h2 className="font-display text-2xl font-black">
            What to tell us when you get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-primary-foreground/85 list-disc pl-5">
            <li>Your city and locality</li>
            <li>Your pet&apos;s breed, rough age and when they were last groomed</li>
            <li>Anything we should know — nervous of dryers, dislikes strangers, recent surgery</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="coral" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="lg" asChild className="rounded-full bg-background">
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
