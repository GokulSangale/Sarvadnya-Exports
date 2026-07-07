import type { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";
import { CheckCircle2 } from "lucide-react";
import {
  placeholderImages,
  productSpecs,
  productHighlights,
  certifications,
} from "@/lib/data";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Export-grade Bhagwa pomegranates from Sarvadnya Exports — deep red, naturally sweet, APEDA/FSSAI/Global GAP certified.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-cream">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Our Variety</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink">
              Bhagwa Pomegranates
            </h1>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Bhagwa is India's premier export pomegranate variety — prized for its deep red skin,
              soft edible seeds, and consistently high sugar content. It's the variety global
              importers ask for by name, and the only one we ship.
            </p>
            <ul className="mt-6 space-y-3">
              {["Deep Red Skin & Arils", "Naturally Sweet Taste", "High Juice Content", "Export Grade Sizing", "Long Shelf Life"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                  <CheckCircle2 size={18} className="text-pomegranate shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium">
            <SafeImage
              src={placeholderImages.freshFruit}
              alt="Fresh cut Bhagwa pomegranate showing deep red arils"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <SectionDivider className="text-blush" />

      <section className="bg-blush py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Why Bhagwa</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
              What Buyers Notice First
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {productHighlights.map((h) => (
              <div key={h.title} className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Specifications</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
              Export Specification Sheet
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10 shadow-card">
            <table className="w-full text-sm">
              <tbody>
                {productSpecs.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="w-1/3 px-6 py-4 font-mono text-xs uppercase tracking-wide text-forest">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-ink/75">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider className="text-forest" />

      <section className="bg-forest py-20 px-6 text-cream">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Certified</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Certifications & Compliance
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div key={c.code} className="rounded-2xl bg-cream/10 border border-cream/15 p-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-forest font-mono text-xs font-bold">
                  {c.code.length > 8 ? c.code.slice(0, 4) : c.code}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{c.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/65">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
