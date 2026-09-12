import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, SOCIAL, TEL_URL, WHATSAPP_URL } from "@/data/site";
import { serviceIndex } from "@/data/service-index";
import { cityCount, cityIndexBySlug } from "@/data/city-index";
import { Logo } from "@/components/site/Logo";
import { COPYRIGHT_YEAR } from "@/data/legal";

/** Cities surfaced in the footer on every page, so crawlers reach them in one hop. */
const FOOTER_CITY_SLUGS = [
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
];

export function Footer() {
  const footerCities = FOOTER_CITY_SLUGS.map((slug) => cityIndexBySlug[slug]).filter(Boolean);

  return (
    <footer className="bg-[oklch(0.22_0.04_180)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 grid gap-10 md:grid-cols-4">
        <div>
          <Logo tone="dark" withTagline={false} />
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-[240px]">
            Doorstep dog &amp; cat grooming across India. Care your pet will love.
          </p>
          <a
            href={TEL_URL}
            className="mt-5 inline-flex items-center gap-2 font-bold hover:text-aqua transition-colors"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-5 flex gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-11 w-11 rounded-full bg-background/10 grid place-items-center hover:bg-coral transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-extrabold text-aqua">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {serviceIndex.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$service"
                  params={{ service: s.slug }}
                  className="hover:text-aqua transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-extrabold text-aqua">Popular Cities</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {footerCities.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/pet-grooming/$city"
                  params={{ city: c.slug }}
                  className="hover:text-aqua transition-colors"
                >
                  Pet Grooming in {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/locations" className="font-semibold text-aqua hover:underline">
                View all {cityCount} cities →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-extrabold text-aqua">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/about" className="hover:text-aqua transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-aqua transition-colors">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-aqua transition-colors">
                All Locations
              </Link>
            </li>
            <li>
              <Link to="/breeds" className="hover:text-aqua transition-colors">
                Grooming by Breed
              </Link>
            </li>
            <li>
              <Link to="/guides" className="hover:text-aqua transition-colors">
                Grooming Guides
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-aqua transition-colors">
                Prices
              </Link>
            </li>
            <li>
              <a href="/#gallery" className="hover:text-aqua transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-aqua transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Open 7 days a week
            <br />
            8:00 AM – 8:00 PM
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {COPYRIGHT_YEAR} Petgroomers. Doorstep pet grooming across India.</p>
          <nav className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-aqua">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-aqua">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
