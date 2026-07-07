import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExportProcess from "@/components/home/ExportProcess";
import CountriesMap from "@/components/home/CountriesMap";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CTASection from "@/components/home/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <SectionDivider className="text-forest" />
      <ExportProcess />
      <CountriesMap />
      <SectionDivider className="text-cream -scale-y-100" />
      <GalleryPreview />
      <SectionDivider className="text-blush" />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
