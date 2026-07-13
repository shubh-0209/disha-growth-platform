import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  Briefcase,
  GraduationCap,
  Presentation,
  Trophy,
  Code,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { OPPORTUNITY_HUB, type HubOpportunity, type OpportunityHubType } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/opportunity-hub")({
  head: () => ({
    meta: [
      { title: "Opportunity Hub — Disha For India" },
      {
        name: "description",
        content:
          "Discover internships, workshops, competitions and hackathons for Indian students. Search and filter opportunities in one place.",
      },
      { property: "og:title", content: "Opportunity Hub — Disha For India" },
      {
        property: "og:description",
        content: "Find your next internship, workshop, competition or hackathon.",
      },
      { property: "og:url", content: "/opportunity-hub" },
    ],
    links: [{ rel: "canonical", href: "/opportunity-hub" }],
  }),
  });