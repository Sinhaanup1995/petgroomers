// Shared content types for the SEO landing pages.

export type Region = "North" | "South" | "East" | "West" | "Central" | "Northeast";

export type City = {
  /** URL slug, lowercase kebab-case. Page lives at /pet-grooming/<slug> */
  slug: string;
  /** Display name, e.g. "Pune" */
  name: string;
  /** State or union territory, e.g. "Maharashtra" */
  state: string;
  region: Region;
  /** 6-8 real localities/neighbourhoods we list as "areas we serve". */
  areas: string[];
  /** 3-4 slugs of other cities in this file, for internal linking. */
  nearby: string[];
  /**
   * 2-3 sentence intro, genuinely specific to this city — climate and what it
   * means for a pet's coat, local pet-parent habits, notable localities.
   * Must NOT be a template with the city name swapped in.
   */
  intro: string;
  /** One sentence on coat//weather care advice specific to this city. */
  coatTip: string;
  /** 3 city-specific FAQ entries. */
  faqs: { q: string; a: string }[];
};

export type SeoService = {
  /** URL slug. Page lives at /services/<slug> */
  slug: string;
  /** H1-friendly name, e.g. "Dog Grooming at Home" */
  name: string;
  /** Short page title fragment for <title>, under 60 chars with brand. */
  title: string;
  /** Meta description, 140-158 chars. */
  description: string;
  /** Lucide icon name that exists in lucide-react, e.g. "Bath" */
  icon: string;
  /** Which pricing package this maps to, or null for informational pages. */
  price: string | null;
  /** 2-3 sentence intro for the hero. */
  intro: string;
  /** 5-7 bullet points of what is included / what we do. */
  includes: string[];
  /** 3-4 benefit cards: short title + one sentence. */
  benefits: { title: string; desc: string }[];
  /** 3 FAQ entries specific to this service. */
  faqs: { q: string; a: string }[];
};

/* ------------------------------------------------------------------ breeds */

export type Breed = {
  /** URL slug. Page lives at /breeds/<slug> */
  slug: string;
  /** Display name, e.g. "Golden Retriever" */
  name: string;
  species: "dog" | "cat";
  /** e.g. "Double coat, dense undercoat" */
  coatType: string;
  /** "Low" | "Moderate" | "High" | "Very high" */
  sheddingLevel: string;
  /** e.g. "Every 4-6 weeks" */
  groomingFrequency: string;
  /** Must match one of our package names. */
  recommendedPackage: string;
  price: string;
  /** Page title, under 60 chars including brand. */
  title: string;
  /** Meta description, 140-158 chars. */
  description: string;
  /** 2-3 sentence hero intro, specific to this breed in Indian conditions. */
  intro: string;
  /** 4-5 grooming challenges particular to this breed. */
  challenges: { title: string; desc: string }[];
  /** 5-6 concrete care tips for this breed. */
  careTips: string[];
  /** 3 breed-specific FAQs. */
  faqs: { q: string; a: string }[];
};

/* ------------------------------------------------- city x service combos */

export type CityService = {
  /** Must be an existing city slug. */
  citySlug: string;
  /** Must be an existing service slug. */
  serviceSlug: string;
  /** Page title, under 60 chars including brand. */
  title: string;
  /** Meta description, 140-158 chars. */
  description: string;
  /** 3-4 sentences tying THIS service to THIS city specifically. */
  intro: string;
  /** One paragraph on local demand/conditions for this service in this city. */
  localNote: string;
  /** 3 FAQs naming both the city and the service. */
  faqs: { q: string; a: string }[];
};

/* ------------------------------------------------------------------ guides */

export type Guide = {
  /** URL slug. Page lives at /guides/<slug> */
  slug: string;
  /** Display H1, e.g. "Is It Safe to Shave Your Dog in Summer?" */
  name: string;
  /** <title> text, under 55 chars WITHOUT the brand (brand is appended once). */
  title: string;
  /** Meta description, 140-158 chars. */
  description: string;
  category: "seasonal" | "problem" | "how-to";
  /** Lucide icon name that exists in lucide-react. */
  icon: string;
  /** 2-3 sentence standfirst. */
  intro: string;
  /** 4-6 substantial sections. `body` is 2-4 paragraphs separated by "\n\n". */
  sections: { heading: string; body: string }[];
  /** 4-6 one-line takeaways for a summary box. */
  keyTakeaways: string[];
  /** 3-4 FAQs. */
  faqs: { q: string; a: string }[];
  /** Service slugs this guide should link to. Must exist in services-seo.ts. */
  relatedServices: string[];
  /** Breed slugs worth linking. Must exist in breeds.ts. */
  relatedBreeds: string[];
};
