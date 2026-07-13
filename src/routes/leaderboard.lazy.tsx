import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Info,
  TrendingUp,
  TrendingDown,
  Minus,
  Clock,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Compass,
  Lock,
  Unlock,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getLeaderboardStats,
  getLeaderboardData,
  type VolunteerImpact,
} from "@/lib/api/leaderboard.functions";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/leaderboard")({
  
  component: LeaderboardPage,
});

// Achievement Milestones
const MILESTONES = [
  { id: "m1", title: "National Inspiration", rank: "Top 3", desc: "Highest tier of volunteer dedication.", icon: Sparkles },
  { id: "m2", title: "State Leader", rank: "Top 10", desc: "Recognized leading force in the state.", icon: Award },
  { id: "m3", title: "Mentor", rank: "Top 20", desc: "Guiding the next wave of changemakers.", icon: Users },
  { id: "m4", title: "Local Impact Maker", rank: "Top 50", desc: "Directly transforming local communities.", icon: Compass },
  { id: "m5", title: "Community Contributor", rank: "Top 100", desc: "Solid, regular support to programs.", icon: CheckCircle2 },
];

function LeaderboardPage() {
  // Query Filters State
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeframe, setTimeframe] = useState<"monthly" | "yearly" | "alltime">("alltime");
  const [page, setPage] = useState(1);
  const limit = 10;

  // React Query Fetching Stats
  const { data: stats, isLoading: statsLoading, isError: statsError } = useQuery({
    queryKey: ["leaderboardStats"],
    queryFn: () => getLeaderboardStats(),
  });

  // React Query Fetching List Data
  const { data: listResult, isLoading: listLoading, isError: listError } = useQuery({
    queryKey: ["leaderboardData", search, selectedState, selectedCity, selectedCollege, selectedCategory, timeframe, page],
    queryFn: async () => {
      try {
        return await getLeaderboardData({
          search: search || undefined,
          state: selectedState === "All" ? undefined : selectedState,
          city: selectedCity === "All" ? undefined : selectedCity,
          college: selectedCollege === "All" ? undefined : selectedCollege,
          category: selectedCategory === "All" ? undefined : selectedCategory,
          timeframe,
          page,
          limit,
        });
      } catch (err) {
        console.error("React Query - Leaderboard Data Error:", err);
        throw err;
      }
    },
  });

  // Mock logged-in user profile (for badge/milestones display evaluation)
  const myProfile = useMemo(() => {
    return {
      rank: 147,
      allTimeScore: 2150,
      programsCompleted: 5,
      hours: 80,
      name: "Your Contributor Dashboard",
    };
  }, []);

  // Compute available filters from data list mapping
  const states = ["All", "Punjab", "Maharashtra", "Delhi", "Karnataka", "West Bengal", "Tamil Nadu", "Gujarat", "Kerala", "Telangana"];
  const categories = ["All", "Financial Literacy", "Entrepreneurship", "Wellness", "Clean & Green", "Education", "Community Development"];
  const cities = ["All", "Ludhiana", "Mumbai", "New Delhi", "Bangalore", "Kolkata", "Chennai", "Amritsar", "Pune", "Ahmedabad", "Kochi", "Hyderabad", "Chandigarh"];
  const colleges = [
    "All",
    "Punjab Agricultural University",
    "St. Xavier's College",
    "Delhi Technological University",
    "REVA University",
    "Jadavpur University",
    "Madras Christian College",
    "Guru Nanak Dev University",
    "Symbiosis International",
    "Nirma University",
    "Panjab University",
    "Cochin University",
    "Osmania University",
    "NMIMS University",
    "LPU University",
  ];

  // Determine milestone unlock status for My Profile (rank 147)
  const unlockedMilestoneIds = useMemo(() => {
    const ids: string[] = [];
    if (myProfile.rank <= 100) ids.push("m5"); // Top 100
    if (myProfile.rank <= 50) ids.push("m4");  // Top 50
    if (myProfile.rank <= 20) ids.push("m3");  // Top 20
    if (myProfile.rank <= 10) ids.push("m2");  // Top 10
    if (myProfile.rank <= 3) ids.push("m1");   // Top 3
    return ids;
  }, [myProfile.rank]);

  // Fetching Top 3 featured volunteers from the search results
  const topThree = useMemo(() => {
    if (!listResult?.data) return [];
    return listResult.data.slice(0, 3);
  }, [listResult?.data]);

  const handleResetFilters = () => {
    setSearch("");
    setSelectedState("All");
    setSelectedCity("All");
    setSelectedCollege("All");
    setSelectedCategory("All");
    setPage(1);
  };

  return (
    <>
      <PageHero
        eyebrow="Contributor Board"
        title="Contribution Leaderboard"
        description="Recognizing volunteers making meaningful contributions across communities."
      />

      {/* STATS OVERVIEW */}
      <section className="py-12 border-b border-border bg-muted/10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {statsLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-28 animate-pulse rounded-3xl border border-border bg-card p-5" />
              ))
            ) : statsError || !stats ? (
              <div className="col-span-5 rounded-2xl border border-destructive bg-destructive/5 p-4 text-center text-sm text-destructive">
                Error loading contributor metrics. Please try again.
              </div>
            ) : (
              <>
                <Reveal>
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary">
                      <Users className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold text-foreground">
                      <AnimatedCounter value={stats.activeVolunteers} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Active Contributors</p>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-soft text-green">
                      <Clock className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold text-foreground">
                      <AnimatedCounter value={stats.totalHours} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Total Hours Contributed</p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold text-foreground">
                      <AnimatedCounter value={stats.programsCompleted} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Contributions Made</p>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-soft text-green">
                      <Compass className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold text-foreground">
                      <AnimatedCounter value={stats.communityImpactScore} suffix="%" />
                    </p>
                    <p className="text-xs text-muted-foreground">Engagement Rate</p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-2xl font-extrabold text-foreground">
                      <AnimatedCounter value={stats.livesImpacted} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Lives Positively Impacted</p>
                  </div>
                </Reveal>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">

          {/* TOP CONTRIBUTORS CARDS */}
          {listLoading ? (
            <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse rounded-3xl border border-border bg-card" />
              ))}
            </div>
          ) : listResult?.data && listResult.data.length > 0 ? (
            <div className="mb-12">
              <h2 className="mb-6 font-display font-bold text-foreground">Top Contributors</h2>
              
              {/* Desktop and Tablet grid */}
              <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topThree.map((v, i) => (
                  <Reveal key={v.id} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-card"
                    >
                      <div className="absolute right-6 top-6 rounded-full bg-orange-soft px-3 py-1 text-xs font-bold text-primary">
                        Rank #{v.rank}
                      </div>
                      <div className="flex items-center gap-4">
                        <ImageWithFallback src={v.photo} alt={v.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover border border-border" />
                        <div>
                          <h3 className="font-display font-bold text-foreground">{v.name}</h3>
                          <span className="rounded-full bg-green-soft px-2 py-0.5 text-[10px] font-semibold text-green">
                            {v.badge}
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 text-sm font-medium text-foreground italic">"{v.tagline}"</p>

                      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Score</p>
                          <p className="mt-0.5 text-base font-bold text-foreground">
                            {timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Programs</p>
                          <p className="mt-0.5 text-base font-bold text-foreground">{v.programsCompleted}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Hours</p>
                          <p className="mt-0.5 text-base font-bold text-foreground">{v.hours}h</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Streak: <span className="font-semibold text-primary">{v.streak} months</span></span>
                        <span className="flex items-center gap-1">
                          {v.trend === "rising" && <span className="flex items-center text-green"><TrendingUp className="mr-0.5 h-3.5 w-3.5" /> Rising</span>}
                          {v.trend === "stable" && <span className="flex items-center text-foreground/50"><Minus className="mr-0.5 h-3.5 w-3.5" /> Stable</span>}
                          {v.trend === "falling" && <span className="flex items-center text-red-500"><TrendingDown className="mr-0.5 h-3.5 w-3.5" /> Slow</span>}
                        </span>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>

              {/* Mobile swipeable carousel */}
              <div className="flex sm:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none">
                {topThree.map((v) => (
                  <div key={v.id} className="min-w-[85vw] snap-center rounded-3xl border border-border bg-card p-6 shadow-soft flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback src={v.photo} alt={v.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover border border-border" />
                        <div>
                          <h3 className="font-display font-bold text-foreground">{v.name}</h3>
                          <span className="rounded-full bg-green-soft px-2 py-0.5 text-[9px] font-semibold text-green">
                            {v.badge}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-full bg-orange-soft px-2.5 py-0.5 text-xs font-bold text-primary">
                        Rank #{v.rank}
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-medium text-foreground italic">"{v.tagline}"</p>
                    <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Score</p>
                        <p className="mt-0.5 text-sm font-bold text-foreground">
                          {timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore}
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Programs</p>
                        <p className="mt-0.5 text-sm font-bold text-foreground">{v.programsCompleted}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Hours</p>
                        <p className="mt-0.5 text-sm font-bold text-foreground">{v.hours}h</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* FILTER BAR - Desktop: inline, Mobile: bottom sheet trigger */}
          <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Timeframe Toggles */}
            <div className="flex gap-1.5 rounded-full border border-border bg-card p-1 self-start">
              {[
                { id: "monthly", label: "Monthly" },
                { id: "yearly", label: "Yearly" },
                { id: "alltime", label: "All Time" },
              ].map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => {
                    setTimeframe(tf.id as any);
                    setPage(1);
                  }}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer",
                    timeframe === tf.id ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tf.label}
                </button>
              ))}
            </div>

            {/* Desktop Filters (Horizontal bar) */}
            <div className="hidden lg:flex flex-wrap items-center gap-3">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search contributor..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="pl-9 h-9"
                />
              </div>

              {/* State Filter */}
              <Select value={selectedState} onValueChange={(val) => { setSelectedState(val); setPage(1); }}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((st) => (
                    <SelectItem key={st} value={st}>{st === "All" ? "All States" : st}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* City Filter */}
              <Select value={selectedCity} onValueChange={(val) => { setSelectedCity(val); setPage(1); }}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((ct) => (
                    <SelectItem key={ct} value={ct}>{ct === "All" ? "All Cities" : ct}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* College Filter */}
              <Select value={selectedCollege} onValueChange={(val) => { setSelectedCollege(val); setPage(1); }}>
                <SelectTrigger className="w-[160px] h-9">
                  <SelectValue placeholder="College" />
                </SelectTrigger>
                <SelectContent>
                  {colleges.map((col) => (
                    <SelectItem key={col} value={col}>{col === "All" ? "All Colleges" : col.substring(0, 16) + "..."}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={(val) => { setSelectedCategory(val); setPage(1); }}>
                <SelectTrigger className="w-[160px] h-9">
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat === "All" ? "All Programs" : cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Reset Trigger */}
              {(search || selectedState !== "All" || selectedCity !== "All" || selectedCollege !== "All" || selectedCategory !== "All") && (
                <Button variant="ghost" size="sm" onClick={handleResetFilters} className="text-muted-foreground hover:text-foreground">
                  Reset
                </Button>
              )}
            </div>

            {/* Mobile Filters Drawer trigger */}
            <div className="flex gap-2 lg:hidden">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="pl-9 h-10 w-full"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <SlidersHorizontal className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-[2rem] p-6 max-h-[85vh] overflow-y-auto">
                  <SheetHeader className="pb-4 border-b border-border">
                    <SheetTitle>Filter Contributors</SheetTitle>
                  </SheetHeader>
                  <div className="mt-5 space-y-4">
                    {/* State selector */}
                    <div className="space-y-1.5">
                      <Label>State</Label>
                      <Select value={selectedState} onValueChange={(val) => { setSelectedState(val); setPage(1); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((st) => (
                            <SelectItem key={st} value={st}>{st === "All" ? "All States" : st}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* City selector */}
                    <div className="space-y-1.5">
                      <Label>City</Label>
                      <Select value={selectedCity} onValueChange={(val) => { setSelectedCity(val); setPage(1); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="City" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((ct) => (
                            <SelectItem key={ct} value={ct}>{ct === "All" ? "All Cities" : ct}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* College selector */}
                    <div className="space-y-1.5">
                      <Label>College</Label>
                      <Select value={selectedCollege} onValueChange={(val) => { setSelectedCollege(val); setPage(1); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="College" />
                        </SelectTrigger>
                        <SelectContent>
                          {colleges.map((col) => (
                            <SelectItem key={col} value={col}>{col === "All" ? "All Colleges" : col}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Category selector */}
                    <div className="space-y-1.5">
                      <Label>Program Category</Label>
                      <Select value={selectedCategory} onValueChange={(val) => { setSelectedCategory(val); setPage(1); }}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat === "All" ? "All Programs" : cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button className="flex-1" variant="outline" onClick={handleResetFilters}>
                        Reset All
                      </Button>
                      <Button className="flex-1" onClick={() => {}}>
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* TABLE AND RESULTS SECTION */}
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* LEADERBOARD TABLE */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft overflow-hidden">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-foreground font-semibold">Leaderboard Ranking</h3>
                
                {/* Ranking Transparency Tooltip */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                        <Info className="h-4 w-4" /> Score Calculation
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[280px] p-3 text-xs leading-relaxed">
                      <p className="font-semibold mb-1">How is the score calculated?</p>
                      <p>Our scoring algorithm reflects real service contribution, rather than points-chasing. It incorporates:</p>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5">
                        <li>Volunteer Hours (weight: 40%)</li>
                        <li>Programs completed (weight: 30%)</li>
                        <li>Service consistency (weight: 20%)</li>
                        <li>Community feedback & quality (weight: 10%)</li>
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {listLoading ? (
                <div className="space-y-4 py-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-12 w-full animate-pulse rounded-xl bg-muted/30" />
                  ))}
                </div>
              ) : listError ? (
                <div className="py-12 text-center text-sm text-destructive">
                  <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
                  Failed to fetch leaderboard data. Please check your connection.
                </div>
              ) : !listResult?.data || listResult.data.length === 0 ? (
                /* EMPTY STATE (Positive encouragement) */
                <div className="py-10 lg:py-16 text-center max-w-sm mx-auto">
                  <Compass className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h4 className="font-display font-bold text-lg text-foreground">No matches found</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    "Every meaningful journey begins with one act of service."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Try refining your search queries or filter categories to discover more volunteers.
                  </p>
                  <Button variant="outline" className="mt-5" onClick={handleResetFilters}>
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">Rank</TableHead>
                        <TableHead>Contributor</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                        <TableHead className="text-center">Programs</TableHead>
                        <TableHead className="text-center">Hours</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Badge</TableHead>
                        <TableHead className="text-center">Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="relative">
                      <AnimatePresence mode="popLayout">
                        {listResult.data.map((v) => (
                          <motion.tr
                            key={v.id}
                            layoutId={`row-${v.id}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted transition-all hover:bg-secondary/30"
                          >
                            <TableCell className="font-bold text-foreground">
                              {v.rank <= 3 ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-soft text-xs font-extrabold text-primary">
                                  {v.rank}
                                </span>
                              ) : (
                                <span>#{v.rank}</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <ImageWithFallback src={v.photo} alt={v.name} width={32} height={32} className="h-8 w-8 rounded-full object-cover border border-border" />
                                <span className="font-medium text-foreground">{v.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right font-semibold text-foreground">
                              {timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore}
                            </TableCell>
                            <TableCell className="text-center font-medium text-muted-foreground">
                              {v.programsCompleted}
                            </TableCell>
                            <TableCell className="text-center font-medium text-muted-foreground">
                              {v.hours}h
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {v.city}
                            </TableCell>
                            <TableCell>
                              <span className={cn(
                                "rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
                                v.badge === "National Inspiration" && "bg-orange-soft text-primary",
                                v.badge === "State Leader" && "bg-green-soft text-green",
                                v.badge === "Mentor" && "bg-muted text-muted-foreground",
                                v.badge === "Local Impact Maker" && "bg-orange-soft text-primary",
                                v.badge === "Community Contributor" && "bg-green-soft text-green"
                              )}>
                                {v.badge}
                              </span>
                            </TableCell>
                            <TableCell className="text-center">
                              <span className="inline-flex justify-center">
                                {v.trend === "rising" && <TrendingUp className="h-4 w-4 text-green" aria-label="Rising" />}
                                {v.trend === "stable" && <Minus className="h-4 w-4 text-muted-foreground" aria-label="Stable" />}
                                {v.trend === "falling" && <TrendingDown className="h-4 w-4 text-red-500" aria-label="Slow" />}
                              </span>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </TableBody>
                  </Table>

                  {/* Table Pagination */}
                  {listResult.totalPages > 1 && (
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground">
                        Showing page {listResult.currentPage} of {listResult.totalPages}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={page === 1}
                          onClick={() => setPage((p) => p - 1)}
                        >
                          <ChevronLeft className="h-4 w-4 mr-0.5" /> Previous
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={page === listResult.totalPages}
                          onClick={() => setPage((p) => p + 1)}
                        >
                          Next <ChevronRight className="h-4 w-4 ml-0.5" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ACHIEVEMENT MILESTONES (SIDEBAR ONLY) */}
            <div className="space-y-6">
              {/* ACHIEVEMENT MILESTONES */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display font-bold text-base text-foreground mb-4">Milestones & Badges</h3>
                <div className="space-y-4">
                  {MILESTONES.map((ms) => {
                    const isUnlocked = unlockedMilestoneIds.includes(ms.id);
                    const Icon = ms.icon;
                    return (
                      <div key={ms.id} className="flex gap-3.5 p-3 rounded-2xl border border-border bg-secondary/20 items-start">
                        <span className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all",
                          isUnlocked ? "bg-orange-soft text-primary animate-pulse" : "bg-muted text-muted-foreground/40"
                        )}>
                          {isUnlocked ? <Icon className="h-5 w-5 animate-bounce-slow" /> : <Lock className="h-4 w-4" />}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-bold text-foreground">{ms.title}</h4>
                            <span className="text-[9px] uppercase tracking-wider bg-card px-1.5 py-0.5 border border-border rounded font-semibold text-muted-foreground">
                              {ms.rank}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-normal">{ms.desc}</p>
                          <span className={cn("text-[9px] font-semibold block mt-1.5 uppercase tracking-wide", isUnlocked ? "text-green font-bold" : "text-muted-foreground/50")}>
                            {isUnlocked ? "✓ Unlocked" : "Locked"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
