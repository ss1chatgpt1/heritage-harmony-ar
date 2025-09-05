import { Button } from '@/components/ui/button';
import { Camera, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import tajMahalHero from '@/assets/taj-mahal-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={tajMahalHero}
          alt="Taj Mahal Heritage Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-saffron bg-clip-text text-transparent">
                  Heritage
                </span>
                <br />
                <span className="text-foreground">
                  Reimagined
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience India's magnificent cultural heritage through immersive AR 
                technology. Discover ancient stories, explore 3D reconstructions, 
                and preserve history for future generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-saffron hover:shadow-heritage transition-all duration-300">
                <Camera className="mr-2 h-5 w-5" />
                Start AR Experience
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Globe className="mr-2 h-5 w-5" />
                Explore Virtual Tours
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Heritage Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">AR Experiences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-depth animate-float">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Mobile AR Ready</h3>
                  <p className="text-sm text-muted-foreground">Optimized for low-bandwidth access</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">AR Compatibility</span>
                  <span className="text-primary font-semibold">95%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Loading Speed</span>
                  <span className="text-heritage-green font-semibold">Fast</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Offline Support</span>
                  <span className="text-accent font-semibold">Yes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};