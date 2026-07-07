"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import {
  buyerLeadSchema,
  type BuyerLeadFormValues,
  importCountries,
  frequencyOptions,
} from "@/lib/schemas";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BuyerLeadFormValues>({ resolver: zodResolver(buyerLeadSchema) });

  const onSubmit = async (values: BuyerLeadFormValues) => {
    setState("submitting");
    try {
      // 1. Save the lead to Firestore. Firestore security rules (see firestore.rules)
      //    allow public "create" on this collection but block read/update/delete,
      //    so anonymous visitors can submit without an account.
      await addDoc(collection(db, "buyer_leads"), {
        ...values,
        createdAt: serverTimestamp(),
        status: "Unread",
      });

      // 2. A Cloud Function (functions/src/onLeadCreated.ts) listens for new
      //    buyer_leads documents and sends the WhatsApp Cloud API notification to the
      //    business number automatically. As a client-side fallback — useful in local
      //    dev before that function is deployed — we also open a prefilled wa.me link.
      const businessNumber = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER || "91XXXXXXXXXX";
      const text = encodeURIComponent(
        `New Buyer Inquiry\n\nCompany: ${values.companyName}\nBuyer: ${values.buyerName}\nCountry: ${values.country}\nQuantity: ${values.quantity}\nFrequency: ${values.frequency}\nPort: ${values.destinationPort}\nPhone: ${values.phone}\nEmail: ${values.email}\n\nPlease contact immediately.`
      );
      window.open(`https://wa.me/${businessNumber}?text=${text}`, "_blank");

      setState("success");
      reset();
    } catch (err) {
      console.error("Failed to submit buyer lead:", err);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-forest/5 border border-forest/15 p-8 text-center">
        <CheckCircle2 className="mx-auto text-forest" size={40} />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Inquiry Sent</h3>
        <p className="mt-2 text-sm text-ink/65">
          Thank you — we've received your details and opened WhatsApp so you can message us
          directly. Our team replies within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold text-pomegranate hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company Name" error={errors.companyName?.message}>
          <input {...register("companyName")} className="input" placeholder="ABC Trading LLC" />
        </Field>
        <Field label="Buyer Name" error={errors.buyerName?.message}>
          <input {...register("buyerName")} className="input" placeholder="Your full name" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Country" error={errors.country?.message}>
          <select {...register("country")} className="input" defaultValue="">
            <option value="" disabled>Select country</option>
            {importCountries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Destination Port" error={errors.destinationPort?.message}>
          <input {...register("destinationPort")} className="input" placeholder="e.g. Jebel Ali, Dubai" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} className="input" placeholder="you@company.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="+1 555 000 0000" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="WhatsApp Number" error={errors.whatsapp?.message}>
          <input {...register("whatsapp")} className="input" placeholder="+1 555 000 0000" />
        </Field>
        <Field label="Required Quantity" error={errors.quantity?.message}>
          <input {...register("quantity")} className="input" placeholder="e.g. 20 tons / month" />
        </Field>
      </div>

      <Field label="Frequency" error={errors.frequency?.message}>
        <select {...register("frequency")} className="input" defaultValue="">
          <option value="" disabled>Select frequency</option>
          {frequencyOptions.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </Field>

      <Field label="Message (optional)" error={errors.message?.message}>
        <textarea {...register("message")} rows={4} className="input resize-none" placeholder="Anything else we should know?" />
      </Field>

      {state === "error" && (
        <p className="text-sm text-ruby">
          Something went wrong sending your inquiry. Please try again, or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-pomegranate px-7 py-4 text-sm md:text-base font-semibold text-cream shadow-card hover:bg-pomegranate-dark transition-colors disabled:opacity-60"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Request Quote <Send size={16} />
          </>
        )}
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(32, 28, 26, 0.12);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #201c1a;
        }
        .input:focus {
          outline: 2px solid #b8974e;
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-ruby">{error}</span>}
    </label>
  );
}
