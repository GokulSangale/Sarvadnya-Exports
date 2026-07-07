import type { ProcessStage, ExportCountry, Testimonial, GalleryCategory } from "@/types";

export const processStages: ProcessStage[] = [
  { id: "farm-selection", order: 1, title: "Farm Selection", description: "We partner with growers in Maharashtra's pomegranate belt, chosen for soil quality and consistent yields." },
  { id: "harvesting", order: 2, title: "Harvesting", description: "Fruit is hand-picked at optimal ripeness, timed to survive the journey without losing sweetness." },
  { id: "sorting-grading", order: 3, title: "Sorting & Grading", description: "Every fruit is sorted by size, color and brix level to meet export-grade specifications." },
  { id: "packing", order: 4, title: "Packing", description: "Individually cushioned and packed in ventilated export cartons built for long-haul transit." },
  { id: "quality-inspection", order: 5, title: "Quality Inspection", description: "A final inspection checks for firmness, skin quality and residue compliance before release." },
  { id: "cold-storage", order: 6, title: "Cold Storage", description: "Fruit is pre-cooled and held at controlled temperature to lock in freshness pre-shipment." },
  { id: "container-loading", order: 7, title: "Container Loading", description: "Reefer containers are loaded and calibrated to the exact temperature and humidity our fruit needs." },
  { id: "export", order: 8, title: "Export", description: "Shipped with full documentation, ready for customs clearance at your destination port." },
];

// Positions are equirectangular-projected (x = (lon+180)/360*100, y = (90-lat)/180*100),
// nudged apart slightly in the tightly-clustered Gulf region so markers/tooltips don't overlap.
export const exportCountries: ExportCountry[] = [
  { code: "US", name: "United States", x: 22, y: 32 },
  { code: "GB", name: "United Kingdom", x: 47, y: 24 },
  { code: "EU", name: "Europe", x: 53, y: 21 },
  { code: "QA", name: "Qatar", x: 64, y: 34 },
  { code: "AE", name: "UAE", x: 67, y: 38 },
  { code: "SA", name: "Saudi Arabia", x: 61, y: 36 },
  { code: "OM", name: "Oman", x: 70, y: 41 },
  { code: "MY", name: "Malaysia", x: 78, y: 49 },
  { code: "SG", name: "Singapore", x: 80, y: 52 },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Michael Anderson", company: "Fresh Harvest Imports", location: "California", country: "USA", rating: 5, quote: "Sarvadnya Exports consistently delivers outstanding quality pomegranates with excellent packaging. Our customers love the freshness." },
  { id: "t2", name: "Ahmed Al Mansoori", company: "Golden Fruits Trading", location: "Dubai", country: "UAE", rating: 5, quote: "Exceptional quality and timely shipments. Their professionalism has made them our trusted supplier." },
  { id: "t3", name: "Mohammed Al Rashdi", company: "Oman Fresh Produce", location: "Muscat", country: "Oman", rating: 5, quote: "Excellent communication, export documentation, and premium fruit quality. Highly recommended." },
  { id: "t4", name: "James Wilson", company: "London Fresh Imports", location: "London", country: "UK", rating: 5, quote: "We have imported several containers from Sarvadnya Exports. Every shipment met our quality expectations." },
  { id: "t5", name: "Daniel Tan", company: "Asia Fruit Distribution", location: "Singapore", country: "Singapore", rating: 5, quote: "Great shelf life, consistent grading, and reliable export service." },
  { id: "t6", name: "Lim Wei Cheng", company: "Fresh Global Foods", location: "Kuala Lumpur", country: "Malaysia", rating: 5, quote: "Premium Bhagwa pomegranates with beautiful color and taste." },
];

// Each gallery photo is tagged so admins know what to shoot as a real-photo replacement:
// "produce" = the fruit itself, "labor" = a team member at work, "site" = facility/equipment.
export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  tag: "produce" | "labor" | "site";
}

