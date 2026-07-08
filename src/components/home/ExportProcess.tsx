"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processStages } from "@/lib/data";

export default function ExportProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-forest py-24 px-6 text-cream">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            Farm to Port
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Our Export Process
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          {/* track */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-cream/15 md:left-1/2 md:-translate-x-1/2" />
          {/* animated fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] top-2 w-[2px] bg-gold md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-12">
            {processStages.map((stage, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                    isLeft ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-forest font-mono text-xs font-semibold md:left-1/2 md:-translate-x-1/2">
                    {String(stage.order).padStart(2, "0")}
                  </span>
                  <div className={isLeft ? "md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}>
                    <h3 className="font-display text-xl font-semibold">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">
                      {stage.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
