# Sarvadnya Exports — Website

Premium Indian pomegranate export company website. **This phase adds the full public
site — Home, About, Products, Gallery, and Contact (with the buyer lead form wired to
Firestore + WhatsApp) — plus the Firestore rules and Cloud Function behind it.** The
Admin Dashboard is the one remaining phase (see Roadmap).

## Design system

- **Palette:** cream `#FBF7F0` (base), blush `#F4E1D8` (warm secondary panel — replaces
  the earlier grayish tone), pomegranate `#7A1F2B` (primary), ruby `#C8102E` (CTA
  accent), forest `#1F3D2B` (secondary/trust), gold `#B8974E` (premium accent).
- **Type:** Fraunces (display headlines), Inter (body/UI), IBM Plex Mono (stats, labels,
  data — gives the brand an "export documentation" feel).
- **Signature motif:** the scalloped "crown divider" (`SectionDivider.tsx`) between
  sections, echoing a pomegranate's calyx — used instead of a plain straight border.
- Images are curated, pomegranate-specific Unsplash placeholders tagged by type —
  `produce`, `labor` (our team at work), or `site` (facility/equipment) — in
  `src/lib/data.ts → galleryPhotos`. Swap for real photography via Firebase Storage
  before launch; the tags make it easy to see what still needs a real-photo replacement.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Firebase config
npm run dev
```

Visit `http://localhost:3000`.

## What's included so far

**Public site**
- Next.js 15 App Router + TypeScript + Tailwind scaffold, Firebase client SDK wired up
- Header, footer, floating WhatsApp button
- **Home** — Hero (parallax + animated stats, organic-focused tagline), Why Choose Us,
  animated Export Process timeline, interactive Countries map (self-contained SVG
  continents — no external map dependency to break), Gallery preview, Testimonials, CTA
- **About** — story, mission/vision/values, farming/food-safety/logistics/team pillars
- **Products** — Bhagwa variety details, highlights, specification table, certifications
  (APEDA, FSSAI, Global GAP, Export Quality)
- **Gallery** — 8 categories × 8 photos (Farm, Harvesting, Sorting & Grading, Packing,
  Cold Storage, Container Loading, Export Shipment), CSS-masonry layout, category
  filter, lazy-loaded images, click-through lightbox with keyboard-friendly controls.
  Photos are tagged so labour/team shots are marked "Our Team" — real crew photography
  should replace these before launch.
- **Contact** — company details + buyer inquiry form (React Hook Form + Zod), saves to
  Firestore `buyer_leads`, opens a prefilled WhatsApp chat as an immediate fallback
- SEO: metadata, Open Graph/Twitter tags, LocalBusiness JSON-LD, `robots.ts`, `sitemap.ts`

**Backend / Firebase**
- `firestore.rules` — public `create` on `buyer_leads` only; read/update/delete
  restricted to admins; `gallery`/`testimonials`/`products`/`settings` are public-read,
  admin-write
- `functions/` — a Cloud Function (`onLeadCreated`) that fires on every new buyer lead
  and sends a WhatsApp Cloud API notification to the business number. If the API isn't
  configured yet, it logs a warning and relies on the client-side `wa.me` fallback that's
  already active on the Contact page — so lead capture keeps working either way
- `firebase.json` / `firestore.indexes.json` — ready for `firebase deploy`

## Roadmap (next phase)

1. **Admin portal** — Google Sign-In restricted to `ADMIN_ALLOWED_EMAILS`, dashboard
   cards (total/today/unread leads, countries), lead table with search/filter/
   pagination, lead detail modal (mark read, delete, open WhatsApp, send email),
   analytics charts (top countries, monthly leads, quantity requested).
2. **Polish** — PDF company profile download, dark mode, i18n readiness, EmailJS email
   notification, Lighthouse pass (SEO/Performance/Accessibility/Best Practices > 95).

## Configuring the WhatsApp Cloud API (optional but recommended)

```bash
cd functions
firebase functions:config:set \
  whatsapp.token="YOUR_CLOUD_API_TOKEN" \
  whatsapp.phone_number_id="YOUR_PHONE_NUMBER_ID" \
  whatsapp.business_number="91XXXXXXXXXX"
npm run deploy
```

## Deployment

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # select "Next.js" framework support if prompted
firebase deploy
```
