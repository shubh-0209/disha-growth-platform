import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { EventCard } from "@/components/cards";
import { EVENTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Disha For India" },
      { name: "description", content: "Upcoming and past events from Disha For India — career fairs, founder bootcamps, financial literacy drives, wellness camps and community programs." },
      { property: "og:title", content: "Events — Disha For India" },
      { property: "og:description", content: "Join our career fairs, bootcamps, drives and community events." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

function Events() {
  const [tab, setTab] = useState<"upcoming" | "completed">("upcoming");
  const list = EVENTS.filter((e) => {
    const isFuture = e.date !== "Coming Soon" && new Date(e.date) > new Date();
    const isUpcoming = e.status === "upcoming" || isFuture;
    return tab === "upcoming" ? isUpcoming : !isUpcoming;
  }).sort((a, b) => {
    const getTime = (d: string) => d === "Coming Soon" ? Infinity : +new Date(d);
    return getTime(a.date) - getTime(b.date);
  });

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where learning meets community"
        description="Discover what's coming up and revisit the moments that shaped our journey."
      />
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 inline-flex rounded-full border border-border bg-card p-1">
            {(["upcoming", "completed"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors",
                  tab === t ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary",
                )}
              >
                {t} events
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-border md:before:left-1/2">
            {list.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <div className={cn("relative grid gap-4 md:grid-cols-2 md:gap-12", i % 2 === 1 && "md:[direction:rtl]")}>
                  <span className="absolute left-[11px] top-3 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
                  <div className={cn("pl-12 md:pl-0", i % 2 === 0 ? "md:text-right" : "md:[direction:ltr]")}>
                    <div className="inline-flex flex-col gap-1">
                      <span className="text-sm font-bold text-primary">
                        {e.date === "Coming Soon" ? "Coming Soon" : new Date(e.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground md:justify-end">
                        <MapPin className="h-3.5 w-3.5" /> {e.location}
                      </span>
                    </div>
                  </div>
                  <div className="pl-12 md:[direction:ltr] md:pl-0">
                    <EventCard event={e} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
              <Calendar className="mx-auto mb-3 h-8 w-8 text-primary/40" />
              {tab === "upcoming" ? "New events and initiatives are coming soon. Stay connected with Disha For India." : "No completed events right now. Check back soon!"}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
