import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Smartphone, Scan, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const ARPreview = () => {
  return (
    <section className="py-24 bg-gradient-marble">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-heritage bg-clip-text text-transparent">
              AR Experience
            </span>{' '}
            Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our augmented reality technology brings ancient monuments 
            to life right in your hands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AR Demo Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[640px] bg-card rounded-[3rem] border-8 border-border shadow-depth">
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-gradient-to-b from-primary/10 via-background to-accent/10 rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-4 text-xs">
                  <span className="font-medium">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-primary rounded-sm"></div>
                    <div className="w-4 h-2 bg-heritage-green rounded-sm"></div>
                    <div className="w-4 h-2 bg-accent rounded-sm"></div>
                  </div>
                </div>

                {/* AR View Simulation */}
                <div className="px-4 pb-4 space-y-4">
                  <Card className="p-4 bg-card/80 backdrop-blur-sm animate-heritage-pulse">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-saffron rounded-full flex items-center justify-center">
                        <Scan className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Scanning...</p>
                        <p className="text-xs text-muted-foreground">Heritage Site Detected</p>
                      </div>
                    </div>
                    <Badge className="bg-heritage-green/20 text-heritage-green border-heritage-green/30">
                      Taj Mahal Identified
                    </Badge>
                  </Card>

                  <Card className="p-4 bg-card/80 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">3D Model Loading</span>
                        <span className="text-xs text-primary">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-saffron h-2 rounded-full w-4/5"></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Optimized for your connection speed
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-2 gap-3">
                    <Card className="p-3 text-center bg-card/80 backdrop-blur-sm">
                      <Camera className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-xs font-medium">Photo Mode</p>
                    </Card>
                    <Card className="p-3 text-center bg-card/80 backdrop-blur-sm">
                      <Zap className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <p className="text-xs font-medium">Quick Tour</p>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Phone Home Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-border rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center shadow-gold"
            >
              <Smartphone className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Experience Heritage Like Never Before
              </h3>
              <p className="text-lg text-muted-foreground">
                Our AR technology works on any modern smartphone, providing 
                immersive experiences even with limited internet connectivity.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Scan,
                  title: 'Instant Recognition',
                  description: 'Point your camera at any heritage site for automatic identification and AR overlay'
                },
                {
                  icon: Download,
                  title: 'Offline Capable',
                  description: 'Download content for offline viewing, perfect for areas with poor connectivity'
                },
                {
                  icon: Zap,
                  title: 'Fast Loading',
                  description: 'Optimized 3D models and progressive loading ensure smooth performance'
                },
                {
                  icon: Camera,
                  title: 'Interactive Tours',
                  description: 'Guided experiences with historical narratives and architectural insights'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Button size="lg" className="bg-gradient-heritage hover:shadow-depth transition-all duration-300">
                <Smartphone className="mr-2 h-5 w-5" />
                Try AR Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};