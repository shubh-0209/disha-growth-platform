import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREER_PATHS, type CareerInterest } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CLASSES = ["Class 10", "Class 12", "Undergraduate"];
const INTERESTS: CareerInterest[] = ["Technology", "Business", "Healthcare", "Creative", "Science"];

export function CareerNavigator({ compact = false }: { compact?: boolean }) {
  const [cls, setCls] = useState(CLASSES[1]);
  const [interest, setInterest] = useState<CareerInterest>("Technology");
  const [show, setShow] = useState(false);

  const path = CAREER_PATHS[interest];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-center gap-2 text-primary">
          <Compass className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">Build your roadmap</span>
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="h-4 w-4 text-muted-foreground" /> Your class
            </label>
            <div className="flex flex-wrap gap-2">
              {CLASSES.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCls(c); setShow(false); }}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    cls === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/80 hover:border-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-muted-foreground" /> Your interest
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((it) => (
                <button
                  key={it}
                  onClick={() => { setInterest(it); setShow(false); }}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    interest === it
                      ? "border-green bg-green text-green-foreground"
                      : "border-border bg-background text-foreground/80 hover:border-green",
                  )}
                >
                  {it}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={() => setShow(true)} className="w-full" size="lg">
            Generate Roadmap <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-secondary/40 p-6">
        {!show ? (
          <div className="flex h-full min-h-56 flex-col items-center justify-center text-center text-muted-foreground">
            <Target className="mb-3 h-10 w-10 text-primary/40" />
            <p className="max-w-xs text-sm">
              Select your class and interest, then generate a personalised visual career roadmap.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{cls}</span>
              <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">{interest}</span>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">{path.goal}</p>
            <div className="mt-5 space-y-3">
              {path.steps.slice(0, compact ? 3 : 4).map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-3.5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
