import { createFileRoute } from "@tanstack/react-router";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { Users, Clock, CalendarCheck, HeartHandshake, Building2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { IMPACT_TRENDS, IMPACT_BY_PROGRAM } from "@/lib/site-data";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact Dashboard — Disha For India" },
      { name: "description", content: "See Disha For India's measurable impact: students reached, training hours, events conducted, volunteers and communities impacted — with interactive charts." },
      { property: "og:title", content: "Impact Dashboard — Disha For India" },
      { property: "og:description", content: "Transparent, measurable social impact across India." },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  });