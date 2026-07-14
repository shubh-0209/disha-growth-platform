import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, ArrowRight, HandHeart } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { VOLUNTEER_ROLES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer Hub — Disha For India" },
      { name: "description", content: "Browse volunteer opportunities in teaching, design, technology, marketing and community outreach. Invest your time to uplift India's youth." },
      { property: "og:title", content: "Volunteer Hub — Disha For India" },
      { property: "og:description", content: "Find a volunteer role and make a powerful contribution." },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
});
