"use client";

import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { placeholderImages } from "@/lib/data";

const previewItems = [
  { label: "Farm", image: placeholderImages.farm },
  { label: "Harvesting", image: placeholderImages.harvesting },
  { label: "Sorting", image: placeholderImages.sorting },
  { label: "Grading", image: placeholderImages.grading },
  { label: "Packing", image: placeholderImages.packing },
  { label: "Container Loading", image: placeholderImages.containerLoading },
  { label: "Cold Storage", image: placeholderImages.coldStorage },
  { label: "Fresh Pomegranates", image: placeholderImages.freshFruit },
];

export default function GalleryPreview() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">
              Behind the Shipment
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
              From Orchard to Container
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pomegranate hover:text-pomegranate-dark"
          >
            View Full Gallery
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <SafeImage
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-70 group-hover:opacity-90 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-cream translate-y-1 group-hover:translate-y-0 transition-transform">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
