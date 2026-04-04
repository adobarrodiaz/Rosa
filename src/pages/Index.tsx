import { useReveal } from "@/hooks/useReveal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import PhilosophySection from "@/components/PhilosophySection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <PricingSection />
      <PhilosophySection />
      <ReviewsSection />
      <CtaSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
