import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-semibold">Sarvadnya Exports</h3>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed">
            Premium quality fresh Indian pomegranates, exported worldwide with care from farm to
            port.
          </p>
          <div className="mt-4 flex gap-4 text-cream/70">
            <Instagram size={18} className="hover:text-gold transition-colors cursor-pointer" />
            <Linkedin size={18} className="hover:text-gold transition-colors cursor-pointer" />
            <Facebook size={18} className="hover:text-gold transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link href="/" className="hover:text-cream">Home</Link></li>
            <li><Link href="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link href="/products" className="hover:text-cream">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-cream">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Certifications</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>APEDA Registered</li>
            <li>FSSAI Licensed</li>
            <li>Global GAP Certified</li>
            <li>Export Quality Assured</li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Nashik, Maharashtra, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              +91 XXXXX XXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              export@sarvadnyaexports.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Sarvadnya Exports. All rights reserved.
      </div>
    </footer>
  );
}
