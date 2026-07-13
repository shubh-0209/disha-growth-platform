import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Contribution Leaderboard — Disha For India" },
      {
        name: "description",
        content:
          "Recognizing the dedication and contributions of Disha For India's volunteers across communities. Browse rank, scores, and contribution records.",
      },
      { property: "og:title", content: "Contribution Leaderboard — Disha For India" },
      {
        property: "og:description",
        content: "Recognizing volunteers making meaningful contributions across communities.",
      },
      { property: "og:url", content: "/leaderboard" },
    ],
    links: [{ rel: "canonical", href: "/leaderboard" }],
  }),
  });