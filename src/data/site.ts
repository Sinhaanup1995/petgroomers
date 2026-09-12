import {
  Bath,
  Scissors,
  Sparkles,
  Heart,
  Award,
  ShieldCheck,
  Leaf,
  Smile,
  GraduationCap,
} from "lucide-react";

import { SITE_ORIGIN } from "./site-origin";
import svcSpa from "@/assets/service-spa-bath.webp";
import svcFull from "@/assets/service-full-grooming.webp";
import svcExtra from "@/assets/service-extra-care.webp";
import svcHaircut from "@/assets/service-haircut.webp";

/**
 * Production origin, no trailing slash. Used for canonical URLs, og:url,
 * sitemap.xml and JSON-LD — a wrong value here tells Google the canonical page
 * lives somewhere else, so it is resolved rather than guessed.
 *
 * Resolution order, first hit wins:
 *   1. VITE_SITE_URL           — explicit override, set it to pin the domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel at build time and
 *      always the PRODUCTION domain (not the per-deployment preview URL), so
 *      this self-corrects on the first real deploy with no code change.
 *   3. SITE_URL_FALLBACK       — used only for local dev and as a last resort.
 *
 * Deliberately NOT derived from the incoming request Host header: that is
 * attacker-controllable and would emit a poisoned canonical, and on preview
 * deployments it would point Google at a throwaway URL.
 */
const SITE_URL_FALLBACK = "https://www.petsgroomers.in";

export const SITE_URL = SITE_ORIGIN;

/** True when the origin came from configuration rather than the fallback. */
export const SITE_URL_IS_VERIFIED = SITE_URL !== SITE_URL_FALLBACK;

export const BRAND = "Petgroomers";
export const PHONE = "9990599189";
export const PHONE_DISPLAY = "+91 99905 99189";
export const PHONE_E164 = "+919990599189";
export const TEL_URL = `tel:${PHONE_E164}`;
export const HOURS = "7 Days a Week: 8:00 AM – 8:00 PM";
export const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45e5f6e4-ed2d-4aa6-ac9c-3b80b0e35993/id-preview-a0314d73--c2c87b42-e33a-41bc-97ab-52523765435d.lovable.app-1782046629050.png";

export const SOCIAL = {
  instagram: "https://www.instagram.com/petsgroomers1?igsh=MXVoYTdoOW05aXZ6aQ%3D%3D",
  facebook:
    "https://www.facebook.com/profile.php?id=100086664415856&mibextid=wwXIfr&rdid=YwVQ3TpM65McEWDm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15v3C8AYEiE%2F%3Fmibextid%3DwwXIfr%26ref%3D1",
};

/** WhatsApp deep link with a context-aware prefilled message. */
export function whatsappUrl(context?: string) {
  const message = context
    ? `Hi ${BRAND}! I'd like to book a grooming session for my pet in ${context}.`
    : `Hi ${BRAND}! I'd like to book a grooming session for my pet.`;
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const spaBathDetails = [
  "Full Body Bath",
  "Blow Dry",
  "Hair Brush / Combing",
  "Nail Cutting",
  "Ear Cleaning",
  "Eye Cleaning",
  "Tooth Cleaning / Mouth Freshener",
  "Paw Massage",
];

export const services = [
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
    details: [
      ...spaBathDetails,
      "Haircut / Breed-specific Styling",
      "Sanitary Cutting",
      "Blow Dry & Finishing Spray",
    ],
  },
  {
    icon: Sparkles,
    image: svcExtra,
    name: "Grooming with Extra Care",
    price: "Rs. 2,500",
    short: "Full grooming plus tick treatment and pampering add-ons your pet will love.",
    details: [
      "Everything in Full Grooming",
      "Tick Treatment",
      "De-shedding Treatment",
      "Soothing Paw Massage",
      "Teeth Brushing",
    ],
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

export const features = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Leaf, label: "Pet-Safe Products" },
  { icon: Smile, label: "Stress-Free Environment" },
  { icon: GraduationCap, label: "Certified & Trained Staff" },
];

export const highlights = [
  {
    icon: Award,
    title: "Certified Groomers",
    desc: "Trained professionals who love what they do.",
  },
  {
    icon: Heart,
    title: "Gentle Handling",
    desc: "Calm, kind handling for every breed and temperament.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Products",
    desc: "Only safe, pet-friendly shampoos and tools.",
  },
];

export const reviews = [
  {
    name: "Ayesha Khan",
    pet: "Bruno",
    initials: "AK",
    quote:
      "Bruno came home looking like a movie star! The team was so gentle and patient with him.",
  },
  {
    name: "Rohan Mehta",
    pet: "Mochi",
    initials: "RM",
    quote:
      "Best grooming in town. Mochi actually enjoys her spa days now — I never thought I'd see that!",
  },
  {
    name: "Sara Iqbal",
    pet: "Whiskers",
    initials: "SI",
    quote: "Professional, kind and detail-oriented. My cat looked and smelled amazing for days.",
  },
];
