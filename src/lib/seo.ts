import { BRAND, HOURS, OG_IMAGE, PHONE_E164, SITE_URL, SOCIAL } from "@/data/site";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetaArgs = {
  title: string;
  description: string;
  /** Route path, e.g. "/pet-grooming/pune" */
  path: string;
  image?: string;
};

/**
 * Builds the full meta + canonical link set for a page. Returned shape matches
 * what TanStack Router's `head()` expects.
 */
/**
 * Ensures the brand appears exactly once, at the end. Content data sometimes
 * carries "| Petgroomers" already; appending it again gave titles like
 * "... | Petgroomers | Petgroomers" and pushed them past Google's ~60-char
 * display limit.
 */
function brandedTitle(raw: string) {
  const cleaned = raw.replace(/\s*[|—–-]\s*Petgroomers\s*$/i, "").trim();
  return /petgroomers/i.test(cleaned) ? cleaned : `${cleaned} | ${BRAND}`;
}

export function pageHead({ title: rawTitle, description, path, image = OG_IMAGE }: MetaArgs) {
  const title = brandedTitle(rawTitle);
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: BRAND },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

const SERVICE_CATALOG = [
  { name: "Spa Bath Package", price: "1500" },
  { name: "Full Grooming", price: "2000" },
  { name: "Grooming with Extra Care", price: "2500" },
  { name: "Package Hair Cut Only", price: "1500" },
];

/**
 * LocalBusiness schema. When `city` is supplied the entity is scoped to that
 * city's service area, which is what Google uses for local pack results.
 */
export function localBusinessSchema(opts: {
  city?: string;
  state?: string;
  path: string;
  /**
   * Only pass true on pages that actually render the full package price grid.
   * Structured data must describe content the reader can see, so a page that
   * shows one price must not declare the whole catalogue.
   */
  includeCatalog?: boolean;
}) {
  const { city, state, path, includeCatalog = false } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": `${absoluteUrl(path)}#business`,
    name: city ? `${BRAND} — Pet Grooming in ${city}` : BRAND,
    description: city
      ? `Doorstep dog and cat grooming in ${city}${state ? `, ${state}` : ""}. Spa baths, full grooming, haircuts and tick treatment at your home.`
      : `Pan-India doorstep dog and cat grooming. Spa baths, full grooming, haircuts and tick treatment at your home.`,
    url: absoluteUrl(path),
    telephone: PHONE_E164,
    image: OG_IMAGE,
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-20:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
    // Deliberately no PostalAddress. This is a service-area business with no
    // premises in these cities; asserting an address we cannot prove — in
    // markup a reader never sees — breaks Google's structured-data guidelines
    // and is the classic fake-location pattern. Coverage lives in areaServed.
    areaServed: city
      ? {
          "@type": "City",
          name: city,
          ...(state ? { containedInPlace: { "@type": "State", name: state } } : {}),
        }
      : { "@type": "Country", name: "India" },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    ...(includeCatalog
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: city ? `Pet grooming packages in ${city}` : "Pet grooming packages",
            itemListElement: SERVICE_CATALOG.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name },
              price: s.price,
              priceCurrency: "INR",
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  price: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@type": "PetGroomer", name: BRAND, telephone: PHONE_E164, url: SITE_URL },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: PHONE_E164,
      availableLanguage: ["en", "hi"],
      serviceUrl: absoluteUrl(opts.path),
    },
    ...(opts.price
      ? {
          offers: {
            "@type": "Offer",
            price: opts.price.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  };
}
