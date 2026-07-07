"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-pomegranate py-24 px-6 text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ruby/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
          Interested in importing Indian Pomegranates?
        </h2>
        <p className="mt-4 text-cream/80">
          Tell us your destination port and volume — we'll send a quotation within one business
          day.
        </p>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-9 py-5 text-base md:text-lg font-semibold text-pomegranate shadow-premium hover:bg-gold hover:text-cream transition-colors"
        >
          Get Quotation Now
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
