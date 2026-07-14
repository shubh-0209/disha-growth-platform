import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Flame, Heart, ShieldCheck, Users, Lightbulb, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/site-data";

export const Route = createLazyFileRoute("/vision-mission")({
  component: VisionMission,
});

const VALUES = [
  { icon: Heart, title: "Empathy", text: "We meet every learner with compassion and belief in their potential." },
  { icon: ShieldCheck, title: "Integrity", text: "We live by our thoughts and values every single day." },
  { icon: Lightbulb, title: "Innovation", text: "We reimagine education and skilling for a fast-changing world." },
  { icon: Users, title: "Community", text: "We grow together — students, volunteers, and families." },
];

function VisionMission() {
  return (
    <>
      <PageHero
        eyebrow="Vision · Mission · Passion"
        title="Our vision, mission & passion"
        description="The compass that guides everything we do at Disha For India Foundation & Educational Trust."
      />

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-5">
          {[
            { icon: Eye, label: "Vision", text: ORG.vision, accent: "bg-primary-soft text-primary" },
            { icon: Target, label: "Mission", text: ORG.mission, accent: "bg-green-soft text-green" },
            { icon: Flame, label: "Passion", text: ORG.passion, accent: "bg-primary-soft text-primary" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft sm:flex-row sm:items-center">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${c.accent}`}>
                  <c.icon className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{c.label}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Core Values" title="The principles we stand on" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg"><Link to="/programs">See our programs <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
