import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/data/site";
import { LogoLink } from "@/components/site/Logo";

const LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Breeds", to: "/breeds" },
  { label: "Guides", to: "/guides" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  // Close the menu on navigation — otherwise it stays open over the new page.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  // Don't let the page scroll behind the open menu.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <LogoLink />

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
          <a href="/#gallery" className="transition-colors hover:text-primary">
            Gallery
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="coral"
            size="default"
            asChild
            className="rounded-full px-4 text-sm sm:px-6"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book
              <span className="hidden sm:inline">&nbsp;Now</span>
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu. Rendered in the DOM always (so it is crawlable and the
          links are in the markup), visually hidden until opened. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav className="mx-auto max-w-7xl px-6 py-4">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-primary transition-colors hover:text-coral"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/#gallery"
                onClick={() => setOpen(false)}
                className="block py-3.5 text-base font-semibold text-primary transition-colors hover:text-coral"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
