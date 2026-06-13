import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { CareerNavigator } from "@/components/CareerNavigator";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/career-navigator")({
  head: () => ({
    meta: [
      { title: "Career Navigator — Disha For India" },
      { name: "description", content: "Generate a personalised visual career roadmap. Pick your class, interest and goal to discover recommended paths and next steps." },
      { property: "og:title", content: "Career Navigator — Disha For India" },
      { property: "og:description", content: "Turn confusion into a clear, visual career roadmap." },
      { property: "og:url", content: "/career-navigator" },
    ],
    links: [{ rel: "canonical", href: "/career-navigator" }],
  }),
  component: CareerNavigatorPage,
});

function CareerNavigatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Career Navigator"
        title="Find your direction, one step at a time"
        description="Confused about what to do next? Pick your class and interests to generate a clear, visual roadmap — from foundations to your first career step."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <CareerNavigator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
