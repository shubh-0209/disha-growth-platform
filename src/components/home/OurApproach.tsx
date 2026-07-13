import { Search, PenTool, Users, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STEPS = [
  {
    icon: Search,
    title: "1. Identify Needs",
    description: "We work with local communities and educators to understand the real challenges faced by students.",
  },
  {
    icon: PenTool,
    title: "2. Build Programs",
    description: "We design targeted, scalable programs around skills, wellness, and entrepreneurship.",
  },
  {
    icon: Users,
    title: "3. Engage Volunteers",
    description: "We mobilize passionate changemakers to mentor, teach, and drive our initiatives on the ground.",
  },
  {
    icon: BarChart3,
    title: "4. Measure Outcomes",
    description: "We track participation and track success stories to ensure our efforts create lasting, meaningful impact.",
  },
];

export function OurApproach() {
  return (
    <section className="py-12 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="How We Create Impact"
          description="A structured, transparent approach to creating long-term social change and empowering the youth."
          align="center"
        />
        
        <div className="mt-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background border-4 border-muted/50 shadow-sm mb-6 z-10">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
