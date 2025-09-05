import { MasterpieceHeroSection } from '@/components/MasterpieceHeroSection';
import { PremiumHeritageSitesExplorer } from '@/components/PremiumHeritageSitesExplorer';
import { EnhancedARExperience } from '@/components/EnhancedARExperience';
import { VirtualTours } from '@/components/VirtualTours';
import { FeatureSection } from '@/components/FeatureSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <MasterpieceHeroSection />
      <FeatureSection />
      <PremiumHeritageSitesExplorer />
      <EnhancedARExperience />
      <VirtualTours />
    </div>
  );
};

export default Index;