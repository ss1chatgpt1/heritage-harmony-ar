import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import tajMahal from "@/assets/taj-mahal-hero.jpg";
import redFort from "@/assets/red-fort.jpg";
import hampiTemple from "@/assets/hampi-temple.jpg";
import khajuraho from "@/assets/khajuraho.jpg";
import ajantaCaves from "@/assets/ajanta-caves.jpg";

const heritageSites = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    period: "1632-1653 CE",
    image: tajMahal,
    description: "UNESCO World Heritage ivory-white marble mausoleum",
    arFeatures: ["3D Interior Tour", "Historical Timeline", "Architectural Details"],
    visitors: "6-8 million/year",
    featured: true,
  },
  {
    id: 2,
    name: "Red Fort",
    location: "Delhi",
    period: "1638-1648 CE",
    image: redFort,
    description: "Mughal emperor residence and UNESCO World Heritage Site",
    arFeatures: ["Palace Reconstruction", "Royal Court Simulation", "Audio Guide"],
    visitors: "2 million/year",
    featured: false,
  },
  {
    id: 3,
    name: "Hampi Temple Complex",
    location: "Karnataka",
    period: "1336-1646 CE",
    image: hampiTemple,
    description: "Vijayanagara Empire ruins with stunning temple architecture",
    arFeatures: ["Temple Restoration View", "Cultural Performances", "Stone Carvings"],
    visitors: "500k/year",
    featured: false,
  },
  {
    id: 4,
    name: "Khajuraho Temples",
    location: "Madhya Pradesh",
    period: "950-1050 CE",
    image: khajuraho,
    description: "Medieval Hindu and Jain temples with intricate sculptures",
    arFeatures: ["Sculpture Analysis", "Temple Stories", "Art History"],
    visitors: "300k/year",
    featured: false,
  },
  {
    id: 5,
    name: "Ajanta Ellora Caves",
    location: "Maharashtra",
    period: "2nd century BCE",
    image: ajantaCaves,
    description: "Rock-cut Buddhist cave monuments and paintings",
    arFeatures: ["Cave Paintings", "Buddhist Heritage", "Ancient Art"],
    visitors: "600k/year",
    featured: false,
  },
];

export const HeritageSitesExplorer = () => {
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
            Explore{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Heritage Sites
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover India's most magnificent cultural treasures through immersive
            AR experiences and detailed virtual reconstructions.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden hover:shadow-depth transition-all duration-500 group">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={heritageSites[0].image}
                    alt={heritageSites[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-gradient-saffron text-white">
                    Featured Site
                  </Badge>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-3xl mb-2">{heritageSites[0].name}</CardTitle>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        {heritageSites[0].location}
                        <Clock className="h-4 w-4 ml-6 mr-2" />
                        {heritageSites[0].period}
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {heritageSites[0].description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">AR Features Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {heritageSites[0].arFeatures.map((feature) => (
                          <Badge key={feature} variant="outline" className="border-primary/30">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {heritageSites[0].visitors} annual visitors
                      </div>
                      <Button className="bg-gradient-saffron hover:shadow-gold transition-all duration-300">
                        <Camera className="h-4 w-4 mr-2" />
                        Experience in AR
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Other Sites Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heritageSites.slice(1).map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-heritage transition-all duration-300 group cursor-pointer h-full">
                  <div className="relative h-48">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-white font-semibold text-lg">{site.name}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {site.location}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {site.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Camera className="h-3 w-3 mr-2" />
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
