import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { StoryCard } from "@/components/cards";
import { STORIES, type StoryType } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/success-stories")({
  component: SuccessStories,
});

const FILTERS: ("All" | StoryType)[] = ["All", "Student", "Volunteer", "Community"];

function SuccessStories() {
  const [filter, setFilter] = useState<"All" | StoryType>("All");
  const list = STORIES.filter((s) => filter === "All" || s.type === filter);

  return (
    <main>
      <Helmet>
        <title>Success Stories</title>
        <meta name="description" content="Read success stories from students, volunteers and communities transformed by Disha For India's programs." />
        <link rel="canonical" href="https://dishaforindia.org/success-stories" />
        <meta property="og:title" content="Success Stories | Disha For India" />
        <meta property="og:description" content="Read success stories from students, volunteers and communities transformed by Disha For India's programs." />
        <meta property="og:url" content="https://dishaforindia.org/success-stories" />
      </Helmet>
      <PageHero
        eyebrow="Success Stories"
        title="Every life we touch tells a story"
        description="Filter by the people at the heart of our work — students, volunteers and entire communities."
      />
      <section className="py-10 lg:py-16">
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
    </main>
  );
}
