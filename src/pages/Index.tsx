import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntegratedCareSection from "@/components/IntegratedCareSection";
import ServicesSection from "@/components/ServicesSection";
import TelehealthSection from "@/components/TelehealthSection";
import FounderSection from "@/components/FounderSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntegratedCareSection />
      <ServicesSection />
      <TelehealthSection />
      <FounderSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
