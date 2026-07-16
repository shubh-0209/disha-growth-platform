import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, ArrowRight, HandHeart } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { VOLUNTEER_ROLES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/volunteer")({
  component: Volunteer,
});

const CATS = ["All", "Teaching", "Design", "Technology", "Marketing", "Community Outreach"];

function Volunteer() {
  const [cat, setCat] = useState("All");
  const filtered = VOLUNTEER_ROLES.filter((v) => cat === "All" || v.category === cat);

  return (
    <main>
      <Helmet>
        <title>Volunteer Hub</title>
        <meta name="description" content="Join Disha For India as a volunteer. Contribute your time and skills to make a meaningful difference for India's youth." />
        <link rel="canonical" href="https://dishaforindia.org/volunteer" />
        <meta property="og:title" content="Volunteer Hub | Disha For India" />
        <meta property="og:description" content="Join Disha For India as a volunteer. Contribute your time and skills to make a meaningful difference for India's youth." />
        <meta property="og:url" content="https://dishaforindia.org/volunteer" />
      </Helmet>
      <PageHero
        eyebrow="Volunteer Hub"
        title="Invest your time. Uplift a life."
        description="Whether you can give two hours a week or a full day at an event, there's a meaningful way for you to contribute to India's youth."
      />
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  cat === c ? "border-green bg-green text-green-foreground" : "border-border bg-card text-foreground/80 hover:border-green",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-green-soft text-green">
                    <HandHeart className="h-5 w-5" />
                  </span>
                  <span className="mt-4 w-fit rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">{v.category}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{v.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {v.commitment}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {v.location}</span>
                  </div>
                  <Button 
                    className="mt-5 w-full rounded-full"
                    onClick={() => {
                      window.location.href = "https://app-disha-for-indiaa.vercel.app/";
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 overflow-hidden rounded-3xl bg-gradient-hero p-8 text-center text-foreground">
            <h3 className="font-bold text-ink">Make your powerful contribution</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Can't find the right role? Learn more about our mission and other ways to get involved.</p>
            <Button asChild className="mt-5"><a href="/about">Learn more about us</a></Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
