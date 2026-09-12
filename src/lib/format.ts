const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Formats a "YYYY-MM-DD" string as "11 September 2026".
 *
 * Deliberately does NOT use `new Date(...).toLocaleDateString()`: that parses
 * the string as UTC midnight and then formats it in the *viewer's* timezone,
 * so a server in UTC renders "11 September" while a reader in New York renders
 * "10 September" — a React hydration mismatch and a visibly wrong date.
 */
export function formatDayMonthYear(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
