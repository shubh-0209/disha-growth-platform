import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40 bg-grid">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-soft blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-soft blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
