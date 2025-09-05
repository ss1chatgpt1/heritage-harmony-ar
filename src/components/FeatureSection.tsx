import { Card, CardContent } from '@/components/ui/card';
import { Eye, Camera, Wifi, Globe, Book, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Camera,
    title: 'AR Visualization',
    description: 'Immersive augmented reality experiences that bring ancient architecture to life',
    color: 'text-primary'
  },
  {
    icon: Wifi,
    title: 'Low-Bandwidth Optimized',
    description: 'Designed for rural connectivity with progressive loading and offline support',
    color: 'text-heritage-green'
  },
  {
    icon: Globe,
    title: 'Virtual Tours',
    description: 'Explore heritage sites remotely with guided historical narratives',
    color: 'text-accent'
  },
  {
    icon: Book,
    title: 'Rich Historical Content',
    description: 'Authentic stories and detailed information about each heritage site',
    color: 'text-secondary'
  },
  {
    icon: Eye,
    title: '3D Reconstructions',
    description: 'Detailed 3D models showcasing sites in their original glory',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Cultural Preservation',
    description: 'Digital preservation ensuring heritage survives for future generations',
    color: 'text-heritage-green'
  }
];

export const FeatureSection = () => {
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
              Preserving Culture
            </span>{' '}
            Through Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AR platform combines cutting-edge technology with deep respect for 
            India's cultural heritage, making historical sites accessible to everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-heritage transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};