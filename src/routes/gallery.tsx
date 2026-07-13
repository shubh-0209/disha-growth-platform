import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GALLERY, type GalleryItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Media Gallery — Disha For India" },
      { name: "description", content: "Photo highlights from Disha For India events, workshops, drives and community programs across the country." },
      { property: "og:title", content: "Media Gallery — Disha For India" },
      { property: "og:description", content: "Moments from our journey empowering India's youth." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  });