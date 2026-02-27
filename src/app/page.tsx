import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import WorkReliabilitySection from "@/components/WorkReliabilitySection";
import WinterdienstSection from "@/components/WinterdienstSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import NotdienstBanner from "@/components/NotdienstBanner";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceGrid />
      <WorkReliabilitySection />
      <WinterdienstSection />
      <NotdienstBanner />
      <ReviewsCarousel />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
