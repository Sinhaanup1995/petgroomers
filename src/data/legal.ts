/**
 * Business identity and legal details.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * FILL THESE IN. Every field below is null because nobody has supplied the real
 * value yet, and inventing one on a privacy policy or an About page is worse
 * than leaving it out — a fabricated registered address is a legal exposure,
 * not a placeholder.
 *
 * The /about, /contact, /privacy and /terms pages read this file and render
 * ONLY the fields that are filled in. Nothing breaks while they are null; the
 * pages simply say less, and fall back to the phone number for contact. Run
 * `npm run legal:check` to see what is still missing.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type LegalDetails = {
  /** Registered legal name, e.g. "Petgroomers Services Pvt. Ltd." or the proprietor's name. */
  entityName: string | null;
  /** Year the business started operating, e.g. 2015. Used for "since YYYY". */
  foundedYear: number | null;
  /** GSTIN, if registered. */
  gstin: string | null;
  /**
   * Person or role handling privacy requests under the DPDP Act 2023.
   * Name/role + a contact route. Falls back to the phone number when null.
   */
  grievanceContact: { name: string; contact: string } | null;
  /**
   * Verifiable credentials for the grooming team — certifying body and what it
   * certifies. Leave empty until these can actually be evidenced; the site
   * previously claimed "Certified & Trained Staff" with nothing behind it.
   */
  credentials: { body: string; detail: string }[];
};

export const LEGAL: LegalDetails = {
  entityName: null,
  foundedYear: null,
  gstin: null,
  grievanceContact: null,
  credentials: [],
};

/** True when the legally required identity fields are present. */
export const legalIsComplete = LEGAL.entityName !== null;

/** Date the policies were last revised, shown on /privacy and /terms. */
export const POLICY_UPDATED = "2026-09-11";

/**
 * Footer copyright year. A literal, not `new Date().getFullYear()`: the server
 * renders in UTC and the browser in the viewer's timezone, so around New Year
 * the two disagree and React reports a hydration mismatch on every page.
 */
export const COPYRIGHT_YEAR = 2026;
