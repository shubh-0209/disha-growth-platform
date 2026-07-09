import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, FileText, Video, Wrench, ArrowUpRight, Trophy, Briefcase, Code, Calendar } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RESOURCES, OPPORTUNITIES, type Resource } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resource Library & Opportunity Center — Disha For India" },
      { name: "description", content: "Free guides, worksheets and toolkits on career development, financial literacy, communication, entrepreneurship and personal growth — plus internships, workshops, hackathons and bootcamps." },
      { property: "og:title", content: "Resource Library — Disha For India" },
      { property: "og:description", content: "Learn, grow and find your next opportunity." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const CATS = ["All", "Career Development", "Financial Literacy", "Communication Skills", "Entrepreneurship", "Personal Growth"];
const TYPE_ICON: Record<Resource["type"], React.ComponentType<{ className?: string }>> = {
  Guide: BookOpen,
  Worksheet: FileText,
  Video: Video,
  Toolkit: Wrench,
};
const OPP_ICON = { Internship: Briefcase, Workshop: Calendar, Competition: Trophy, Hackathon: Code, Bootcamp: BookOpen };

function Resources() {
  const [cat, setCat] = useState("All");
  const filtered = RESOURCES.filter((r) => cat === "All" || r.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Resource Library"
        title="Everything you need to grow, in one place"
        description="Free, practical learning resources across the skills that matter — plus a live feed of opportunities to apply what you learn."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => {
              const Icon = TYPE_ICON[r.type];
              return (
                <Reveal key={r.id} delay={i * 0.04}>
                  <a href="#" className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-green-soft text-green">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{r.duration}</span>
                    </div>
                    <span className="mt-4 w-fit rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/70">{r.category}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Open {r.type.toLowerCase()} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-section py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Opportunity Center"
            title="Internships, workshops, competitions & more"
            description="Live opportunities for students to gain real-world experience and stand out."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {OPPORTUNITIES.map((o, i) => {
              const Icon = OPP_ICON[o.type];
              return (
                <Reveal key={o.id} delay={i * 0.04}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-card">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-green-soft px-2 py-0.5 text-[11px] font-semibold text-green">{o.type}</span>
                        <span className="text-xs text-muted-foreground">{o.org}</span>
                      </div>
                      <h4 className="mt-1 truncate font-semibold text-foreground">{o.title}</h4>
                      <p className="text-xs text-muted-foreground">{o.mode} · Apply by {new Date(o.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
