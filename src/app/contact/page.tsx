import type { Metadata } from "next";
import type { ElementType } from "react";
import { MapPin, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quotation for export-grade Bhagwa pomegranates. Tell us your destination port, quantity, and frequency.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6 bg-cream">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ruby">Get in Touch</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink">
            Let's Talk About Your Order
          </h1>
          <p className="mt-5 text-ink/65 leading-relaxed">
            Share your destination port, required quantity, and shipping frequency — our export
            team will respond with a formal quotation within one business day.
          </p>

          <div className="mt-10 space-y-6">
            <InfoRow icon={MapPin} label="Location" value="Nashik, Maharashtra, India" />
            <InfoRow icon={Phone} label="Phone" value="+91 XXXXX XXXXX" />
            <InfoRow icon={MessageCircle} label="WhatsApp" value="+91 XXXXX XXXXX" />
            <InfoRow icon={Mail} label="Email" value="export@sarvadnyaexports.com" />
            <InfoRow icon={Clock} label="Response Time" value="Within 1 business day" />
          </div>

          <div className="mt-10 rounded-2xl bg-forest p-6 text-cream">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Export Markets</p>
            <p className="mt-2 text-sm text-cream/75 leading-relaxed">
              We currently ship to the USA, UK, UAE, Oman, Saudi Arabia, Qatar, Singapore,
              Malaysia and Europe — with capacity for new destination ports on request.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-3xl bg-white p-7 md:p-10 shadow-premium">
          <h2 className="font-display text-2xl font-semibold text-ink mb-6">
            Buyer Inquiry Form
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pomegranate/10 text-pomegranate">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}
