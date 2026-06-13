import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { ScholarshipExplorer } from "@/components/ScholarshipExplorer";

export const Route = createFileRoute("/scholarships")({
  head: () => ({
    meta: [
      { title: "Scholarship Explorer — Disha For India" },
      { name: "description", content: "Search and filter scholarships by class, stream, state and category. Find financial support for your education with Disha For India." },
      { property: "og:title", content: "Scholarship Explorer — Disha For India" },
      { property: "og:description", content: "Find scholarships you're eligible for, filtered by class, stream, state and category." },
      { property: "og:url", content: "/scholarships" },
    ],
    links: [{ rel: "canonical", href: "/scholarships" }],
  }),
  component: Scholarships,
});

function Scholarships() {
  return (
    <>
      <PageHero
        eyebrow="Scholarship Explorer"
        title="Funding your education shouldn't be a guessing game"
        description="Filter by class, stream, state and category to find scholarships you qualify for — so no deserving student misses an opportunity."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <ScholarshipExplorer />
        </div>
      </section>
    </>
  );
}
