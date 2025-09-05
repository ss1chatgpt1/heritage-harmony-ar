import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Star, Globe, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const virtualTours = [
  {
    id: 1,
    title: 'Taj Mahal: Love in Marble',
    duration: '45 min',
    language: 'Hindi, English',
    rating: 4.9,
    participants: '12.5k',
    description: 'Journey through the romantic history of the Taj Mahal, exploring its architectural marvels and the love story behind its creation.',
    highlights: ['Architectural Details', 'Historical Context', 'Cultural Significance'],
    difficulty: 'Beginner',
    category: 'Mughal Architecture'
  },
  {
    id: 2,
    title: 'Red Fort: Seat of Mughal Power',
    duration: '35 min',
    language: 'Hindi, English, Urdu',
    rating: 4.8,
    participants: '8.2k',
    description: 'Discover the political heart of the Mughal empire, from royal ceremonies to the independence movement.',
    highlights: ['Royal Quarters', 'Durbar Halls', 'Independence History'],
    difficulty: 'Intermediate',
    category: 'Political History'
  },
  {
    id: 3,
    title: 'Hampi: Lost Empire of Vijayanagara',
    duration: '60 min',
    language: 'Hindi, English, Kannada',
    rating: 4.7,
    participants: '6.8k',
    description: 'Explore the magnificent ruins of one of the largest cities in the world during the 15th century.',
    highlights: ['Temple Architecture', 'Market Streets', 'Royal Enclosure'],
    difficulty: 'Advanced',
    category: 'Ancient Civilizations'
  }
];

export const VirtualTours = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Immersive{' '}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Virtual Tours
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join expert guides on carefully crafted journeys through India's 
            most significant cultural landmarks, accessible from anywhere in the world.
          </p>
        </motion.div>

        {/* Tour Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Virtual Tours', value: '15+', icon: Globe },
            { label: 'Languages', value: '8', icon: Headphones },
            { label: 'Participants', value: '50k+', icon: Users },
            { label: 'Avg Rating', value: '4.8★', icon: Star }
          ].map((stat, index) => (
            <Card key={stat.label} className="text-center p-6 hover:shadow-heritage transition-all duration-300">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Featured Tours */}
        <div className="space-y-8">
          {virtualTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-depth transition-all duration-500 group">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Tour Info */}
                  <div className="lg:col-span-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-primary/30">
                              {tour.category}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`border-heritage-green/30 ${
                                tour.difficulty === 'Beginner' 
                                  ? 'text-heritage-green' 
                                  : tour.difficulty === 'Advanced' 
                                  ? 'text-accent' 
                                  : 'text-primary'
                              }`}
                            >
                              {tour.difficulty}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {tour.title}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-sm">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-semibold">{tour.rating}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tour.participants} joined
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {tour.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Tour Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4" />
                          <span>{tour.language}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{tour.participants} participants</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Tour Action */}
                  <div className="bg-gradient-marble p-8 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Start Virtual Tour</h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      Begin your immersive journey through history
                    </p>
                    <Button className="w-full bg-gradient-heritage hover:shadow-heritage transition-all duration-300">
                      <Play className="mr-2 h-4 w-4" />
                      Begin Tour
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-marble p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of cultural enthusiasts discovering India's heritage 
              through our immersive virtual experiences.
            </p>
            <Button size="lg" className="bg-gradient-saffron hover:shadow-gold transition-all duration-300">
              <Globe className="mr-2 h-5 w-5" />
              Browse All Tours
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};