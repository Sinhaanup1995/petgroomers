import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bath, Scissors, Sparkles, Heart, Award, ShieldCheck, Leaf, Smile,
  Clock, MapPin, Phone, Instagram, Facebook, MessageCircle,
  Star, Check, GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import logo from "@/assets/FINAL LOGO PETS GROOMERS-02.png";
import hero from "@/assets/hero-grooming.jpg";
import cat from "@/assets/cat.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import svcSpa from "@/assets/service-spa-bath.jpg";
import svcFull from "@/assets/service-full-grooming.jpg";
import svcExtra from "@/assets/service-extra-care.jpg";
import svcHaircut from "@/assets/service-haircut.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Petgroomers — Professional Pet Grooming Salon" },
      { name: "description", content: "Spa baths, full grooming, and gentle, certified care for your beloved pet. Book your pampering session today at Petgroomers." },
      { property: "og:title", content: "Petgroomers — Professional Pet Grooming Salon" },
      { property: "og:description", content: "Spa baths, full grooming, and gentle, certified care for your beloved pet." },
    ],
  }),
  component: Index,
});

const PHONE = "9990599189";
const PHONE_DISPLAY = "+91 99905 99189";
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi Petgroomers! I'd like to book a grooming session for my pet.")}`;
const TEL_URL = `tel:+91${PHONE}`;

const spaBathDetails = [
  "Full Body Bath",
  "Blow Dry",
  "Hair Brush / Combing",
  "Nail Cutting",
  "Ear Cleaning",
  "Eye Cleaning",
  "Tooth Cleaning / Mouth Freshener",
  "Paw Massage",
];

const services = [
  {
    icon: Bath,
    image: svcSpa,
    name: "Spa Bath Package",
    price: "Rs. 1,500",
    short: "A complete relaxing spa experience from bath to paw massage.",
    details: spaBathDetails,
  },
  {
    icon: Scissors,
    image: svcFull,
    name: "Full Grooming",
    price: "Rs. 2,000",
    short: "Complete bath, haircut & all grooming services in one session.",
    details: [...spaBathDetails, "Haircut / Breed-specific Styling", "Sanitary Cutting", "Blow Dry & Finishing Spray"],
  },
  {
    icon: Sparkles,
    image: svcExtra,
    name: "Grooming with Extra Care",
    price: "Rs. 2,500",
    short: "Full grooming plus tick treatment and pampering add-ons your pet will love.",
    details: ["Everything in Full Grooming", "Tick Treatment", "De-shedding Treatment", "Soothing Paw Massage", "Teeth Brushing"],
  },
  {
    icon: Heart,
    image: svcHaircut,
    name: "Package Hair Cut Only",
    price: "Rs. 1,500",
    short: "Breed-specific styling for a fresh, clean look.",
    details: ["Breed-specific haircut", "Detail styling", "Finishing spray", "Light brush out"],
  },
];

const features = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Leaf, label: "100% Safe Products" },
  { icon: Smile, label: "Stress-Free Environment" },
  { icon: GraduationCap, label: "Certified & Trained Staff" },
];

const reviews = [
  { name: "Ayesha Khan", pet: "Bruno", initials: "AK", quote: "Bruno came home looking like a movie star! The team was so gentle and patient with him." },
  { name: "Rohan Mehta", pet: "Mochi", initials: "RM", quote: "Best grooming in town. Mochi actually enjoys her spa days now — I never thought I'd see that!" },
  { name: "Sara Iqbal", pet: "Whiskers", initials: "SI", quote: "Professional, kind and detail-oriented. My cat looked and smelled amazing for days." },
];

