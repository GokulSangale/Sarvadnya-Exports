import type { Metadata } from "next";
import SafeImage from "@/components/ui/SafeImage";
import { Sprout, ShieldCheck, Truck, Users, Target, Eye, Heart } from "lucide-react";
import { placeholderImages, stats } from "@/lib/data";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sarvadnya Exports is a dedicated Indian pomegranate exporter built on modern farming practices, food safety, and reliable global logistics.",
};

const pillars = [
  {
    icon: Sprout,
    title: "Modern Farming Practices",
    description:
      "We work with orchards that follow scientific irrigation, organic input schedules, and Global GAP-aligned cultivation, so quality starts at the root.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety First",
    description:
      "Every batch moves through residue testing and FSSAI-compliant handling, from the orchard floor to the export carton.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Pre-cooling, reefer containers, and port-side coordination keep the cold chain unbroken from Nashik to your destination port.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our sourcing, quality, and logistics teams have handled export documentation and buyer relationships across nine countries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 bg-forest text-cream overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Our Story</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold">
            A Dedicated Indian Exporter, Built for Global Trust
          </h1>
          <p className="mt-6 text-cream/75 leading-relaxed max-w-2xl mx-auto">
            Sarvadnya Exports was founded in Nashik, Maharashtra — the heart of India's
            pomegranate belt — to give importers a single, dependable source for export-grade
            Bhagwa pomegranates, grown organically and shipped with full traceability.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium">
            <SafeImage
              src={placeholderImages.farm}
              alt="Pomegranate orchard partnered with Sarvadnya Exports"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Since Day One</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink">
              From a Single Orchard to Nine Export Markets
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              We started by exporting to a handful of trusted buyers who wanted consistency more
              than anything else — same grade, same freshness, every shipment. That discipline is
              still what defines us. Today we supply importers across the USA, UK, UAE, Oman,
              Saudi Arabia, Qatar, Singapore, Malaysia and Europe, without ever losing the
              farm-level relationships that built our quality in the first place.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Every fruit we ship is grown organically, hand-picked at peak ripeness, and moved
              through an unbroken cold chain — because a pomegranate that leaves Nashik in perfect
              condition should arrive that way too.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider className="text-blush" />

      <section className="bg-blush py-20 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Mission", text: "Deliver export-grade Indian pomegranates to global markets with uncompromising freshness, food safety, and documentation accuracy." },
            { icon: Eye, title: "Vision", text: "To be the most trusted Indian pomegranate exporter for importers who value consistency over the cheapest quote." },
            { icon: Heart, title: "Values", text: "Direct farm relationships, honest grading, and a cold chain that never breaks between harvest and your warehouse." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-8 shadow-card md:col-span-1">
              <v.icon className="text-pomegranate" size={28} />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.text}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-forest p-8 shadow-card text-cream md:col-span-1 flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">By the Numbers</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="text-left">
                  <div className="font-mono text-2xl font-semibold text-cream">
                    {s.value}{s.suffix}
                  </div>
                  <p className="mt-1 text-[11px] text-cream/60 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">What Sets Us Apart</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
              Built on Farming, Food Safety, and Follow-Through
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-2xl border border-ink/8 bg-white/70 p-7 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pomegranate/10 text-pomegranate">
                  <p.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
