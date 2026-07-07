"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-blush py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">
            Trusted by Importers
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
            What Our Buyers Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <Quote className="text-gold" size={28} />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/75">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="font-display font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/55">
                  {t.company} &middot; {t.location}, {t.country}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
