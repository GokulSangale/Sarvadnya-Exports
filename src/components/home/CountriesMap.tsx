"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exportCountries } from "@/lib/data";

export default function CountriesMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-forest py-24 px-6 text-cream">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            Global Reach
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Countries We Export To
          </h2>
          <p className="mt-4 text-cream/70">
            Hover or tap a marker to see the destination. Our reefer-container network reaches
            nine markets across four continents.
          </p>
        </div>

        <div className="relative mt-14 aspect-[2/1] w-full rounded-3xl border border-cream/15 bg-forest-light/40">
          {/* Background continents: clipped to the rounded card, no interactive elements inside.
              preserveAspectRatio="xMidYMid meet" keeps shapes true regardless of container width. */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
              {/* North America */}
              <path d="M8,10 C18,7 27,11 26,18 C29,22 24,27 18,26 C12,29 5,25 6,18 C3,15 5,11 8,10 Z" fill="currentColor" className="text-cream/20" />
              {/* South America */}
              <path d="M22,32 C27,31 30,35 28,40 C29,45 24,49 21,46 C18,44 18,37 22,32 Z" fill="currentColor" className="text-cream/20" />
              {/* Europe */}
              <path d="M45,10 C52,8 58,10 57,15 C60,18 55,22 50,20 C46,22 42,18 45,10 Z" fill="currentColor" className="text-cream/20" />
              {/* Africa */}
              <path d="M46,24 C54,22 60,26 59,33 C61,39 55,47 50,45 C45,47 42,39 44,33 C41,29 43,26 46,24 Z" fill="currentColor" className="text-cream/20" />
              {/* Asia (incl. Middle East) */}
              <path d="M58,10 C70,6 88,9 92,16 C96,20 90,26 82,24 C80,30 70,34 65,29 C60,32 55,27 58,22 C54,18 55,13 58,10 Z" fill="currentColor" className="text-cream/20" />
              {/* Southeast Asia / Malaysia-Singapore */}
              <path d="M75,44 C80,42 85,45 83,49 C80,51 76,50 75,44 Z" fill="currentColor" className="text-cream/20" />
              {/* Australia */}
              <path d="M84,42 C90,40 96,43 95,47 C92,50 85,49 84,42 Z" fill="currentColor" className="text-cream/20" />
            </svg>
          </div>

          {/* Markers sit above the clipped background so tooltips are never cut off */}
          {exportCountries.map((c) => (
            <button
              key={c.code}
              onMouseEnter={() => setActive(c.code)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.code)}
              onBlur={() => setActive(null)}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              aria-label={c.name}
            >
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/50" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-gold border-2 border-forest group-hover:scale-125 transition-transform" />
              </span>
              {active === c.code && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 top-6 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-cream text-forest text-xs font-semibold px-3 py-1.5 shadow-premium"
                >
                  {c.name}
                </motion.span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {exportCountries.map((c) => (
            <span
              key={c.code}
              className="rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-medium text-cream"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
