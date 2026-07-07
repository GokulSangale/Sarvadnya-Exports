"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Why Sarvadnya</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
            Why Choose Sarvadnya Exports
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-ink/8 bg-white/60 backdrop-blur-sm p-7 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pomegranate text-cream group-hover:animate-seed-pulse">
                <Check size={18} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
