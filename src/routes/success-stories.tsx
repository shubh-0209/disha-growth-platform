import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { StoryCard } from "@/components/cards";
import { STORIES, type StoryType } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Disha For India" },
      { name: "description", content: "Real transformation stories from students, volunteers and communities empowered by Disha For India." },
      { property: "og:title", content: "Success Stories — Disha For India" },
      { property: "og:description", content: "Filter inspiring journeys by student, volunteer and community." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
});
