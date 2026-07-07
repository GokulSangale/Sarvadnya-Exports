import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarvadnyaexports.com"),
  title: {
    default: "Sarvadnya Exports | Premium Indian Pomegranate Exporter",
    template: "%s | Sarvadnya Exports",
  },
  description:
    "Sarvadnya Exports supplies premium, organic, export-grade Bhagwa pomegranates from India to importers across the USA, UK, UAE, Oman, Saudi Arabia, Qatar, Singapore, Malaysia and Europe.",
  keywords: [
    "Indian pomegranate exporter",
    "organic pomegranate export",
    "Bhagwa pomegranate export",
    "fresh fruit exporter India",
    "pomegranate supplier USA UK UAE",
    "APEDA fruit exporter",
  ],
  openGraph: {
    title: "Sarvadnya Exports | Premium Organic Indian Pomegranate Exporter",
    description:
      "100% organic, vine-ripened, export-grade Indian pomegranates shipped to global markets.",
    url: "https://www.sarvadnyaexports.com",
    siteName: "Sarvadnya Exports",
    images: ["/images/og-cover.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvadnya Exports | Premium Indian Pomegranate Exporter",
    description: "Farm fresh, naturally sweet, export-grade Indian pomegranates shipped worldwide.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sarvadnya Exports",
              description:
                "Premium quality fresh Indian pomegranate exporter serving global markets.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Maharashtra",
              },
              areaServed: [
                "USA", "UK", "UAE", "Oman", "Saudi Arabia", "Qatar", "Singapore", "Malaysia", "Europe",
              ],
              knowsAbout: "Fresh pomegranate export, cold chain logistics, APEDA/FSSAI certified produce",
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
