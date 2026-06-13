import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { StoryCard } from "@/components/cards";
import { STORIES, type StoryType } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Disha For India" },
      { name: "description", content: "Real transformation stories from students, volunteers, mentors and communities empowered by Disha For India." },
      { property: "og:title", content: "Success Stories — Disha For India" },
      { property: "og:description", content: "Filter inspiring journeys by student, volunteer, mentor and community." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessStories,
});

const FILTERS: ("All" | StoryType)[] = ["All", "Student", "Volunteer", "Mentor", "Community"];

function SuccessStories() {
  const [filter, setFilter] = useState<"All" | StoryType>("All");
  const list = STORIES.filter((s) => filter === "All" || s.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Every life we touch tells a story"
        description="Filter by the people at the heart of our work — students, volunteers, mentors and entire communities."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  filter === f ? "border-green bg-green text-green-foreground" : "border-border bg-card text-foreground/80 hover:border-green",
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
