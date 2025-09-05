import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Globe, 
  Smartphone, 
  Play,
  Sparkles,
  MapPin,
  Clock,
  Users
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import tajMahalHero from '@/assets/taj-mahal-hero.jpg';

export const MasterpieceHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Statistics animation
  const statsSpring = useSpring({
    from: { number: 0 },
    to: { number: 1 },
    config: { duration: 2000 },
    delay: 1000
  });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-marble">
      {/* Advanced Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <img
            src={tajMahalHero}
            alt="Taj Mahal - India's Crown Jewel Heritage Site"
            className="w-full h-full object-cover scale-110"
          />
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-24 h-24 bg-gradient-saffron rounded-full opacity-20 shadow-heritage animate-glow"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-heritage rounded-full opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Main Headline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge className="bg-gradient-saffron text-white border-0 px-4 py-2 text-sm font-semibold mb-4">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Revolutionary AR Platform
                </Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-6xl md:text-8xl font-bold leading-tight"
              >
                <span className="gradient-text">Heritage</span>
                <br />
                <span className="text-foreground relative">
                  Redefined
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-2 left-0 h-2 bg-gradient-saffron rounded-full"
                  />
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Immerse yourself in India's magnificent cultural legacy through cutting-edge 
                <span className="text-primary font-semibold"> augmented reality</span>. 
                Discover ancient stories, explore photorealistic 3D reconstructions, 
                and preserve history for generations to come.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-saffron hover:shadow-heritage transition-all duration-500 text-lg px-8 py-4 hover-lift group"
              >
                <Camera className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Launch AR Experience
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 text-lg px-8 py-4 hover-lift"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Enhanced Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: 15, suffix: '+', label: 'UNESCO Sites', icon: MapPin, color: 'text-primary' },
                { number: 50, suffix: 'k+', label: 'AR Experiences', icon: Globe, color: 'text-heritage-green' },
                { number: 99.9, suffix: '%', label: 'Uptime SLA', icon: Clock, color: 'text-accent' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-3">
                    <stat.icon className={`h-8 w-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <animated.div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {statsSpring.number.to(n => `${Math.floor(n * stat.number)}${stat.suffix}`)}
                  </animated.div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced AR Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <Card className="glass p-8 shadow-depth hover:shadow-heritage transition-all duration-500 hover-lift">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-heritage rounded-2xl flex items-center justify-center shadow-gold">
                    <Smartphone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Mobile AR Ready</h3>
                    <p className="text-muted-foreground">Optimized for all devices</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-heritage-green/20 text-heritage-green border-heritage-green/30">
                  Live
                </Badge>
              </div>
              
              {/* Features Grid */}
              <div className="space-y-6">
                {[
                  { 
                    label: 'AR Compatibility', 
                    value: '98%', 
                    description: 'Works on most smartphones',
                    color: 'text-primary' 
                  },
                  { 
                    label: 'Loading Speed', 
                    value: '<2s', 
                    description: 'Lightning-fast 3D models',
                    color: 'text-heritage-green' 
                  },
                  { 
                    label: 'Offline Support', 
                    value: 'Full', 
                    description: 'Works without internet',
                    color: 'text-accent' 
                  },
                  { 
                    label: 'Quality', 
                    value: '4K', 
                    description: 'Ultra-high resolution',
                    color: 'text-secondary' 
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-card/50 rounded-2xl hover:bg-card/80 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-1">
                      <span className="font-semibold text-lg">{feature.label}</span>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <div className={`text-2xl font-bold ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="mt-8 pt-6 border-t border-border/50"
              >
                <Button className="w-full bg-gradient-heritage hover:shadow-depth transition-all duration-300 hover-lift">
                  <Users className="mr-2 h-5 w-5" />
                  Join 50k+ Heritage Explorers
                </Button>
              </motion.div>
            </Card>

            {/* Floating Elements around card */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center shadow-gold opacity-80"
            >
              <Sparkles className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};