export const galleryPhotos: Record<string, GalleryPhoto[]> = {
  farm: [
    { id: "farm-1", src: "https://images.unsplash.com/photo-1631641482600-b3448b29d17a?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranates ripening on the tree at our partner orchard", tag: "produce" },
    { id: "farm-2", src: "https://images.unsplash.com/photo-1618509538480-dd4462044f1c?q=80&w=1200&auto=format&fit=crop", alt: "Ripe pomegranate fruit on a green orchard tree", tag: "produce" },
    { id: "farm-3", src: "https://images.unsplash.com/photo-1697557846914-16b8288997b3?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranate growing on the branch", tag: "produce" },
    { id: "farm-4", src: "https://images.unsplash.com/photo-1681420545969-88d106d6dfff?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranate hanging from an orchard tree branch", tag: "produce" },
    { id: "farm-5", src: "https://images.unsplash.com/photo-1727433121886-3297d2e2a7f8?q=80&w=1200&auto=format&fit=crop", alt: "Close-up of pomegranate on the tree, ready for harvest", tag: "produce" },
    { id: "farm-6", src: "https://images.unsplash.com/photo-1727433121906-71881965c478?q=80&w=1200&auto=format&fit=crop", alt: "Two pomegranates hanging from the same branch", tag: "produce" },
    { id: "farm-7", src: "https://images.unsplash.com/photo-1626906722170-13ec7bb0b7f3?q=80&w=1200&auto=format&fit=crop", alt: "Orchard team member walking the farm rows", tag: "labor" },
    { id: "farm-8", src: "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop", alt: "Farm worker tending the orchard by hand", tag: "labor" },
  ],
  harvesting: [
    { id: "harvest-1", src: "https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?q=80&w=1200&auto=format&fit=crop", alt: "Harvest team member picking fruit by hand", tag: "labor" },
    { id: "harvest-2", src: "https://images.unsplash.com/photo-1607554338726-f8881a9a7f9e?q=80&w=1200&auto=format&fit=crop", alt: "Harvest crew working across the orchard field", tag: "labor" },
    { id: "harvest-3", src: "https://images.unsplash.com/photo-1611740192940-0e390d409397?q=80&w=1200&auto=format&fit=crop", alt: "Worker carefully handling freshly picked fruit", tag: "labor" },
    { id: "harvest-4", src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop", alt: "Harvest team member during the picking season", tag: "labor" },
    { id: "harvest-5", src: "https://images.unsplash.com/photo-1543747053-002e0d064454?q=80&w=1200&auto=format&fit=crop", alt: "Two harvest workers crossing the orchard together", tag: "labor" },
    { id: "harvest-6", src: "https://images.unsplash.com/photo-1609075916355-cb02b783347e?q=80&w=1200&auto=format&fit=crop", alt: "Harvest team member walking the picking rows", tag: "labor" },
    { id: "harvest-7", src: "https://images.unsplash.com/photo-1631641482600-b3448b29d17a?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranates at peak ripeness, ready to be picked", tag: "produce" },
    { id: "harvest-8", src: "https://images.unsplash.com/photo-1727433121886-3297d2e2a7f8?q=80&w=1200&auto=format&fit=crop", alt: "Hand-picked pomegranate fresh off the branch", tag: "produce" },
  ],
  sorting: [
    { id: "sort-1", src: "https://images.unsplash.com/photo-1626984232613-f20f15589bee?q=80&w=1200&auto=format&fit=crop", alt: "Sorting team member checking fruit crates", tag: "labor" },
    { id: "sort-2", src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop", alt: "Team member handling a crate at the sorting line", tag: "labor" },
    { id: "sort-3", src: "https://images.unsplash.com/photo-1626984232603-cc32cf514a83?q=80&w=1200&auto=format&fit=crop", alt: "Sorting floor staff moving produce cartons", tag: "labor" },
    { id: "sort-4", src: "https://images.unsplash.com/photo-1601767770428-265b2c67780c?q=80&w=1200&auto=format&fit=crop", alt: "Close-up of a pomegranate being checked for quality", tag: "produce" },
    { id: "sort-5", src: "https://images.unsplash.com/photo-1602920806537-38a10c952b69?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranates grouped by size on the sorting table", tag: "produce" },
    { id: "sort-6", src: "https://images.unsplash.com/photo-1530730459653-e0edd4c6072e?q=80&w=1200&auto=format&fit=crop", alt: "Sliced pomegranate used for an internal quality check", tag: "produce" },
    { id: "sort-7", src: "https://images.unsplash.com/photo-1571347586843-69826a524206?q=80&w=1200&auto=format&fit=crop", alt: "Grading sample showing deep red Bhagwa colour", tag: "produce" },
    { id: "sort-8", src: "https://images.unsplash.com/photo-1574709755755-1699988a9c82?q=80&w=1200&auto=format&fit=crop", alt: "Export-grade pomegranate set aside after grading", tag: "produce" },
  ],
  packing: [
    { id: "pack-1", src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop", alt: "Packed export cartons staged on warehouse racking", tag: "site" },
    { id: "pack-2", src: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?q=80&w=1200&auto=format&fit=crop", alt: "Open export cartons ready for fruit packing", tag: "site" },
    { id: "pack-3", src: "https://images.unsplash.com/photo-1573552991725-c7b115591d04?q=80&w=1200&auto=format&fit=crop", alt: "Packing team stacking finished cartons", tag: "labor" },
    { id: "pack-4", src: "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?q=80&w=1200&auto=format&fit=crop", alt: "Packed cartons lined up before dispatch", tag: "site" },
    { id: "pack-5", src: "https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?q=80&w=1200&auto=format&fit=crop", alt: "Sealed export cartons stacked and taped for transit", tag: "site" },
    { id: "pack-6", src: "https://images.unsplash.com/photo-1570086625846-f33f679eb4f5?q=80&w=1200&auto=format&fit=crop", alt: "Packing floor with cartons staged by order", tag: "site" },
    { id: "pack-7", src: "https://images.unsplash.com/photo-1626984232613-f20f15589bee?q=80&w=1200&auto=format&fit=crop", alt: "Packing team member preparing an order for dispatch", tag: "labor" },
    { id: "pack-8", src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop", alt: "Team member carrying a packed carton", tag: "labor" },
  ],
  "cold-storage": [
    { id: "cold-1", src: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop", alt: "Pre-cooling and cold storage warehouse", tag: "site" },
    { id: "cold-2", src: "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?q=80&w=1200&auto=format&fit=crop", alt: "Cartons staged inside the cold storage facility", tag: "site" },
    { id: "cold-3", src: "https://images.unsplash.com/photo-1573552991725-c7b115591d04?q=80&w=1200&auto=format&fit=crop", alt: "Cold storage racking holding export cartons", tag: "site" },
    { id: "cold-4", src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop", alt: "Temperature-controlled storage before dispatch", tag: "site" },
    { id: "cold-5", src: "https://images.unsplash.com/photo-1570086625846-f33f679eb4f5?q=80&w=1200&auto=format&fit=crop", alt: "Cold room stacked and ready for container loading", tag: "site" },
    { id: "cold-6", src: "https://images.unsplash.com/photo-1626984232603-cc32cf514a83?q=80&w=1200&auto=format&fit=crop", alt: "Cold storage team member checking a carton", tag: "labor" },
    { id: "cold-7", src: "https://images.unsplash.com/photo-1602920806537-38a10c952b69?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranates kept fresh in cold storage before export", tag: "produce" },
    { id: "cold-8", src: "https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?q=80&w=1200&auto=format&fit=crop", alt: "Sealed cartons held in cold storage ahead of loading", tag: "site" },
  ],
  "container-loading": [
    { id: "load-1", src: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?q=80&w=1200&auto=format&fit=crop", alt: "Reefer containers stacked at the loading yard", tag: "site" },
    { id: "load-2", src: "https://images.unsplash.com/photo-1601897690942-bcacbad33e55?q=80&w=1200&auto=format&fit=crop", alt: "Intermodal containers ready for loading", tag: "site" },
    { id: "load-3", src: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1200&auto=format&fit=crop", alt: "Export containers staged before departure", tag: "site" },
    { id: "load-4", src: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=1200&auto=format&fit=crop", alt: "Container yard where our shipments are consolidated", tag: "site" },
    { id: "load-5", src: "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1200&auto=format&fit=crop", alt: "Cartons staged for container loading under the open sky", tag: "site" },
    { id: "load-6", src: "https://images.unsplash.com/photo-1617938568125-b55e59775632?q=80&w=1200&auto=format&fit=crop", alt: "Reefer container door sealed after loading", tag: "site" },
    { id: "load-7", src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop", alt: "Loading team member handling the final cartons", tag: "labor" },
    { id: "load-8", src: "https://images.unsplash.com/photo-1626984232613-f20f15589bee?q=80&w=1200&auto=format&fit=crop", alt: "Team member confirming the load count before sealing", tag: "labor" },
  ],
  "export-shipment": [
    { id: "ship-1", src: "https://images.unsplash.com/photo-1655164709639-95035bff7ea8?q=80&w=1200&auto=format&fit=crop", alt: "Cargo vessel carrying our containers to port", tag: "site" },
    { id: "ship-2", src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop", alt: "Container ship departing for its destination port", tag: "site" },
    { id: "ship-3", src: "https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?q=80&w=1200&auto=format&fit=crop", alt: "Export cargo ship underway", tag: "site" },
    { id: "ship-4", src: "https://images.unsplash.com/photo-1601897690942-bcacbad33e55?q=80&w=1200&auto=format&fit=crop", alt: "Containers loaded and ready for export", tag: "site" },
    { id: "ship-5", src: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?q=80&w=1200&auto=format&fit=crop", alt: "Stacked containers at the export terminal", tag: "site" },
    { id: "ship-6", src: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1200&auto=format&fit=crop", alt: "Our shipment ready for customs clearance", tag: "site" },
    { id: "ship-7", src: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=1200&auto=format&fit=crop", alt: "Fresh pomegranates, the cargo behind every shipment", tag: "produce" },
    { id: "ship-8", src: "https://images.unsplash.com/photo-1654648742474-7f22ca616d0b?q=80&w=1200&auto=format&fit=crop", alt: "Pomegranate seeds glistening, the reason for the journey", tag: "produce" },
  ],
};

export const galleryCategories: GalleryCategory[] = [
  { id: "farm", title: "Farm", coverImage: galleryPhotos.farm[0].src },
  { id: "harvesting", title: "Harvesting", coverImage: galleryPhotos.harvesting[0].src },
  { id: "sorting", title: "Sorting & Grading", coverImage: galleryPhotos.sorting[0].src },
  { id: "packing", title: "Packing", coverImage: galleryPhotos.packing[0].src },
  { id: "cold-storage", title: "Cold Storage", coverImage: galleryPhotos["cold-storage"][0].src },
  { id: "container-loading", title: "Container Loading", coverImage: galleryPhotos["container-loading"][0].src },
  { id: "export-shipment", title: "Export Shipment", coverImage: galleryPhotos["export-shipment"][0].src },
];

export const stats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Countries Served", value: 9, suffix: "" },
  { label: "Containers Exported", value: 480, suffix: "+" },
  { label: "Happy Buyers", value: 150, suffix: "+" },
];

export const whyChooseUs = [
  { title: "Direct from Organic Farms", description: "No middlemen — fruit sourced straight from our certified organic partner orchards." },
  { title: "Export Quality Fruits", description: "Every batch graded to meet international import standards." },
  { title: "International Packaging", description: "Cartons engineered for cold-chain, long-transit durability." },
  { title: "Fast Container Shipment", description: "Streamlined logistics from cold storage to port, on schedule." },
  { title: "Competitive Pricing", description: "Direct sourcing keeps our pricing sharp without cutting quality." },
  { title: "Freshness Guaranteed", description: "Pre-cooling and reefer transit protect taste from farm to door." },
];

// Verified pomegranate-specific Unsplash photos — swap with real farm photography via
// Firebase Storage later (see galleryPhotos above for the full per-stage sets).
export const placeholderImages = {
  hero: "https://images.unsplash.com/photo-1631641482600-b3448b29d17a?q=80&w=2400&auto=format&fit=crop",
  farm: galleryPhotos.farm[0].src,
  harvesting: galleryPhotos.harvesting[0].src,
  sorting: galleryPhotos.sorting[0].src,
  grading: galleryPhotos.sorting[1].src,
  packing: galleryPhotos.packing[0].src,
  containerLoading: galleryPhotos["container-loading"][0].src,
  coldStorage: galleryPhotos["cold-storage"][0].src,
  freshFruit: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=1200&auto=format&fit=crop",
};

export const certifications = [
  { code: "APEDA", name: "APEDA Registered", description: "Recognised by India's Agricultural & Processed Food Products Export Development Authority." },
  { code: "FSSAI", name: "FSSAI Licensed", description: "Licensed under India's Food Safety and Standards Authority for food-grade handling." },
  { code: "GLOBALGAP", name: "Global GAP Certified", description: "Meets international Good Agricultural Practice standards for farm-to-fork traceability." },
  { code: "EXPORT", name: "Export Quality Assured", description: "Every batch inspected against destination-market residue and quality norms." },
];

export const productSpecs = [
  { label: "Size", value: "70mm – 90mm diameter (customisable by order)" },
  { label: "Weight", value: "250g – 450g per fruit" },
  { label: "Packing", value: "4.5kg / 5kg telescopic export cartons, cushioned trays" },
  { label: "Shelf Life", value: "35–45 days under cold chain (2–7°C, 90–95% humidity)" },
  { label: "Container Capacity", value: "~20,000–22,000 kg per 20ft reefer container" },
  { label: "Available Seasons", value: "August – February (Ambe Bahar), plus Hasta Bahar crop" },
];

export const productHighlights = [
  { title: "Deep Red Arils", description: "Bhagwa's signature deep-red, soft-seeded arils prized in every export market we serve." },
  { title: "Naturally Sweet", description: "Consistently high brix levels for a sweet, low-acid eating experience." },
  { title: "High Juice Content", description: "Excellent yield for both fresh-eating and juicing applications." },
  { title: "Export Grade", description: "Hand-graded for size, colour and skin quality before it ever reaches a carton." },
  { title: "Long Shelf Life", description: "Cold-chain handling from harvest through arrival preserves freshness in transit." },
];
