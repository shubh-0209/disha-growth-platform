import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Flame, Heart, ShieldCheck, Users, Lightbulb, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/site-data";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Disha For India" },
      { name: "description", content: "Our vision to build a healthy, happy and wealthy society and our mission to skill India's youth for employability and entrepreneurship." },
      { property: "og:title", content: "Vision & Mission — Disha For India" },
      { property: "og:description", content: "Improving the employability and skill quotient of India's youth." },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
});
