import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, Heart, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { CareerNavigator } from "@/components/CareerNavigator";
import { ScholarshipExplorer } from "@/components/ScholarshipExplorer";
import { ProgramCard, EventCard, BlogCard, StoryCard } from "@/components/cards";
import {
  STATS,
  PROGRAMS,
  EVENTS,
  BLOGS,
  STORIES,
  TESTIMONIALS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Disha For India — Student Growth & Opportunity Platform" },
      {
        name: "description",
        content:
          "Empowering India's youth through skills, education and opportunities. Explore programs, a career navigator, scholarships, mentorship and volunteering.",
      },
      { property: "og:title", content: "Disha For India — Student Growth & Opportunity Platform" },
      {
        property: "og:description",
        content:
          "Empowering India's youth through skills, education and opportunities.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming").slice(0, 3);
  const featuredBlogs = BLOGS.filter((b) => b.featured).slice(0, 3);

  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative overflow-hidden bg-secondary/40 bg-grid">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-orange-soft blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-green-soft blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> India's Student Growth & Opportunity Platform
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Empowering India's Youth Through{" "}
                <span className="text-primary">Skills</span>,{" "}
                <span className="text-green">Education</span> and Opportunities
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                From career roadmaps and scholarships to mentorship and real
                impact — Disha For India gives every student the tools, guidance
                and community to build a brighter future.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/programs">Explore Programs <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-primary" /> 25,000+ students</span>
                <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-green" /> 1,200+ volunteers</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
                <img
                  src={heroImg}
                  alt="Confident young Indian students with books and laptops"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block"
              >
                <p className="text-2xl font-bold text-primary">5 Lakh+</p>
                <p className="text-xs text-muted-foreground">Youth to be skilled</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — Impact Statistics */}
      <section className="border-y border-border bg-ink py-16 text-background">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-background sm:text-3xl">Our impact, in numbers</h2>
            <p className="mt-2 text-background/60">Fingerprints on the lives we touch never fade.</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-background/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Career Navigator */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Career Navigator"
            title="Turn confusion into a clear roadmap"
            description="Select your class, interest and goal to generate a personalised, visual career path — built to guide India's students step by step."
          />
          <div className="mt-10">
            <CareerNavigator compact />
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/career-navigator">Open full Career Navigator <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Scholarship Explorer */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Scholarship Explorer"
            title="Find scholarships you're eligible for"
            description="Search and filter scholarships by class, stream, state and category — so no deserving student misses an opportunity."
          />
          <div className="mt-10">
            <ScholarshipExplorer limit={4} />
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/scholarships">Explore all scholarships <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Programs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Our Programs"
            title="Skilling youth across every dimension"
            description="From financial literacy to entrepreneurship, wellness and the environment — our programs build employable, confident, conscious citizens."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Success Stories */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Success Stories"
            title="Real journeys, real transformation"
            description="Students, volunteers and communities whose lives changed direction with Disha For India."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STORIES.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/success-stories">Read more stories <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Upcoming Events */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Join our next gathering"
            description="Career fairs, bootcamps and community drives — opportunities to learn, connect and contribute."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcoming.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/events">View all events <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Latest Blogs */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="From the Blog"
            title="Insights to grow by"
            description="Practical guides on money, careers, entrepreneurship, wellness and the environment."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.06}>
                <BlogCard blog={b} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/blogs">Read the blog <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Testimonials"
            title="What people say about Disha For India"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <img src={t.photo} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Volunteer CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-background sm:px-12">
              <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
              <div className="relative mx-auto max-w-2xl">
                <Compass className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-5 text-3xl font-bold text-background sm:text-4xl">
                  Invest your time. Uplift a life.
                </h2>
                <p className="mt-4 text-background/70">
                  Join 1,200+ volunteers making a powerful contribution to India's
                  youth. Teach, mentor, design or build — there's a role for you.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg">
                    <Link to="/volunteer">Become a Volunteer</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background hover:text-ink">
                    <Link to="/mentors">Become a Mentor</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
