import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "All" | "General" | "Students" | "Volunteers" | "Partners";

const CATEGORIES: Category[] = ["All", "General", "Students", "Volunteers", "Partners"];

const FAQS = [
  {
    category: "General",
    question: "What is Disha For India?",
    answer: "Disha For India is a social impact organization dedicated to empowering students through career guidance, skill development, internships, mentorship, financial literacy, and community-driven opportunities.",
  },
  {
    category: "General",
    question: "Who can join Disha For India?",
    answer: "Students, volunteers, educators, schools, colleges, professionals, CSR partners, and organizations can become part of the Disha community and contribute to its mission.",
  },
  {
    category: "Volunteers",
    question: "How do I become a volunteer?",
    answer: "Click the \"Become a Volunteer\" button on the homepage, sign in to the Disha platform, and complete your volunteer profile to start making an impact.",
  },
  {
    category: "Students",
    question: "What is the Disha Marketplace?",
    answer: "The Disha Marketplace allows students and volunteers to redeem Disha Coins earned through participation for scholarships, learning resources, certificates, merchandise, and other rewards.",
  },
  {
    category: "Students",
    question: "Are Disha programs free?",
    answer: "Many Disha initiatives are offered free of cost to students, while some specialized programs or partner activities may have specific eligibility requirements.",
  },
  {
    category: "Partners",
    question: "How can schools or organizations partner with Disha?",
    answer: "Schools, colleges, NGOs, and corporate partners can collaborate with Disha to organize workshops, career guidance sessions, internships, and community initiatives.",
  },
  {
    category: "Students",
    question: "How do I earn Disha Coins?",
    answer: "You can earn Disha Coins by participating in workshops, volunteering, completing learning activities, and contributing to community programs.",
  },
  {
    category: "General",
    question: "How do I contact Disha For India?",
    answer: "Visit the official website or connect with the Disha team through the available communication channels for support, partnerships, or general inquiries.",
  }
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleOpen = (question: string) => {
    setOpenIndex((prev) => (prev === question ? null : question));
  };

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="pt-16 pb-8 lg:pt-24 lg:pb-10 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about Disha For India, our programs, volunteering opportunities, and the Disha Marketplace."
          align="center"
        />

        {/* Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat === "All" ? "All Questions" : `For ${cat}`}
              </button>
            ))}
          </div>
        </Reveal>

        {/* FAQs Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 items-start lg:gap-6">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === faq.question;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <article
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-card transition-colors duration-300",
                      isOpen
                        ? "border-primary shadow-soft"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <button
                      onClick={() => toggleOpen(faq.question)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={cn(
                          "text-base font-semibold transition-colors",
                          isOpen ? "text-primary" : "text-foreground"
                        )}
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 pt-1">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA Box */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:px-10">
            <div>
              <h4 className="text-xl font-bold text-foreground">Want to know more?</h4>
              <p className="mt-1 text-base text-muted-foreground">Reach out to our team any time</p>
            </div>
            <Button asChild size="lg" className="rounded-full px-8 shadow-md">
              <a href="mailto:inaggarwal76@gmail.com">Connect with us</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
