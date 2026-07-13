import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { EventCard } from "@/components/cards";
import { EVENTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Disha For India" },
      { name: "description", content: "Upcoming and past events from Disha For India — career fairs, founder bootcamps, financial literacy drives, wellness camps and community programs." },
      { property: "og:title", content: "Events — Disha For India" },
      { property: "og:description", content: "Join our career fairs, bootcamps, drives and community events." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  });