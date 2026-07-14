import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Calendar, Compass, Gift, GraduationCap, Heart, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { images } from "@/lib/images";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramCard, BlogCard, StoryCard } from "@/components/cards";
import {
  PROGRAMS,
  BLOGS,
  STORIES,
  TESTIMONIALS,
} from "@/lib/site-data";

const MarketplaceShowcase = lazy(() => import("@/components/home/MarketplaceShowcase").then(m => ({ default: m.MarketplaceShowcase })));
const HowDishaHelps = lazy(() => import("@/components/home/HowDishaHelps").then(m => ({ default: m.HowDishaHelps })));
const OurApproach = lazy(() => import("@/components/home/OurApproach").then(m => ({ default: m.OurApproach })));
const FaqSection = lazy(() => import("@/components/home/FaqSection").then(m => ({ default: m.FaqSection })));

const HERO_CONTENT = {
  headline: "Connecting People, Ideas, and Opportunities to Create Meaningful Change.",
  description: "Join a movement where individuals and organizations come together to learn, collaborate, and make a lasting impact on our communities.",
  primaryCta: { label: "Join The Movement", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
};

const HERO_SLIDES = [
  {
    image: images.hero.home[0],
    alt: "Volunteers and community members collaborating",
  },
  {
    image: images.gallery[0], // award-ceremony.webp
    alt: "A community celebrating meaningful achievements",
  },
  {
    image: images.gallery[2], // team-certificates.webp
    alt: "Community members engaging in learning programs",
  },
  {
    image: images.gallery[1], // public-speaking.webp
    alt: "A diverse group of people celebrating success",
  }
];

function FullWidthHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

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

      {/* Main Layout Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Static Heading Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-foreground mb-6 line-clamp-3">
              {HERO_CONTENT.headline}
            </h1>
            <p className="text-lg lg:text-xl leading-[1.6] text-muted-foreground mb-8 max-w-xl">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {HERO_CONTENT.primaryCta.href.startsWith("#") ? (
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base shadow-sm"
                  onClick={() => scrollToSection(HERO_CONTENT.primaryCta.href.substring(1))}
                >
                  {HERO_CONTENT.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : HERO_CONTENT.primaryCta.href.startsWith("/") ? (
                <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                  <Link to={HERO_CONTENT.primaryCta.href}>
                    {HERO_CONTENT.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                  <a href={HERO_CONTENT.primaryCta.href}>
                    {HERO_CONTENT.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>
                <strong className="font-semibold text-foreground">Established in 2017</strong> — Connecting people to create impact.
              </span>
            </div>
          </div>

          {/* Animated Carousel Column */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full overflow-hidden rounded-[2rem] border border-border shadow-card bg-muted/20"
              >
                <OptimizedImage
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].alt}
                  width={1200}
                  height={800}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>



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

      {/* Manual Navigation Controls */}
      <div className="absolute bottom-5 left-5 md:bottom-[30px] md:left-[30px] lg:bottom-[40px] lg:left-[40px] z-50 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-sm text-foreground flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-sm text-foreground flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </section>
  );
}

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
  const featuredBlogs = BLOGS.filter((b) => b.featured).slice(0, 3);

  return (
    <>
      {/* SECTION 1 — Hero */}
      <FullWidthHeroCarousel />

      {/* SECTION 2 — LAZY LOADED CONTENT */}
      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-muted-foreground">Loading sections...</div>}>
        {/* SECTION 2 — Marketplace Summary */}
        <MarketplaceShowcase />

        {/* SECTION 3 — The Problem/Solution (How Disha Helps) */}
        <HowDishaHelps />

        {/* SECTION 4 — Overview of Key Programs */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              eyebrow="Our Initiatives"
              title="Pathways to success and impact"
              description="From career mentorship to community service, we offer structured programs designed to empower."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PROGRAMS.slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05} className="h-full">
                  <ProgramCard program={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Volunteer & Support Call-to-Action */}
        <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Get Involved"
                title="Your skills can change a life"
                description="We rely on passionate individuals to mentor, teach, and guide our youth. Become a Disha volunteer today."
              />
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Gift, text: "Share your professional expertise" },
                  { icon: Heart, text: "Mentor students in need of guidance" },
                  { icon: Sparkles, text: "Lead community outreach programs" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.05} as="li" className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </Reveal>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/volunteer">Browse Roles</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <Reveal delay={0.2}>
              <OptimizedImage
                src={images.gallery[5]}
                alt="Volunteers interacting with students"
                width={800}
                height={600}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </Reveal>
          </div>
        </section>

        {/* SECTION 6 — Our Core Approach */}
        <OurApproach />



        {/* SECTION 8 — Success Stories Highlights */}
        <section className="border-y border-border bg-card py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              eyebrow="Impact"
              title="Stories of transformation"
              description="Real stories from the youth and communities we've had the privilege to serve."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STORIES.slice(0, 3).map((s, i) => (
                <Reveal key={s.id} delay={i * 0.05} className="h-full">
                  <StoryCard story={s} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/success-stories">Read More Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Latest Insights (Blog) */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              eyebrow="Knowledge Base"
              title="Insights, news & resources"
              description="Stay updated with our latest thoughts on education, skilling, and youth empowerment."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredBlogs.map((b, i) => (
                <Reveal key={b.slug} delay={i * 0.06} className="h-full">
                  <BlogCard blog={b} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blogs">Visit Our Blog</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 10 — Testimonials Carousel */}
        <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              title="Community Voices"
              description="Hear from the volunteers, learners, mentors, and partners who make our movement possible."
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
                      <OptimizedImage
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

        {/* SECTION 12 — FAQ */}
        <FaqSection />

        {/* SECTION 13 — Volunteer CTA */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-6 py-10 lg:py-16 text-center text-foreground sm:px-12 border border-border">
                <div className="relative mx-auto max-w-2xl">
                  <Compass className="mx-auto h-10 w-10 text-primary" />
                  <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink">
                    Become Part of The Movement
                  </h2>
                  <p className="mt-5 text-muted-foreground">
                    Join a growing community making a powerful contribution to society.
                    Whether you want to mentor, learn, or collaborate—there's a place for you.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                      <a href="https://app-disha-for-indiaa.vercel.app/signup">Join The Movement</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </Suspense>

      {/* Final Spacer for Footer spacing if needed */}
      <div className="h-12 bg-background"></div>
    </>
  );
}
