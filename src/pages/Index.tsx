import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <FeatureGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
