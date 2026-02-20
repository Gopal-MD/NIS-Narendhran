import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { ContactQuickForm } from "@/components/sections/ContactQuickForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <ProductCategories />
      <BrandCarousel />
      <WhyChooseUs />
      <CTASection />
      <ContactQuickForm />
    </>
  );
}
