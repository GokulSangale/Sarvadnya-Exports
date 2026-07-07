export interface ProcessStage {
  id: string;
  order: number;
  title: string;
  description: string;
}

export interface ExportCountry {
  code: string;
  name: string;
  city?: string;
  x: number; // position on the stylised map, percentage
  y: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  country: string;
  rating: number;
  quote: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  coverImage: string;
}

export interface BuyerLead {
  companyName: string;
  buyerName: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
  quantity: string;
  frequency: string;
  destinationPort: string;
  message?: string;
  createdAt: string;
  status: "Unread" | "Read";
}
