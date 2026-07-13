import { Compass, Sparkles, Users, Briefcase, HeartHandshake, Trophy } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FEATURES = [
  {
    icon: Compass,
    title: "Bridging the Skills Gap",
    description: "Millions of individuals lack access to practical, future-ready skills. We provide the training and guidance needed to thrive.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: Sparkles,
    title: "Empowering Next-Gen Leaders",
    description: "We cultivate confidence, innovation, and leadership so people of all backgrounds can drive positive change.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Briefcase,
    title: "Creating Equal Opportunities",
    description: "We connect individuals from underserved backgrounds with meaningful opportunities, internships, and career support.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: HeartHandshake,
    title: "Fostering Social Responsibility",
    description: "We believe in giving back. Our platforms encourage volunteerism and active participation in community development.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Trophy,
    title: "Recognizing Impact",
    description: "We acknowledge and celebrate every contribution, reinforcing a culture where doing good is valued and recognized.",
    accent: "text-primary bg-primary-soft",
  },
];

export function HowDishaHelps() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="Why Disha Exists"
          description="Helping people discover opportunities, build skills, collaborate, and create meaningful impact in their communities."
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
