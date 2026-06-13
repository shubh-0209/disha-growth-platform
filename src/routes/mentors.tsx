import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { MENTORS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentor Network — Disha For India" },
      { name: "description", content: "Connect with experienced mentors in technology, finance, design, careers and wellness. View expertise and book a mentorship session." },
      { property: "og:title", content: "Mentor Network — Disha For India" },
      { property: "og:description", content: "Book a session with experienced professional mentors." },
      { property: "og:url", content: "/mentors" },
    ],
    links: [{ rel: "canonical", href: "/mentors" }],
  }),
  component: Mentors,
});

const TAGS = ["All", "Technology", "Entrepreneurship", "Financial Literacy", "Career Growth", "Design", "Marketing", "Wellness", "Education"];

function Mentors() {
  const [tag, setTag] = useState("All");
  const filtered = MENTORS.filter((m) => tag === "All" || m.tags.includes(tag));

  return (
    <>
      <PageHero
        eyebrow="Mentor Network"
        title="Learn from those who've walked the path"
        description="Our mentors are experienced professionals giving back their time. Browse by expertise and book a session to accelerate your growth."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  tag === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <img src={m.photo} alt={m.name} loading="lazy" className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-secondary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{m.name}</h3>
                  <p className="text-sm font-medium text-primary">{m.expertise}</p>
                  <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5" /> {m.experience}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded-md bg-green-soft px-2 py-0.5 text-[11px] font-medium text-green">{t}</span>
                    ))}
                  </div>
                  <Button onClick={() => toast.success(`Session request sent to ${m.name}!`, { description: "Our team will confirm your slot by email." })} className="mt-5 w-full" variant="outline">
                    <Calendar className="mr-1.5 h-4 w-4" /> Book Session
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-3xl border border-border bg-secondary/40 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">Want to give back as a mentor?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Share your experience and shape the next generation of changemakers.</p>
            <Button asChild className="mt-5"><a href="/contact">Become a Mentor <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
