import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GALLERY } from "@/lib/site-data";
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
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Media Gallery"
        title="Moments from our journey"
        description="A glimpse into the workshops, drives, events and smiles that make up the Disha For India story."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {GALLERY.map((src, i) => (
              <Reveal key={src} delay={(i % 6) * 0.05}>
                <button
                  onClick={() => setActive(src)}
                  className={cn(
                    "block w-full overflow-hidden rounded-2xl border border-border shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
                  )}
                >
                  <img src={src} alt={`Disha For India gallery ${i + 1}`} loading="lazy" className="w-full object-cover transition-transform duration-500 hover:scale-105" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {active && (
            <div className="relative">
              <img src={active} alt="Gallery preview" className="max-h-[80vh] w-full rounded-2xl object-contain" />
              <button onClick={() => setActive(null)} className="absolute -top-3 -right-3 grid h-9 w-9 place-items-center rounded-full bg-background text-foreground shadow-card">
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
