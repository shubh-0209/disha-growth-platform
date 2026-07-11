import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ProgramCard } from "@/components/cards";
import { PROGRAMS } from "@/lib/site-data";
import { publicApi } from "@/lib/api";

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
  const { data: programsData, isLoading, isError } = useQuery({
    queryKey: ["public-programs"],
    queryFn: async () => {
      try {
        const res = await publicApi.getPrograms({ limit: 20 });
        if (res.data?.programs?.length > 0) {
          // Map backend program structure to frontend ProgramCard format
          return res.data.programs.map((p: any) => ({
            id: p._id || p.id,
            title: p.title,
            slug: p.slug || p.title.toLowerCase().replace(/\s+/g, '-'),
            tagline: p.shortDescription || "Empowering India's youth.",
            category: p.category || "Skill Development",
            thumbnail: p.thumbnail || "/images/placeholders/volunteer-1.jpg",
            stats: { volunteers: p.maxVolunteers || 0, hours: 0, lives: 0 },
            keyFocus: p.tags || []
          }));
        }
      } catch (err) {
        console.error("Failed to load programs, falling back to mock", err);
      }
      return PROGRAMS;
    },
    staleTime: 5 * 60 * 1000,
  });

  const displayPrograms = programsData || PROGRAMS;

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs that build employable, conscious citizens"
        description="Each program is designed to raise the employability and skill quotient of India's youth — turning potential into opportunity."
      />
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 w-full animate-pulse rounded-2xl bg-muted/50 border border-border" />
              ))}
            </div>
          ) : isError ? (
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center text-destructive">
              Failed to load the latest programs. Please try again later.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayPrograms.map((p: any, i: number) => (
                <Reveal key={p.slug || i} delay={i * 0.06}>
                  <ProgramCard program={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
