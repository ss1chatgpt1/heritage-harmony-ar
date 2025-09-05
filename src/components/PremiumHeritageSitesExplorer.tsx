import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera,
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Globe,
  ArrowRight,
  Heart,
  Share2,
  Bookmark,
  PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import tajMahal from '@/assets/taj-mahal-hero.jpg';
import redFort from '@/assets/red-fort.jpg';
import hampiTemple from '@/assets/hampi-temple.jpg';
import khajuraho from '@/assets/khajuraho.jpg';
import ajantaCaves from '@/assets/ajanta-caves.jpg';

const heritageSites = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    period: '1632-1653 CE',
    category: 'Mughal Architecture',
    image: tajMahal,
    rating: 4.9,
    visitors: '8M+',
    description: 'An ivory-white marble mausoleum, considered the pinnacle of Mughal architecture and a symbol of eternal love.',
    arFeatures: ['360° Interior Tour', '3D Restoration', 'Historical Timeline', 'Audio Guide'],
    status: 'Available',
    duration: '45 min'
  },
  {
    id: 2,
    name: 'Red Fort',
    location: 'Delhi',
    period: '1638-1648 CE',
    category: 'Mughal Fortress',
    image: redFort,
    rating: 4.7,
    visitors: '5M+',
    description: 'A historic fortified palace that served as the main residence of the Mughal emperors for 200 years.',
    arFeatures: ['Royal Chambers', 'Darbar Hall 3D', 'Battle Simulations', 'Emperor Stories'],
    status: 'Available',
    duration: '60 min'
  },
  {
    id: 3,
    name: 'Hampi Temple Complex',
    location: 'Karnataka',
    period: '1336-1565 CE',
    category: 'Vijayanagara Empire',
    image: hampiTemple,
    rating: 4.8,
    visitors: '2M+',
    description: 'Ruins of the magnificent Vijayanagara Empire capital, showcasing incredible Dravidian architecture.',
    arFeatures: ['Temple Reconstruction', 'Ancient Markets', 'Royal Complex', 'Stone Chariot'],
    status: 'Coming Soon',
    duration: '75 min'
  },
  {
    id: 4,
    name: 'Khajuraho Temples',
    location: 'Madhya Pradesh',
    period: '950-1050 CE',
    category: 'Medieval Architecture',
    image: khajuraho,
    rating: 4.6,
    visitors: '1.5M+',
    description: 'Magnificent temples famous for their intricate sculptures and architectural brilliance.',
    arFeatures: ['Sculpture Details', 'Temple Layout', 'Artistic Analysis', 'Cultural Context'],
    status: 'Available',
    duration: '50 min'
  },
  {
    id: 5,
    name: 'Ajanta Caves',
    location: 'Maharashtra',
    period: '2nd Century BCE',
    category: 'Buddhist Art',
    image: ajantaCaves,
    rating: 4.9,
    visitors: '800K+',
    description: 'Ancient Buddhist cave monuments featuring extraordinary paintings and sculptures.',
    arFeatures: ['Cave Exploration', 'Painting Restoration', 'Buddhist Stories', 'Archaeological Insights'],
    status: 'Available',
    duration: '65 min'
  }
];

export const PremiumHeritageSitesExplorer = () => {
  const [selectedSite, setSelectedSite] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'coming-soon'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredSites = heritageSites.filter(site => {
    if (filter === 'all') return true;
    if (filter === 'available') return site.status === 'Available';
    if (filter === 'coming-soon') return site.status === 'Coming Soon';
    return true;
  });

  return (
    <section ref={ref} className="py-32 bg-gradient-marble relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-8 w-64 h-64 bg-gradient-saffron rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-32 right-8 w-48 h-48 bg-gradient-heritage rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="bg-gradient-heritage text-white border-0 px-6 py-3 text-lg font-semibold mb-6">
            <Globe className="mr-2 h-5 w-5" />
            World Heritage Sites
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">Explore</span>
            <br />
            <span className="text-foreground">India's Treasures</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Journey through centuries of architectural marvels and cultural heritage 
            with immersive AR experiences that bring history to life.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-16">
            {[
              { key: 'all', label: 'All Sites', count: heritageSites.length },
              { key: 'available', label: 'Available Now', count: heritageSites.filter(s => s.status === 'Available').length },
              { key: 'coming-soon', label: 'Coming Soon', count: heritageSites.filter(s => s.status === 'Coming Soon').length }
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "default" : "outline"}
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-3 text-lg transition-all duration-300 ${
                  filter === filterOption.key 
                    ? 'bg-gradient-saffron hover:shadow-heritage' 
                    : 'hover:bg-primary/10 hover:border-primary/60'
                }`}
              >
                {filterOption.label}
                <Badge variant="secondary" className="ml-3">
                  {filterOption.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Sites Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedSite(selectedSite === site.id ? null : site.id)}
            >
              <Card className="overflow-hidden hover:shadow-heritage transition-all duration-500 hover-lift glass">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={site.image}
                    alt={`${site.name} - Heritage Site`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      site.status === 'Available' 
                        ? 'bg-heritage-green/90 text-white' 
                        : 'bg-accent/90 text-white'
                    }`}
                  >
                    {site.status}
                  </Badge>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <PlayCircle className="h-6 w-6 mr-2" />
                      Start AR Tour
                    </Button>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{site.name}</h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {site.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current text-accent" />
                        {site.rating}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category and Period */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {site.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {site.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {site.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{site.visitors}</div>
                      <div className="text-xs text-muted-foreground">Annual Visitors</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-accent" />
                      <div className="font-semibold">{site.duration}</div>
                      <div className="text-xs text-muted-foreground">AR Experience</div>
                    </div>
                  </div>

                  {/* AR Features */}
                  {selectedSite === site.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <h4 className="font-semibold mb-3 text-primary">AR Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {site.arFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-gradient-saffron rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      site.status === 'Available'
                        ? 'bg-gradient-heritage hover:shadow-depth hover-lift'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                    disabled={site.status !== 'Available'}
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    {site.status === 'Available' ? 'Launch AR Experience' : 'Coming Soon'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-muted-foreground mb-8">
            More heritage sites being added every month
          </p>
          <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60 px-8 py-4 text-lg hover-lift">
            <Bookmark className="mr-2 h-5 w-5" />
            Subscribe for Updates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};