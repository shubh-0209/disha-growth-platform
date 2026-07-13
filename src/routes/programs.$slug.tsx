import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles, PiggyBank, Rocket, HeartPulse, Leaf, Flame, Users, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/lib/site-data";

const ICON_MAP: Record<string, LucideIcon> = {
  PiggyBank,
  Rocket,
  HeartPulse,
  Leaf,
  Flame,
  Users,
};

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = PROGRAMS.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    return {
      meta: [
        { title: `${p?.title ?? "Program"} — Disha For India` },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: `${p?.title} — Disha For India` },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programs/${p?.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programs/${p?.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="text-2xl font-bold">Program not found</h1>
      <Button asChild className="mt-6"><Link to="/programs">Back to programs</Link></Button>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <Button asChild className="mt-6"><Link to="/programs">Back to programs</Link></Button>
    </div>
  ),
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program } = Route.useLoaderData();
  const Icon = ICON_MAP[program.icon] || Sparkles;
  const isGreen = program.accent === "green";

  return (
    <>
      <PageHero eyebrow={program.tagline} title={program.title} description={program.description} />
      <section className="py-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className={`grid h-14 w-14 place-items-center rounded-2xl ${isGreen ? "bg-success-soft text-success" : "bg-primary-soft text-primary"}`}>
              <Icon className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-foreground">What we do</h2>
            <ul className="mt-5 space-y-3">
              {program.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${isGreen ? "bg-green text-green-foreground" : "bg-primary text-primary-foreground"}`}>
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground/80">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-secondary/40 p-6">
              <h3 className="font-semibold text-foreground">Impact so far</h3>
              <div className="mt-4 space-y-4">
                {program.impact.map((text: string) => (
                  <div key={text} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm font-medium leading-relaxed text-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 w-full"><Link to="/volunteer">Support this program <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-5">
          <div className="flex flex-wrap gap-3">
            {PROGRAMS.filter((p) => p.slug !== program.slug).map((p) => (
              <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
