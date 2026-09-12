import { Link } from "@tanstack/react-router";
import mark from "@/assets/petgroomers-mark.png";

/**
 * Brand lockup: the badge mark plus the wordmark as live text.
 *
 * The supplied logo PNG bakes the wordmark in as WHITE type on transparency,
 * so it vanishes on a light background — which is why it used to be buried in
 * a dark chip. We use the trimmed mark and set the name in the display face
 * instead, so it stays crisp at any size and readable on either ground.
 */
export function Logo({
  tone = "light",
  size = "md",
  withTagline = true,
}: {
  /** "light" = on a light ground (teal type). "dark" = on a dark ground (white type). */
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}) {
  const markSize =
    size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-9 w-9 sm:h-11 sm:w-11";
  const nameSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-xl sm:text-2xl";
  const nameTone = tone === "dark" ? "text-primary-foreground" : "text-primary";
  const tagTone = tone === "dark" ? "text-primary-foreground/60" : "text-muted-foreground";

  return (
    <span className="flex items-center gap-2.5">
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        width={192}
        height={184}
        className={`${markSize} shrink-0 object-contain`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-tight ${nameSize} ${nameTone}`}>
          Petgroomers
        </span>
        {withTagline && (
          <span
            className={`mt-1 hidden text-[0.6875rem] font-medium tracking-wide sm:block ${tagTone}`}
          >
            Dog &amp; Cat Grooming at Home
          </span>
        )}
      </span>
    </span>
  );
}

export function LogoLink(props: React.ComponentProps<typeof Logo>) {
  return (
    <Link to="/" aria-label="Petgroomers — home" className="inline-flex items-center">
      <Logo {...props} />
    </Link>
  );
}
