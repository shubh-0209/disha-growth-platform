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
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Media Gallery"
        title="Moments from our journey"
        description="A glimpse into the workshops, drives, events and smiles that make up the Disha For India story."
      />
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {GALLERY.map((item, i) => (
              <Reveal 
                key={item.src} 
                delay={(i % 6) * 0.1}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-muted shadow-soft transition-all duration-300 hover:shadow-card cursor-pointer",
                  (i % 5) === 0 && "md:col-span-2 md:row-span-2",
                  (i % 5) === 3 && "md:col-span-2"
                )}
              >
                <button
                  onClick={() => setActive(item)}
                  className="block w-full h-full text-left"
                >
                  <ImageWithFallback 
                    src={item.src} 
                    alt={item.caption} 
                    loading="lazy" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                  {/* Desktop Hover Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex flex-col justify-end p-6">
                    <p className="text-white font-medium text-lg translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                      {item.caption}
                    </p>
                  </div>
                  
                  {/* Mobile Caption (Always visible at bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:hidden">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {active && (
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
              <ImageWithFallback src={active.src} alt={active.caption} className="max-h-[75vh] w-full object-contain" />
              <div className="bg-black/90 p-5 text-center border-t border-white/10">
                <p className="text-white font-medium text-lg">{active.caption}</p>
              </div>
              <button onClick={() => setActive(null)} className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
