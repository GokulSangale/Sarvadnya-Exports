import { z } from "zod";

export const buyerLeadSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  buyerName: z.string().min(2, "Your name is required"),
  country: z.string().min(2, "Please select your country"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  whatsapp: z.string().min(7, "Enter a valid WhatsApp number"),
  quantity: z.string().min(1, "Let us know the quantity you need"),
  frequency: z.string().min(1, "Please select a frequency"),
  destinationPort: z.string().min(2, "Destination port is required"),
  message: z.string().optional(),
});

export type BuyerLeadFormValues = z.infer<typeof buyerLeadSchema>;

export const importCountries = [
  "United States", "United Kingdom", "United Arab Emirates", "Oman", "Saudi Arabia",
  "Qatar", "Singapore", "Malaysia", "Germany", "Netherlands", "France", "Other Europe", "Other",
];

export const frequencyOptions = ["One-time order", "Monthly", "Seasonal", "Ongoing / Contract"];
