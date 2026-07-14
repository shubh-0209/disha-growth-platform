import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Flame, Quote, ArrowRight, GraduationCap, Users, Rocket, Heart, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { images } from "@/lib/images";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Disha For India — Our Mission & Purpose" },
      { name: "description", content: "Learn about Disha For India Foundation & Educational Trust, dedicated to skilling and guiding India's youth toward their true path." },
      { property: "og:title", content: "About Disha For India" },
      { property: "og:description", content: "We empower. We make the difference. Skilling India's youth for a brighter future." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});
