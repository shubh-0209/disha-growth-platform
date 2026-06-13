import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { BlogCard } from "@/components/cards";
import { BLOGS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blog — Disha For India" },
      { name: "description", content: "Practical articles on financial literacy, entrepreneurship, education, wellness, career growth and the environment from Disha For India." },
      { property: "og:title", content: "Blog — Disha For India" },
      { property: "og:description", content: "Insights to help India's students grow." },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogIndex,
});

const CATS = ["All", "Financial Literacy", "Entrepreneurship", "Education", "Wellness", "Career Growth", "Environment"];

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const featured = BLOGS.find((b) => b.featured);

  const filtered = useMemo(
    () =>
      BLOGS.filter((b) => {
        if (cat !== "All" && b.category !== cat) return false;
        if (query && !b.title.toLowerCase().includes(query.toLowerCase()) && !b.excerpt.toLowerCase().includes(query.toLowerCase())) return false;
        return true;
      }),
    [query, cat],
  );

  return (
    <>
      <PageHero
        eyebrow="The Disha Blog"
        title="Ideas to help you grow"
        description="Practical, honest writing on money, careers, entrepreneurship, wellness and building a better India."
      />

      {featured && (
        <section className="pt-12">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <Link to="/blogs/$slug" params={{ slug: featured.slug }} className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-card lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Featured</span>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <span className="w-fit rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-semibold text-green">{featured.category}</span>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">{featured.title}</h2>
                  <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readingTime} min read</span>
                    <span>·</span>
                    <span>{featured.author}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <BlogCard blog={b} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
              No articles match your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