const highlights = [
  { icon: Award, title: "Certified Groomers", desc: "Trained professionals who love what they do." },
  { icon: Heart, title: "Gentle Handling", desc: "Calm, kind handling for every breed and temperament." },
  { icon: ShieldCheck, title: "Premium Products", desc: "Only safe, pet-friendly shampoos and tools." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Petgroomers home">
          <span className="grid place-items-center h-24 w-24">
            <img src={logo} alt="Petgroomers logo" className="h-full w-full object-contain drop-shadow-md" />
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button variant="coral" size="default" asChild className="rounded-full">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
        </Button>
      </div>
    </header>
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
            Gentle hands, premium products and a stress-free experience — because every wag, purr and tail-flick matters at Petgroomers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="coral" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a href={TEL_URL}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["AK","RM","SI"].map((i)=>(
                <div key={i} className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold ring-2 ring-background">{i}</div>
              ))}
            </div>
            <div>
              <div className="flex text-coral">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-current"/>))}</div>
              <p className="mt-1">Loved by 500+ happy pet parents</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-aqua/30 to-coral/20 rounded-[3rem] rotate-2 -z-10" />
          <div className="relative grid grid-cols-2 gap-4">
            <img src={hero} alt="Happy dog being groomed" width={640} height={800} className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover" />
            <img src={cat} alt="Happy cat being groomed" width={640} height={800} className="rounded-[2rem] shadow-[var(--shadow-card)] w-full aspect-[3/4] object-cover mt-10" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-soft)] p-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-aqua/30 grid place-items-center"><Smile className="h-6 w-6 text-primary"/></div>
            <div>
              <p className="font-bold text-primary">100% Happy Pets</p>
              <p className="text-xs text-muted-foreground">Tail-wag guaranteed</p>
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
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">Passionate about pampering pets</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            At Petgroomers, your furry family member is treated like our own. Our certified team blends years of experience with genuine love for animals — creating a calm, joyful space where every visit feels like a treat. From quick spa baths to full styling, we're here to keep your pet healthy, happy and looking their very best.
          </p>
          <Button variant="tealOutline" size="lg" asChild className="mt-8">
            <a href={TEL_URL}>Call Us Now</a>
          </Button>
        </div>
        <div className="space-y-5">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-5 p-6 rounded-2xl bg-card shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform">
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

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-aqua/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">Grooming made delightful</h2>
          <p className="mt-4 text-muted-foreground">Pick the perfect package for your pet — every service ends in tail wags.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral/15 border-2 border-coral/40 px-6 py-2.5">
            <span className="text-base font-black text-coral tracking-wide">🐶 Dogs &amp; 🐱 Cats — We Groom Both!</span>
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((s) => (<ServiceCard key={s.name} service={s} />))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[number] }) {
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
              <Button variant="tealOutline" size="default" className="rounded-full">View Details</Button>
            </DialogTrigger>
            <DialogContent className="rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary font-display">{service.name}</DialogTitle>
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
                <span className="text-2xl font-black text-primary font-display">{service.price}</span>
                <Button variant="coral" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Book this</a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="coral" size="default" asChild className="rounded-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <section className="py-20 md:py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">Trusted by pet parents</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.label} className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform">
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

function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Reviews</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">Wagging tails, happy hearts</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-cream rounded-3xl p-7 border border-border/70 hover:-translate-y-1 transition-transform shadow-[var(--shadow-soft)]">
              <div className="flex text-coral">
                {[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-current"/>))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{r.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">{r.initials}</div>
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

function Gallery() {
  const imgs = [gallery1, gallery2, gallery3];
  return (
    <section id="gallery" className="py-20 md:py-28 bg-aqua/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral font-bold uppercase tracking-widest text-sm">Gallery</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-primary">See the Transformation</h2>
          <p className="mt-4 text-muted-foreground">Real pets, real glow-ups — fresh from our grooming table.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {imgs.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] aspect-square">
              <img src={src} alt={`Pet grooming transformation ${i+1}`} loading="lazy" width={800} height={800} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-aqua font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Book your pet's pampering</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-md">
            We'd love to meet your furry friend. Tap below to call or message us on WhatsApp — we'll find the perfect time for their visit.
          </p>
          <ul className="mt-10 space-y-5">
            <ContactRow icon={Phone} label={PHONE_DISPLAY} />
            <ContactRow icon={MapPin} label="Pan India Services — We Come to You!" />
            <ContactRow icon={Clock} label="7 Days a Week: 8:00 AM – 8:00 PM" />
          </ul>
        </div>
        <div className="bg-background text-foreground rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] space-y-6">
          <div className="text-center">
            <h3 className="font-display text-3xl font-black text-primary">Reach us instantly</h3>
            <p className="mt-2 text-muted-foreground">Choose how you'd like to book your pet's session.</p>
          </div>
          <div className="grid gap-4">
            <Button variant="coral" size="xl" asChild className="w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="!gap-3">
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

function ContactRow({ icon: Icon, label }: { icon: typeof Phone; label: string }) {
  return (
    <li className="flex items-center gap-4">
      <span className="h-12 w-12 rounded-2xl bg-aqua/20 grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-aqua" />
      </span>
      <span className="font-medium">{label}</span>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.04_180)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10 items-center">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-20 w-20">
            <img src={logo} alt="Petgroomers logo" className="h-full w-full object-contain drop-shadow-md" />
          </span>
          <p className="text-sm text-primary-foreground/70 max-w-[200px]">Care your pet will love.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#about" className="hover:text-aqua transition-colors">About</a>
          <a href="#services" className="hover:text-aqua transition-colors">Services</a>
          <a href="#reviews" className="hover:text-aqua transition-colors">Reviews</a>
          <a href="#gallery" className="hover:text-aqua transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-aqua transition-colors">Contact</a>
        </nav>
        <div className="flex md:justify-end gap-3">
          <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Petgroomers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group h-14 w-14 rounded-full grid place-items-center text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={TEL_URL}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="h-14 w-14 rounded-full grid place-items-center bg-coral text-coral-foreground shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}
