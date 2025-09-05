import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Smartphone, 
  Scan, 
  Zap, 
  Download,
  Play,
  Pause,
  RotateCcw,
  Share2,
  Maximize,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export const EnhancedARExperience = () => {
  const [arMode, setArMode] = useState<'scanning' | 'loading' | 'active'>('scanning');
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Simulate AR loading process
  useEffect(() => {
    if (arMode === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setArMode('active');
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [arMode]);

  const progressSpring = useSpring({
    width: `${progress}%`,
    config: { tension: 280, friction: 60 }
  });

  const phoneSpring = useSpring({
    transform: arMode === 'active' ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 30 }
  });

  return (
    <section className="py-32 bg-gradient-marble relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-saffron rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-heritage rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-heritage-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">Immersive</span>
            <br />
            <span className="text-foreground">AR Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step into history with our cutting-edge augmented reality technology. 
            Watch ancient monuments come alive with interactive 3D reconstructions and rich historical narratives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced AR Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <animated.div style={phoneSpring} className="relative mx-auto w-80 h-[680px]">
              {/* Phone Frame with improved shadows */}
              <div className="relative w-full h-full bg-card rounded-[3.5rem] border-8 border-border shadow-depth hover-glow">
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-to-b from-background via-card to-muted rounded-[2.5rem] overflow-hidden">
                  {/* Dynamic Status Bar */}
                  <div className="flex justify-between items-center p-4 text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs px-2 py-0.5 border-primary/30">
                        AR Mode
                      </Badge>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-heritage-green rounded-sm"></div>
                      <div className="w-4 h-2 bg-primary rounded-sm"></div>
                      <div className="w-4 h-2 bg-accent rounded-sm"></div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 space-y-4">
                    <AnimatePresence mode="wait">
                      {arMode === 'scanning' && (
                        <motion.div
                          key="scanning"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="space-y-4"
                        >
                          <Card className="p-4 glass hover-lift">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-saffron rounded-full flex items-center justify-center animate-heritage-pulse">
                                <Scan className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm">Scanning Environment</p>
                                <p className="text-xs text-muted-foreground">Point at heritage site</p>
                              </div>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <div className="bg-gradient-saffron h-1.5 rounded-full animate-shimmer"></div>
                            </div>
                          </Card>

                          <Button 
                            onClick={() => setArMode('loading')}
                            className="w-full bg-gradient-heritage hover:shadow-depth transition-all duration-300"
                          >
                            <Camera className="mr-2 h-4 w-4" />
                            Start AR Scan
                          </Button>
                        </motion.div>
                      )}

                      {arMode === 'loading' && (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="space-y-4"
                        >
                          <Card className="p-4 glass animate-glow">
                            <div className="text-center mb-4">
                              <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                                Taj Mahal Detected
                              </Badge>
                              <p className="text-sm font-medium">Loading 3D Model</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Progress</span>
                                <span>{progress}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <animated.div 
                                  style={progressSpring}
                                  className="bg-gradient-saffron h-2 rounded-full"
                                />
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      )}

                      {arMode === 'active' && (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="space-y-3"
                        >
                          <Card className="p-3 glass animate-float">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="text-xs">
                                AR Active
                              </Badge>
                              <div className="flex space-x-1">
                                <Button 
                                  size="sm" 
                                  variant="ghost" 
                                  className="h-6 w-6 p-0"
                                  onClick={() => setIsPlaying(!isPlaying)}
                                >
                                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Share2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Explore the architectural marvel built in 1648
                            </p>
                          </Card>

                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { icon: Camera, label: '360° View' },
                              { icon: RotateCcw, label: 'Reset' },
                              { icon: Maximize, label: 'Fullscreen' },
                            ].map((item, index) => (
                              <Card key={index} className="p-2 text-center glass hover-lift cursor-pointer">
                                <item.icon className="h-4 w-4 mx-auto mb-1 text-primary" />
                                <p className="text-xs font-medium">{item.label}</p>
                              </Card>
                            ))}
                          </div>

                          <Card className="p-3 glass">
                            <div className="flex items-center space-x-2 mb-2">
                              <Settings className="h-4 w-4 text-muted-foreground" />
                              <span className="text-xs font-medium">AR Settings</span>
                            </div>
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <div className="flex justify-between">
                                <span>Tracking Quality</span>
                                <span className="text-heritage-green">Excellent</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Lighting</span>
                                <span className="text-primary">Optimal</span>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-border rounded-full"></div>
              </div>

              {/* Floating AR Indicators */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-heritage rounded-full flex items-center justify-center shadow-heritage"
              >
                <Smartphone className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [5, -5, 5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center shadow-gold"
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
            </animated.div>
          </motion.div>

          {/* Enhanced Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-4xl font-bold mb-6 gradient-text">
                Revolutionary AR Technology
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience heritage sites like never before with our state-of-the-art 
                augmented reality platform, designed to work flawlessly even in remote locations.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Scan,
                  title: 'Instant Site Recognition',
                  description: 'Advanced computer vision instantly identifies heritage monuments and overlays relevant AR content',
                  gradient: 'bg-gradient-saffron'
                },
                {
                  icon: Download,
                  title: 'Offline-First Design',
                  description: 'Pre-download content packs for seamless experiences without internet connectivity',
                  gradient: 'bg-gradient-heritage'
                },
                {
                  icon: Zap,
                  title: 'Lightning Fast Performance',
                  description: 'Optimized 3D models and progressive loading ensure smooth 60fps AR experiences',
                  gradient: 'bg-gradient-sunset'
                },
                {
                  icon: Camera,
                  title: 'Interactive Historical Tours',
                  description: 'Immersive guided experiences with expert narration and architectural insights',
                  gradient: 'bg-gradient-marble'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex space-x-6 group hover-lift"
                >
                  <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-depth group-hover:shadow-heritage transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <Button size="lg" className="bg-gradient-heritage hover:shadow-depth transition-all duration-300 hover-lift">
                <Smartphone className="mr-3 h-6 w-6" />
                Experience AR Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};