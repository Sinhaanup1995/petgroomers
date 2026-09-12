import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, IndianRupee, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs, ContactSection, FaqSection } from "@/components/site/sections";
import { serviceIndex } from "@/data/service-index";
import { cityCount } from "@/data/city-index";
import { PHONE_DISPLAY, services, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageHead } from "@/lib/seo";

const faqs = [
  {
    q: "How much does pet grooming cost in India?",
    a: "Our packages run from Rs. 1,500 for a Spa Bath to Rs. 2,500 for Grooming with Extra Care, and the price is the same in every city we serve. Salon prices in metros vary a lot more, so we keep a single published rate card rather than quoting per area.",
  },
  {
    q: "Is the price different for a big dog or a long-coated breed?",
    a: "The package price covers standard grooming for most breeds and sizes. Very large, heavily matted or double-coated dogs occasionally need extra time, and if that applies we tell you on the call before booking — never after the groomer arrives.",
  },
  {
    q: "Do you charge a travel or visit fee on top?",
    a: `There is no call-out charge in the areas we normally serve — the package price includes the groomer travelling to you. For locations well outside those areas we will tell you any travel cost on the call, before you confirm. Rescheduling with reasonable notice is free: just call ${PHONE_DISPLAY}.`,
  },
  {
    q: "Is grooming cheaper for cats than dogs?",
    a: "Cat grooming is priced from the same rate card. Cats usually take longer to settle than dogs, so we book a slightly wider slot and work at the cat's pace rather than rushing the session to fit a cheaper price.",
  },
  {
    q: "How do I pay, and do I pay in advance?",
    a: "You pay after the session is finished, once you have seen your pet. We accept UPI and cash. There is no advance payment or deposit to book a slot.",
  },
  {
    q: "How often will my pet need grooming?",
    a: "Most short-coated dogs do well every 6-8 weeks, long-coated and double-coated breeds every 4-6 weeks, and cats when their coat starts to mat. Our groomer will tell you what your pet actually needs, which is sometimes less often than you expect.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageHead({
      title: "Pet Grooming Price List in India",
      description:
        "Pet grooming charges in India: Spa Bath Rs. 1,500, Full Grooming Rs. 2,000, Extra Care Rs. 2,500. No travel fee, no hidden costs, same rate in every city.",
      path: "/pricing",
    }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Pet grooming packages and prices",
          url: absoluteUrl("/pricing"),
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.short },
            price: s.price.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          })),
        }}
      />

      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: "Pricing" }]} />

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-aqua/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
            <IndianRupee className="h-4 w-4" /> One rate card, {cityCount} cities
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.08]">
            Pet Grooming Price List
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            One published rate card for dogs and cats, doorstep service included. No travel charge,
            no deposit, and you pay only after the session is done and you have seen your pet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get a quote on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- rate card */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <table className="w-full text-left min-w-[560px]">
              <caption className="sr-only">
                Petgroomers package prices for dogs and cats in India
              </caption>
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="px-6 py-4 font-display font-extrabold">
                    Package
                  </th>
                  <th scope="col" className="px-6 py-4 font-display font-extrabold">
                    What it covers
                  </th>
                  <th scope="col" className="px-6 py-4 font-display font-extrabold text-right">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name} className="border-t border-border align-top">
                    <th scope="row" className="px-6 py-5 font-bold text-primary whitespace-nowrap">
                      {s.name}
                    </th>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{s.short}</td>
                    <td className="px-6 py-5 text-right font-display text-2xl font-black text-coral whitespace-nowrap">
                      {s.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Prices are per session and include the groomer travelling to your home. Dogs and cats
            are priced from the same card.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- what's inside */}
      <section className="py-12 md:py-16 bg-aqua/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary text-center">
            What each package includes
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.name}
                className="rounded-3xl bg-card p-7 border border-border/60 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-primary">{s.name}</h3>
                  <span className="font-display text-xl font-black text-coral whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-aqua/30 grid place-items-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ service links */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-black text-primary">Prices by service</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceIndex.map((s) => (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-aqua/20 hover:border-aqua transition-colors shadow-[var(--shadow-soft)]"
              >
                {s.name}
                <span className="ml-2 text-coral">{s.price ?? "in every package"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="Pricing questions, answered" />

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-black text-primary">
            Not sure which package your pet needs?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us the breed and when they were last groomed — we&apos;ll tell you honestly what
            they need, even if that is the cheaper option.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="!gap-3">
                <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild className="rounded-full">
              <a href={TEL_URL} className="!gap-3">
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection heading="Book at a price you already know" />
      <Footer />
      <FloatingActions />
    </div>
  );
}
