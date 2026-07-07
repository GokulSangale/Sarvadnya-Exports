# Sarvadnya Exports — Website

Premium Indian pomegranate export company website. **This phase delivers the project
scaffold + the complete Home page.** Remaining pages (About, Products, Gallery, Contact +
lead form, Admin Dashboard, Cloud Functions) are planned for the phases below.

## Design system

- **Palette:** cream `#FBF7F0` (base), pomegranate `#7A1F2B` (primary), ruby `#C8102E`
  (CTA accent), forest `#1F3D2B` (secondary/trust), gold `#B8974E` (premium accent).
- **Type:** Fraunces (display headlines), Inter (body/UI), IBM Plex Mono (stats, labels,
  data — gives the brand an "export documentation" feel).
- **Signature motif:** the scalloped "crown divider" (`SectionDivider.tsx`) between
  sections, echoing a pomegranate's calyx — used instead of a plain straight border.
- Images are Unsplash placeholders (`src/lib/data.ts → placeholderImages`) — swap for real
  farm/export photography, ideally served from Firebase Storage, before launch.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Firebase config
npm run dev
```

Visit `http://localhost:3000`.

## What's included in this phase

- Next.js 15 App Router + TypeScript + Tailwind project scaffold
- Firebase client SDK initialized (`src/lib/firebase.ts`) — ready for Firestore/Auth/Storage
  once you add real config
- Global header (scroll-aware, mobile menu), footer, floating WhatsApp button
- Full Home page: Hero (parallax + animated stats), Why Choose Us, animated Export
  Process timeline, interactive Countries map, Gallery preview, Testimonials preview,
  final CTA
- SEO: metadata, Open Graph/Twitter tags, LocalBusiness JSON-LD in `layout.tsx`

## Roadmap (next phases)

1. **About, Products, Gallery, Contact pages** — Products page with Bhagwa spec sheet +
   certification icons; Gallery with masonry + lightbox; Contact page with the buyer
   inquiry form (React Hook Form + Zod) wired to Firestore `buyer_leads`.
2. **Lead notifications** — Firebase Cloud Function that fires on new `buyer_leads`
   documents, calls the WhatsApp Cloud API (with a `wa.me` prefilled-link fallback if the
   API isn't configured), and optionally sends an email via EmailJS.
3. **Admin portal** — Google Sign-In restricted to `ADMIN_ALLOWED_EMAILS`, dashboard cards,
   lead table with search/filter/pagination, lead detail modal, analytics charts.
4. **Firestore security rules** for `buyer_leads`, `admin_users`, `gallery`, `testimonials`,
   `products`, `settings` collections, plus Storage rules for image uploads.
5. **Polish** — sitemap.xml/robots.txt, PDF company profile download, dark mode, i18n
   readiness, Lighthouse pass (SEO/Performance/Accessibility/Best Practices > 95).

## Deployment (once later phases are in)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # select "Next.js" framework support
firebase deploy
```
