import { HeroSection } from '@/components/HeroSection';
import { HeritageSitesExplorer } from '@/components/HeritageSitesExplorer';
import { ARPreview } from '@/components/ARPreview';
import { VirtualTours } from '@/components/VirtualTours';
import { FeatureSection } from '@/components/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <HeritageSitesExplorer />
      <ARPreview />
      <VirtualTours />
    </div>
  );
};

export default Index;