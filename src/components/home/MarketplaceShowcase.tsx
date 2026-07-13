import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Gift, Award, Briefcase, Ticket, Library, Target, ArrowRight, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

const CATEGORIES = [
  { icon: GraduationCap, label: "Scholarships", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: BookOpen, label: "Learning Resources", color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: Gift, label: "Disha Merchandise", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Award, label: "Certificates", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Briefcase, label: "Career Support", color: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: Ticket, label: "Gift Vouchers", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Library, label: "Online Courses", color: "text-cyan-500", bg: "bg-cyan-50" },
  { icon: Target, label: "Exclusive Rewards", color: "text-pink-500", bg: "bg-pink-50" },
];

export function MarketplaceShowcase() {
  return (
    <section id="marketplace" className="relative overflow-hidden bg-background pt-16 pb-4 lg:pt-28 lg:pb-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-blue-400/5 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">


            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Recognizing <span className="text-primary">Every Contribution</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-xl">
                Your efforts, skills, and participation deserve recognition. Disha provides opportunities to learn, contribute, and celebrate meaningful achievements through <strong className="text-foreground">Community Impact Credits (Disha Coins)</strong>.
              </p>
            </Reveal>

            {/* Categories */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10">
                {CATEGORIES.map((cat, i) => {
                  const Icon = cat.icon;
                  return (
                    <motion.div
                      key={cat.label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:border-primary/20 hover:shadow-md"
                    >
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full ${cat.bg}`}>
                        <Icon className={`h-3.5 w-3.5 ${cat.color}`} />
                      </div>
                      <span className="text-foreground/90">{cat.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                  <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard">
                    Discover Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Official Changemaker Hub</span>
                  <span>Recognizing individuals for learning, volunteering, and making an impact.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side Browser Mockup */}
          <div className="relative order-1 lg:order-2">
            <Reveal delay={0.3}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                {/* macOS Browser Header */}
                <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto flex h-6 w-full max-w-[200px] items-center justify-center rounded-md bg-background/50 text-[10px] text-muted-foreground border border-border/50">
                    app-disha-for-indiaa.vercel.app
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="relative bg-background overflow-hidden p-1">
                  <img
                    src="/gallery/marketplace.png"
                    alt="Disha Changemaker Hub Dashboard"
                    className="w-full h-auto object-cover rounded-xl shadow-inner border border-border/50"
                  />
                  
                  {/* Subtle glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-xl" />
                </div>
              </motion.div>
            </Reveal>


          </div>

        </div>
      </div>
    </section>
  );
}
