"use client";

import { useState } from "react";
import SafeImage from "@/components/ui/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { galleryPhotos, galleryCategories, type GalleryPhoto } from "@/lib/data";

const ALL_ID = "all";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_ID);
  const [lightbox, setLightbox] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null);

  const categoriesToShow =
    activeCategory === ALL_ID
      ? galleryCategories
      : galleryCategories.filter((c) => c.id === activeCategory);

  const openLightbox = (photos: GalleryPhoto[], index: number) => setLightbox({ photos, index });
  const closeLightbox = () => setLightbox(null);
  const step = (dir: 1 | -1) =>
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + dir + prev.photos.length) % prev.photos.length }
        : prev
    );

  return (
    <>
      <section className="pt-32 pb-14 px-6 bg-cream text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Behind Every Shipment</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold text-ink">Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-ink/65">
          From the orchard to the container — including the teams who grow, sort, pack and ship
          every batch by hand.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <FilterPill label="All" active={activeCategory === ALL_ID} onClick={() => setActiveCategory(ALL_ID)} />
          {galleryCategories.map((c) => (
            <FilterPill
              key={c.id}
              label={c.title}
              active={activeCategory === c.id}
              onClick={() => setActiveCategory(c.id)}
            />
          ))}
        </div>
      </section>

      <section className="bg-cream pb-24 px-6">
        <div className="mx-auto max-w-7xl space-y-16">
          {categoriesToShow.map((category) => {
            const photos = galleryPhotos[category.id] ?? [];
            return (
              <div key={category.id}>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                    {category.title}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50">
                    <Users size={14} />
                    {photos.filter((p) => p.tag === "labor").length} with our team
                  </span>
                </div>

                {/* CSS columns masonry — no JS layout library needed */}
                <div className="mt-6 columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
                  {photos.map((photo, i) => (
                    <motion.button
                      key={photo.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                      onClick={() => openLightbox(photos, i)}
                      className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid focus-visible:outline-gold"
                      style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/3" }}
                    >
                      <SafeImage
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
                      {photo.tag === "labor" && (
                        <span className="absolute top-2 left-2 rounded-full bg-cream/90 px-2.5 py-1 text-[10px] font-semibold text-forest">
                          Our Team
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-6 right-6 text-cream/80 hover:text-cream"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 text-cream/80 hover:text-cream"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 text-cream/80 hover:text-cream"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox.photos[lightbox.index].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-3xl aspect-[4/3]"
            >
              <SafeImage
                src={lightbox.photos[lightbox.index].src}
                alt={lightbox.photos[lightbox.index].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <p className="absolute -bottom-9 left-0 right-0 text-center text-sm text-cream/70">
                {lightbox.photos[lightbox.index].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
        active ? "bg-pomegranate text-cream" : "bg-white text-ink/60 hover:bg-blush"
      }`}
    >
      {label}
    </button>
  );
}
