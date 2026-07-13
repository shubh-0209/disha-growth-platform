import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Flame, Quote, ArrowRight, GraduationCap, Users, Rocket, Heart, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { images } from "@/lib/images";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Disha For India — Our Mission & Purpose" },
      { name: "description", content: "Learn about Disha For India Foundation & Educational Trust, dedicated to skilling and guiding India's youth toward their true path." },
      { property: "og:title", content: "About Disha For India" },
      { property: "og:description", content: "We empower. We make the difference. Skilling India's youth for a brighter future." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We empower. We make the difference."
        description="Disha For India Foundation & Educational Trust is a youth-first movement skilling India's next generation for employability, entrepreneurship and a life of purpose."
      />

      <section className="py-12 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <OptimizedImage src={images.hero.about} alt="Indian youth learning together" width={1200} height={800} loading="eager" isHero={true} className="w-full rounded-3xl border border-border object-cover shadow-card" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Focus"
              title="Guiding India's youth towards their true path"
              description="Empowering and steering the next generation."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                In a fast-changing world, many young minds find themselves at a crossroads, feeling diverted or uncertain about their future path. At Disha For India, our purpose is to reach out to these young individuals, guide them with clarity, and help them align their skills with their life goals.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through our structured student programs and emotional wellness coaching, we provide the direction and tools they need to live purposeful, successful, and impactful lives.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-2 font-display text-lg font-semibold text-foreground">
                  "Guiding youth to discover their direction and unlock their true potential is our greatest commitment."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: "Vision", text: ORG.vision, accent: "text-primary bg-primary-soft" },
              { icon: Target, title: "Mission", text: ORG.mission, accent: "text-green bg-green-soft" },
              { icon: Flame, title: "Passion", text: ORG.passion, accent: "text-primary bg-primary-soft" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.accent}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {[
              { label: "Empowering Youth", text: "Purposeful careers", icon: GraduationCap },
              { label: "Community", text: "Social action", icon: Users },
              { label: "Innovation", text: "Incubating ideas", icon: Rocket },
              { label: "Trust", text: "Years of commitment", icon: Heart },
              { label: "Growth", text: "Expanding horizons", icon: MapPin },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <s.icon className="mb-3 h-8 w-8 text-primary" />
                <p className="text-sm font-bold text-foreground">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/vision-mission">Our Vision & Mission <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
