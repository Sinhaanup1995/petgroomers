import { createFileRoute } from "@tanstack/react-router";
import { Clock, Sparkles, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { JsonLd } from "@/components/site/JsonLd";
import { ContactSection, ServicesSection, WhyUsSection } from "@/components/site/sections";
import { highlights, PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { localBusinessSchema, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-grooming.webp";
import hero480 from "@/assets/hero-grooming-480w.webp";
import hero768 from "@/assets/hero-grooming-768w.webp";
import cat from "@/assets/cat.webp";
import cat320 from "@/assets/cat-320w.webp";
import cat480 from "@/assets/cat-480w.webp";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Petgroomers — Dog & Cat Grooming at Home, Across India",
      description:
        "Doorstep pet grooming across India. Spa baths, full grooming, haircuts and tick treatment for dogs and cats by certified groomers. Book on WhatsApp today.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={localBusinessSchema({ path: "/", includeCatalog: true })} />
      <Nav />
      <Hero />
      <About />
      <ServicesSection />
      <WhyUsSection />
      {/* Testimonials removed: the three in src/data/site.ts are invented
          placeholder names and quotes. Re-enable <ReviewsSection /> once real,
          consented customer reviews replace `reviews` in src/data/site.ts. */}
      <Gallery />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-aqua/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-coral/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-aqua/20 text-primary px-4 py-1.5 text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> Premium pet care, made joyful
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.05]">
            Your Pet Deserves the Best Care
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Gentle hands, premium products and a stress-free experience — because every wag, purr
            and tail-flick matters at Petgroomers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-9 w-9 rounded-full bg-aqua/25 grid place-items-center shrink-0">
              <Clock className="h-4 w-4 text-primary" />
            </span>
            <p>Open 7 days a week, 8 AM to 8 PM — we come to your home.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-aqua/30 to-coral/20 rounded-[3rem] rotate-2 -z-10" />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={hero}
              srcSet={`${hero480} 480w, ${hero768} 768w, ${hero} 1280w`}
              sizes="(max-width: 767px) 45vw, 30vw"
              alt="Happy dog being groomed"
              width={1280}
              height={1024}
              fetchPriority="high"
              className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover"
            />
            <img
              src={cat}
              srcSet={`${cat320} 320w, ${cat480} 480w, ${cat} 640w`}
              sizes="(max-width: 767px) 45vw, 30vw"
              alt="Happy cat being groomed"
              width={640}
              height={640}
              loading="lazy"
              className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover mt-10"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-soft)] p-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-aqua/30 grid place-items-center">
              <Smile className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-primary">Calm, Gentle Handling</p>
              <p className="text-xs text-muted-foreground">At your own home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-coral font-bold uppercase tracking-widest text-sm">About Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">
            Passionate about pampering pets
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            At Petgroomers, your furry family member is treated like our own. Our certified team
            blends years of experience with genuine love for animals — creating a calm, joyful space
            where every visit feels like a treat. From quick spa baths to full styling, we're here
            to keep your pet healthy, happy and looking their very best.
          </p>
          <Button variant="tealOutline" size="lg" asChild className="mt-8">
            <a href={TEL_URL}>Call Us Now</a>
          </Button>
        </div>
        <div className="space-y-5">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex gap-5 p-6 rounded-2xl bg-card shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform"
            >
              <div className="shrink-0 h-14 w-14 rounded-xl bg-aqua/25 grid place-items-center">
                <h.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg text-primary">{h.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [gallery1, gallery2, gallery3];
  return (
    <section id="gallery" className="py-20 md:py-28 bg-aqua/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Gallery</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">
            What a Session Looks Like
          </h2>
          <p className="mt-4 text-muted-foreground">
            Illustrations of the grooming we do — bath, blow dry, brush out and styling.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] aspect-square"
            >
              <img
                src={src}
                alt={`Illustration of pet grooming, ${i + 1} of 3`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
