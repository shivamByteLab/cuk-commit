import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ValentineVibeSection from "@/components/ValentineVibeSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ValentineVibeSection />
      <AppPreviewSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
