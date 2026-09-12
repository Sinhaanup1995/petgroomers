import { formatDayMonthYear } from "@/lib/format";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Breadcrumbs } from "@/components/site/sections";

export type DocSection = { heading: string; body: string[]; list?: string[] };

/**
 * Shared shell for the policy documents. Kept deliberately plain — these pages
 * exist to be read and checked, not to convert.
 */
export function ProseDoc({
  title,
  standfirst,
  updated,
  sections,
  crumb,
}: {
  title: string;
  standfirst: string;
  updated: string;
  sections: DocSection[];
  crumb: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Breadcrumbs crumbs={[{ name: "Home", to: "/" }, { name: crumb }]} />
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-black text-primary leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{standfirst}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated <time dateTime={updated}>{formatDayMonthYear(updated)}</time>
        </p>

        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl md:text-2xl font-extrabold text-primary">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-foreground/90 leading-[1.75]">
                    {p}
                  </p>
                ))}
              </div>
              {s.list && (
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  {s.list.map((li) => (
                    <li key={li} className="text-foreground/90 leading-[1.75]">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
      <Footer />
      <FloatingActions />
    </div>
  );
}
