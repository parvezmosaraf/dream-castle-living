import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AmenitiesPreview from '@/components/AmenitiesPreview';
import PricingSection from '@/components/PricingSection';
import GalleryPreview from '@/components/GalleryPreview';
import LocationPreview from '@/components/LocationPreview';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AmenitiesPreview />
        <PricingSection />
        <GalleryPreview />
        <LocationPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
