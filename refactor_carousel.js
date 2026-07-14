const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

const startTarget = 'const HERO_CONTENT = {';
const endTarget = '      {/* Pagination Dots */}';

const startIndex = code.indexOf(startTarget);
const endIndex = code.indexOf(endTarget);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find targets");
  process.exit(1);
}

const replacement = \const HERO_SLIDES = [
  {
    headline: "Connecting People, Ideas, and Opportunities to Create Meaningful Change.",
    description: "Join a movement where individuals and organizations come together to learn, collaborate, and make a lasting impact on our communities.",
    primaryCta: { label: "Join The Movement", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.hero.home[0],
    alt: "Volunteers and community members collaborating",
  },
  {
    headline: "Recognizing Every Contribution You Make.",
    description: "Your efforts, skills, and participation deserve recognition. Disha provides opportunities to learn, contribute, and celebrate meaningful achievements.",
    primaryCta: { label: "Explore Our Impact", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.gallery[0], // award-ceremony.webp
    alt: "A community celebrating meaningful achievements",
  },
  {
    headline: "Initiatives Designed to Empower and Inspire.",
    description: "Explore programs that support continuous learning, community development, and personal growth for everyone involved.",
    primaryCta: { label: "Explore Initiatives", href: "/programs" },
    image: images.gallery[2], // team-certificates.webp
    alt: "Community members engaging in learning programs",
  },
  {
    headline: "Building a Better Future Together.",
    description: "Whether you are volunteering, mentoring, or leading, your actions create ripples of positive change that shape tomorrow.",
    primaryCta: { label: "Get Involved", href: "/volunteer" },
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
        
        {/* Invisible Placeholder to maintain Grid Height properly */}
        <div className="grid items-center gap-12 lg:grid-cols-2 invisible pointer-events-none">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight mb-6 line-clamp-3">
              {HERO_SLIDES[0].headline}
            </h1>
            <p className="text-lg lg:text-xl leading-[1.6] mb-8 max-w-xl">
              {HERO_SLIDES[0].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 text-base">Placeholder</Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>
                <strong className="font-semibold">Established in 2017</strong>
              </span>
            </div>
          </div>
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px]" />
        </div>

        {/* Absolute Slides with AnimatePresence */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex items-center pt-8 pb-16 lg:pt-12 lg:pb-24 px-5"
          >
            <div className="mx-auto w-full max-w-7xl grid items-center gap-12 lg:grid-cols-2">
              
              {/* Dynamic Heading Column */}
              <div className="flex flex-col justify-center pointer-events-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-foreground mb-6 line-clamp-3">
                  {HERO_SLIDES[currentSlide].headline}
                </h1>
                <p className="text-lg lg:text-xl leading-[1.6] text-muted-foreground mb-8 max-w-xl">
                  {HERO_SLIDES[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {HERO_SLIDES[currentSlide].primaryCta.href.startsWith("#") ? (
                    <Button
                      size="lg"
                      className="w-full sm:w-auto h-12 px-8 text-base shadow-sm"
                      onClick={() => scrollToSection(HERO_SLIDES[currentSlide].primaryCta.href.substring(1))}
                    >
                      {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : HERO_SLIDES[currentSlide].primaryCta.href.startsWith("/") ? (
                    <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                      <Link to={HERO_SLIDES[currentSlide].primaryCta.href}>
                        {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                      <a href={HERO_SLIDES[currentSlide].primaryCta.href}>
                        {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
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

              {/* Dynamic Image Column */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px] overflow-hidden rounded-[2rem] border border-border shadow-card bg-muted/20 pointer-events-auto">
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
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

\ + '      {/* Pagination Dots */}';

const newCode = code.substring(0, startIndex) + replacement + code.substring(endIndex + '      {/* Pagination Dots */}'.length);
fs.writeFileSync('src/routes/index.tsx', newCode);
console.log("Successfully replaced block");
