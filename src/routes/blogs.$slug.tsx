import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/cards";
import { BLOGS, type Blog } from "@/lib/site-data";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = BLOGS.find((b) => b.slug === params.slug);
    if (!blog) throw notFound();
    const related = BLOGS.filter((b) => b.slug !== blog.slug && b.category === blog.category).slice(0, 3);
    return { blog, related: related.length ? related : BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3) };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Button asChild className="mt-6"><Link to="/blogs">Back to blog</Link></Button>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <Button asChild className="mt-6"><Link to="/blogs">Back to blog</Link></Button>
    </div>
  ),
  component: BlogPost,
});

import { Helmet } from "react-helmet-async";

function BlogPost() {
  const { blog, related } = Route.useLoaderData();

  return (
    <article>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://dishaforindia.org/blogs/${blog.slug}`} />
        <meta property="og:title" content={`${blog.title} | Disha For India`} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.cover} />
        <meta property="og:url" content={`https://dishaforindia.org/blogs/${blog.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:image" content={blog.cover} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${blog.title}",
              "image": "${blog.cover}",
              "datePublished": "${blog.date}",
              "author": {
                "@type": "Person",
                "name": "${blog.author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Disha For India",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dishaforindia.org/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <div className="relative">
        <div className="aspect-[21/9] max-h-[420px] w-full overflow-hidden">
          <OptimizedImage src={blog.cover} alt={blog.title} width={1200} height={514} loading="eager" isHero={true} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-5">
        <div className="-mt-20 relative rounded-3xl border border-border bg-card p-7 shadow-card sm:p-10">
          <Button asChild variant="ghost" size="sm" className="mb-4 -ml-2">
            <Link to="/blogs"><ArrowLeft className="mr-1 h-4 w-4" /> All articles</Link>
          </Button>
          <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">{blog.category}</span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{blog.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{blog.author}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {blog.readingTime} min read</span>
          </div>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-foreground/85">
            {blog.content.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Related reading</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b: Blog, i: number) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <BlogCard blog={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
