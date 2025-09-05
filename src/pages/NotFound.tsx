import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Globe } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-marble">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-heritage bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Heritage Site Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Looks like this heritage site hasn't been discovered yet! 
            Let's get you back to exploring India's magnificent cultural treasures.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-saffron hover:shadow-heritage transition-all duration-300">
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            <Search className="mr-2 h-5 w-5" />
            Explore Sites
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
          <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Discover Heritage</h3>
          <p className="text-sm text-muted-foreground">
            Join thousands exploring India's cultural treasures through AR experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
