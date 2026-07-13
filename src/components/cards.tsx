import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import * as Icons from "lucide-react";
import type { Program, DishaEvent, Blog, Story } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = (Icons[program.icon as keyof typeof Icons] || Icons.Sparkles) as React.ComponentType<{ className?: string }>;
  const isGreen = program.accent === "green";
  return (
    <Link
      to="/programs/$slug"
      params={{ slug: program.slug }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <span
        className={cn(
          "grid h-12 w-12 place-items-center rounded-2xl",
          isGreen ? "bg-success-soft text-success" : "bg-primary-soft text-primary",
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold capitalize text-foreground">{program.title}</h3>
      <p className="mt-0.5 text-sm font-medium text-muted-foreground">{program.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-sm font-semibold", isGreen ? "text-green" : "text-primary")}>
        Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function EventCard({ event }: { event: DishaEvent }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback src={event.image} alt={event.title} width={800} height={500} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className={cn(
          "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
          event.status === "upcoming" ? "bg-primary text-primary-foreground" : "bg-ink/80 text-background",
        )}>
          {event.status === "upcoming" ? "Upcoming" : "Completed"}
        </span>
      </div>
      <div className="p-5">
        <span className="rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-semibold text-green">{event.category}</span>
        <h3 className="mt-3 text-lg font-semibold leading-snug capitalize text-foreground">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {event.date === "Coming Soon" ? "Coming Soon" : new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {event.location}</span>
        </div>
      </div>
    </article>
  );
}

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: blog.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback src={blog.cover} alt={blog.title} width={800} height={500} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">{blog.category}</span>
        <h3 className="mt-3 text-lg font-semibold leading-snug capitalize text-foreground transition-colors group-hover:text-primary">{blog.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{blog.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {blog.readingTime} min read</span>
          <span>·</span>
          <span>{new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
        </div>
      </div>
    </Link>
  );
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback src={story.photo} alt={story.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">{story.type}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug capitalize text-foreground">{story.headline}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>
        <p className="mt-3 text-sm font-semibold text-green">— {story.name}</p>
      </div>
    </article>
  );
}
