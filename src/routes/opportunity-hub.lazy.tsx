import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  Briefcase,
  GraduationCap,
  Presentation,
  Trophy,
  Code,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { OPPORTUNITY_HUB, type HubOpportunity, type OpportunityHubType } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createLazyFileRoute("/opportunity-hub")({

  component: OpportunityHub,
});

const TYPES: ("All" | OpportunityHubType)[] = [
  "All",
  "Internship",
  "Workshop",
  "Competition",
  "Hackathon",
];

const MODES = ["All", "Remote", "Online", "Hybrid", "In-person"] as const;

const TYPE_ICON: Record<OpportunityHubType, React.ComponentType<{ className?: string }>> = {
  Internship: Briefcase,
  Workshop: Presentation,
  Competition: Trophy,
  Hackathon: Code,
};

const TYPE_ACCENT: Record<OpportunityHubType, { bg: string; text: string }> = {
  Internship: { bg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", text: "#063B8C" },
  Workshop: { bg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", text: "#063B8C" },
  Competition: { bg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", text: "#063B8C" },
  Hackathon: { bg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", text: "#063B8C" },
};

function formatDeadline(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function OpportunityHub() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [mode, setMode] = useState<(typeof MODES)[number]>("All");

  const filtered = useMemo(
    () =>
      OPPORTUNITY_HUB.filter((o) => {
        if (type !== "All" && o.type !== type) return false;
        if (mode !== "All" && o.mode !== mode) return false;
        if (query) {
          const q = query.toLowerCase();
          const haystack = `${o.title} ${o.org} ${o.description} ${o.location}`.toLowerCase();
          if (!haystack.includes(q)) return false;
        }
        return true;
      }),
    [query, type, mode],
  );

  const counts = useMemo(() => {
    const map: Record<OpportunityHubType, number> = {
      Internship: 0,
      Workshop: 0,
      Competition: 0,
      Hackathon: 0,
    };
    for (const o of OPPORTUNITY_HUB) map[o.type]++;
    return map;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Opportunity Hub"
        title="Your next big break starts here"
        description="Internships, workshops, competitions and hackathons — curated for India's students. Search, filter and apply."
      />

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {(Object.keys(counts) as OpportunityHubType[]).map((t) => {
              const Icon = TYPE_ICON[t];
              return (
                <Reveal key={t}>
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl shadow-sm"
                      style={{ background: TYPE_ACCENT[t].bg, color: TYPE_ACCENT[t].text }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-2 text-xl font-bold text-foreground">{counts[t]}</p>
                    <p className="text-xs text-muted-foreground">{t}s</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mb-8 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, organisation or location…"
                className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                      type === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground/80 hover:border-primary",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {MODES.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      mode === m
                        ? "border-green bg-green text-green-foreground"
                        : "border-border bg-card text-foreground/70 hover:border-green",
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filtered.length} of {OPPORTUNITY_HUB.length} opportunities
          </p>

          {OPPORTUNITY_HUB.length === 0 ? (
            <div 
              className="rounded-[20px] border border-border px-6 py-10 lg:py-16 text-center"
              style={{
                background: "linear-gradient(120deg, rgba(11, 76, 163, 0.18), rgba(255, 255, 255, 1))",
                boxShadow: "0 10px 30px rgba(11,76,163,0.12)"
              }}
            >
              <p className="text-lg font-semibold text-foreground">No opportunities available at the moment.</p>
              <p className="mt-2 text-sm text-muted-foreground">New opportunities will appear here soon.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-secondary/40 px-6 py-10 lg:py-16 text-center">
              <p className="text-lg font-semibold text-foreground">No opportunities match your filters</p>
              <p className="mt-2 text-sm text-muted-foreground">Try a different search term or reset your filters.</p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setQuery("");
                  setType("All");
                  setMode("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((o, i) => (
                <Reveal key={o.id} delay={i * 0.03}>
                  <OpportunityCard opportunity={o} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function OpportunityCard({ opportunity: o }: { opportunity: HubOpportunity }) {
  const Icon = TYPE_ICON[o.type];

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-[6px] hover:border-[#1E5BB8]/30 hover:shadow-[0_20px_40px_rgba(6,59,140,0.12)]">
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-sm"
          style={{ background: TYPE_ACCENT[o.type].bg, color: TYPE_ACCENT[o.type].text }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm"
          style={{ background: "linear-gradient(135deg, #1E5BB8, #60A5FA)" }}
        >
          {o.type}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{o.title}</h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{o.org}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{o.description}</p>

      {o.perk && (
        <p
          className="mt-4 rounded-xl px-4 py-2.5 text-xs font-semibold"
          style={{ background: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", color: "#063B8C" }}
        >
          {o.perk}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {o.mode} · {o.location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> Apply by {formatDeadline(o.deadline)}
        </span>
      </div>

      <Button
        className="mt-6 w-full gap-2 border-0 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:opacity-95"
        style={{ background: "linear-gradient(135deg, #063B8C, #2563EB)", color: "white" }}
        onClick={() =>
          toast.success("Interest registered!", {
            description: `We'll share details for "${o.title}" soon.`,
          })
        }
      >
        <span className="text-[15px] font-semibold tracking-wide">Apply Now</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
