import { Compass, Sparkles, Users, Briefcase, HeartHandshake, Trophy } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FEATURES = [
  {
    icon: Compass,
    title: "Discover Your Potential",
    description: "Explore your strengths and receive expert career guidance to make informed decisions about your future.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: Sparkles,
    title: "Learn Future-Ready Skills",
    description: "Develop practical skills through workshops, training programs, and hands-on learning experiences.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Briefcase,
    title: "Gain Real Experience",
    description: "Access internships, projects, and career opportunities that prepare you for the workplace.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: HeartHandshake,
    title: "Create Social Impact",
    description: "Volunteer in meaningful initiatives, contribute to communities, and make a positive difference.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Trophy,
    title: "Earn & Get Rewarded",
    description: "Collect Disha Coins through your participation and redeem exciting rewards in the Disha Marketplace.",
    accent: "text-primary bg-primary-soft",
  },
];

export function HowDishaHelps() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="How Disha Helps"
          description="Supporting students at every stage of their journey—from learning new skills to building successful careers and creating meaningful impact."
          align="center"
        />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${feature.accent}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
