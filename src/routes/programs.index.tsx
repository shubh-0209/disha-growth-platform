import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ProgramCard } from "@/components/cards";
import { PROGRAMS } from "@/lib/site-data";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Disha For India" },
      { name: "description", content: "Explore Disha For India programs: Financial Literacy, Entrepreneurship, Wellness, Clean & Green India, Education and Community Development." },
      { property: "og:title", content: "Programs — Disha For India" },
      { property: "og:description", content: "Skilling youth across financial literacy, entrepreneurship, wellness, environment and education." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs that build employable, conscious citizens"
        description="Each program is designed to raise the employability and skill quotient of India's youth — turning potential into opportunity."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
