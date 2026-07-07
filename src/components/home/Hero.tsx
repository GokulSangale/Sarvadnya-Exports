"use client";

import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { placeholderImages, stats } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-16 h-[130%]">
        <SafeImage
          src={placeholderImages.hero}
          alt="Fresh Indian pomegranates ready for export"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:pb-20 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-gold"
        >
          100% Organic &middot; Vine-Ripened &middot; Export-Grade Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-cream"
        >
          Premium Organic Indian Pomegranates Exported Worldwide
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ruby px-7 py-4 text-sm md:text-base font-semibold text-cream shadow-premium hover:bg-pomegranate transition-colors"
          >
            Request Quotation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 backdrop-blur-sm px-7 py-4 text-sm md:text-base font-semibold text-cream hover:bg-cream/20 transition-colors"
          >
            <PlayCircle size={18} />
            Explore Products
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl bg-cream/10 backdrop-blur-md border border-cream/20 p-6 max-w-2xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-cream">
              <AnimatedCounterLight value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Light-on-dark variant of the stat counter for use over the hero image
function AnimatedCounterLight({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-mono text-2xl md:text-3xl font-semibold text-cream">
        {value}
        {suffix}
      </div>
      <p className="mt-1 text-[11px] md:text-xs tracking-wide text-cream/70 uppercase">{label}</p>
    </div>
  );
}
