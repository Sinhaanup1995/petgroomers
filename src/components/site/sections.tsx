import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  features,
  HOURS,
  PHONE_DISPLAY,
  reviews,
  services,
  TEL_URL,
  WHATSAPP_URL,
} from "@/data/site";

/* ---------------------------------------------------------------- breadcrumbs */

export function Breadcrumbs({
  crumbs,
}: {
  crumbs: { name: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {crumbs.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            {c.to && i < crumbs.length - 1 ? (
              <Link
                to={c.to}
                params={c.params as never}
                className="hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------- services */

export function ServiceCard({
  service,
  whatsappHref = WHATSAPP_URL,
}: {
  service: (typeof services)[number];
  whatsappHref?: string;
}) {
  const Icon = service.icon;
  const [open, setOpen] = useState(false);
  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all border border-border/60 flex flex-col">
      <div className="relative aspect-[16/10] bg-aqua/15 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-card/95 backdrop-blur grid place-items-center shadow-[var(--shadow-soft)]">
          <Icon className="h-6 w-6 text-coral" />
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-extrabold text-primary">{service.name}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{service.short}</p>
        <p className="mt-5 text-3xl font-black text-primary font-display">{service.price}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="tealOutline" size="default" className="rounded-full">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary font-display">
                  {service.name}
                </DialogTitle>
                <DialogDescription>{service.short}</DialogDescription>
              </DialogHeader>
              <ul className="mt-2 space-y-3">
                {service.details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-aqua/30 grid place-items-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-2xl font-black text-primary font-display">
                  {service.price}
                </span>
                <Button variant="coral" asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Book this
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="coral" size="default" asChild className="rounded-full">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection({
  eyebrow = "Our Services",
  heading = "Grooming made delightful",
  sub = "Pick the perfect package for your pet — every service ends in tail wags.",
  whatsappHref = WHATSAPP_URL,
}: {
  eyebrow?: string;
  heading?: string;
  sub?: string;
  whatsappHref?: string;
}) {
  return (
    <section id="services" className="py-20 md:py-28 bg-aqua/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">{eyebrow}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">{heading}</h2>
          <p className="mt-4 text-muted-foreground">{sub}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral/15 border-2 border-coral/40 px-6 py-2.5">
            <span className="text-base font-black text-coral tracking-wide">
              🐶 Dogs &amp; 🐱 Cats — We Groom Both!
            </span>
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} whatsappHref={whatsappHref} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- why us */

export function WhyUsSection({ heading = "Trusted by pet parents" }: { heading?: string }) {
  return (
    <section className="py-20 md:py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">{heading}</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.label}
              className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-aqua/25 grid place-items-center">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="mt-4 font-bold text-primary leading-snug">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- reviews */

export function ReviewsSection({ heading = "Wagging tails, happy hearts" }: { heading?: string }) {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Reviews</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">{heading}</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-cream rounded-3xl p-7 border border-border/70 hover:-translate-y-1 transition-transform shadow-[var(--shadow-soft)]"
            >
              <div className="flex text-coral">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{r.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-primary">{r.name}</p>
                  <p className="text-sm text-muted-foreground">Pet parent of {r.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- faq */

export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: { q: string; a: string }[];
  heading?: string;
}) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">{heading}</h2>
        </div>
        <dl className="mt-10 space-y-4">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl bg-card border border-border/70 p-6 shadow-[var(--shadow-soft)]"
            >
              <dt className="font-bold text-primary text-lg">{f.q}</dt>
              <dd className="mt-2 text-muted-foreground leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- contact */

export function ContactSection({
  heading = "Book your pet's pampering",
  areaLine = "Pan India Services — We Come to You!",
  blurb = "We'd love to meet your furry friend. Tap below to call or message us on WhatsApp — we'll find the perfect time for their visit.",
  whatsappHref = WHATSAPP_URL,
}: {
  heading?: string;
  areaLine?: string;
  blurb?: string;
  whatsappHref?: string;
}) {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* min-w-0 + break-words: grid items default to min-width:auto, so a
            long interpolated city name widens the column past the viewport. */}
        <div className="min-w-0">
          <span className="text-aqua font-bold uppercase tracking-widest text-sm">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl font-black break-words md:text-5xl">{heading}</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-md">{blurb}</p>
          <ul className="mt-10 space-y-5">
            <ContactRow icon={Phone} label={PHONE_DISPLAY} />
            <ContactRow icon={MapPin} label={areaLine} />
            <ContactRow icon={Clock} label={HOURS} />
          </ul>
        </div>
        <div className="bg-background text-foreground rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] space-y-6">
          <div className="text-center">
            <h3 className="font-display text-3xl font-black text-primary">Reach us instantly</h3>
            <p className="mt-2 text-muted-foreground">
              Choose how you'd like to book your pet's session.
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="coral" size="xl" asChild className="w-full">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="!gap-3">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild className="w-full rounded-full">
              <a href={TEL_URL} className="!gap-3">
                <Phone className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Available 7 Days a Week, 8 AM to 8 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactRow({ icon: Icon, label }: { icon: typeof Phone; label: string }) {
  return (
    <li className="flex items-center gap-4">
      <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-aqua" />
      </span>
      <span className="font-medium">{label}</span>
    </li>
  );
}
