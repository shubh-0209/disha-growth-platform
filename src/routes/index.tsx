import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Calendar, Compass, Gift, GraduationCap, Heart, Sparkles, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { images } from "@/lib/images";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    headline: "Become a Volunteer. Become Someone's Hope.",
    description: "Your time, knowledge, and compassion can transform lives. Join Disha For India and help students discover opportunities, confidence, and a brighter future.",
    primaryCta: { label: "Become a Volunteer", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.hero.home[0],
    alt: "Young volunteers mentoring students, teaching, or participating in community activities",
  },
  {
    headline: "Your Impact Can Unlock New Opportunities.",
    description: "Discover the Disha Marketplace where participation and meaningful contributions lead to exciting rewards, learning resources, scholarships, career support, and much more.",
    primaryCta: { label: "Know More About Marketplace", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: "/gallery/marketplace.png",
    alt: "A modern reward ecosystem showing certificates and achievements",
  },
  {
    headline: "Explore Programs That Build Better Futures.",
    description: "Discover career guidance, internships, skill development, financial literacy, and educational initiatives designed to empower students from underserved communities.",
    primaryCta: { label: "Explore Programs", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.gallery[2], // team-certificates.webp
    alt: "A modern reward ecosystem showing certificates and achievements",
  },
  {
    headline: "Together, We Can Create Lasting Change.",
    description: "Whether you're a student, educator, volunteer, institution, or CSR partner, your contribution can help create meaningful opportunities for thousands of young people.",
    primaryCta: { label: "Join the Mission", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.gallery[1], // public-speaking.webp
    alt: "A diverse group of students, teachers, volunteers celebrating success",
  }
];

function FullWidthHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (isHovered || !HERO_SLIDES?.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000); // 2 seconds autoplay
    return () => clearInterval(timer);
  }, [isHovered, currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <section
      className="group relative w-full overflow-hidden bg-gradient-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Hero Carousel"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Invisible structure placeholder to give the carousel consistent height */}
      <div className="relative mx-auto max-w-7xl px-5 pt-8 pb-16 lg:pt-12 lg:pb-24 invisible">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-foreground mb-6 line-clamp-3">
              Become a Volunteer. Become Someone's Hope.
            </h1>
            <p className="text-lg lg:text-xl leading-[1.6] text-muted-foreground mb-8 max-w-xl">
              Your time, knowledge, and compassion can transform lives. Join Disha For India and help students discover opportunities, confidence, and a brighter future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 text-base">Placeholder</Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span><strong className="font-semibold text-foreground">Established in 2017</strong> — Building opportunities for students across India.</span>
            </div>
          </div>
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px]" />
        </div>
      </div>

      {/* Absolute Slides */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full mx-auto max-w-7xl px-5 pt-8 pb-16 lg:pt-12 lg:pb-24">
            <div className="grid h-full items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">


                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-foreground mb-6 line-clamp-3">
                  {HERO_SLIDES[currentSlide].headline}
                </h1>

                <p className="text-lg lg:text-xl leading-[1.6] text-muted-foreground mb-8 max-w-xl">
                  {HERO_SLIDES[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                    <a href={HERO_SLIDES[currentSlide].primaryCta.href}>
                      {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="font-semibold text-foreground">Established in 2017</strong> — Building opportunities for students across India.
                  </span>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px] overflow-hidden rounded-[2rem] border border-border shadow-card bg-muted/20">
                <ImageWithFallback
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].alt}
                  width={1200}
                  height={800}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>



      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3 rounded-full bg-background/80 px-4 py-2.5 backdrop-blur-md border border-border shadow-sm">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { MarketplaceShowcase } from "@/components/home/MarketplaceShowcase";
import { HowDishaHelps } from "@/components/home/HowDishaHelps";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramCard, EventCard, BlogCard, StoryCard } from "@/components/cards";
import {
  PROGRAMS,
  EVENTS,
  BLOGS,
  STORIES,
  TESTIMONIALS,
} from "@/lib/site-data";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Disha For India — WE EMPOWER | WE MAKE THE DIFFERENCE" },
      { name: "description", content: "Empowering India's youth through skills, education and opportunities." },
      {
        property: "og:title",
        content: "Disha For India — WE EMPOWER | WE MAKE THE DIFFERENCE",
      },
      { property: "og:description", content: "Empowering India's youth through skills, education and opportunities." },
      { property: "og:url", content: "https://dishaforindia.org" },
      { property: "og:title", content: "Disha For India — WE EMPOWER | WE MAKE THE DIFFERENCE" },
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
  const upcoming = EVENTS.filter((e) => e.status === "upcoming" || (e.date !== "Coming Soon" && new Date(e.date) > new Date())).slice(0, 3);
  const featuredBlogs = BLOGS.filter((b) => b.featured).slice(0, 3);

  return (
    <>
      {/* SECTION 1 — Hero */}
      <FullWidthHeroCarousel />

      {/* SECTION 2 — Marketplace */}
      <MarketplaceShowcase />

      {/* SECTION 3 — How Disha Helps */}
      <HowDishaHelps />

      {/* SECTION 5 — Programs */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            title="Our Programs"
            description="Skilling youth across every dimension. From financial literacy to entrepreneurship, wellness and the environment — our programs build employable, confident, conscious citizens."
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
      <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            title="Success Stories"
            description="Real journeys, real transformation. Students, volunteers and communities whose lives changed direction with Disha For India."
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
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            title="Upcoming Events"
            description="Join our next gathering. Career fairs, bootcamps and community drives — opportunities to learn, connect and contribute."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcoming.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <EventCard event={e} />
              </Reveal>
            ))}
            {upcoming.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
                <Calendar className="mx-auto mb-3 h-8 w-8 text-primary/40" />
                New events and initiatives are coming soon. Stay connected with Disha For India.
              </div>
            )}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/events">View all events <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Latest Blogs */}
      <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            title="From the Blog"
            description="Insights to grow by. Practical guides on money, careers, entrepreneurship, wellness and the environment."
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
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            title="Testimonials"
            description="What people say about Disha For India"
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
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                    <ImageWithFallback
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
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
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-6 py-10 lg:py-16 text-center text-foreground sm:px-12">
              <div className="relative mx-auto max-w-2xl">
                <Compass className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink">
                  Invest your time. Uplift a life.
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Join 1,200+ volunteers making a powerful contribution to India's
                  youth. Teach, mentor, design or build — there's a role for you.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <a href="https://app-disha-for-indiaa.vercel.app/signup">Become a Volunteer</a>
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
