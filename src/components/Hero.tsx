import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-warm-gray/70"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-warm-accent text-warm-accent" />
              ))}
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6 leading-tight">
            Transform Your
            <span className="text-transparent bg-gradient-accent bg-clip-text"> Space</span>
            <br />
            With Expert Painting
          </h1>
          
          <p className="text-xl text-warm-white/90 mb-8 max-w-2xl leading-relaxed">
            Professional interior and exterior painting services for homes and buildings. 
            Quality craftsmanship, premium materials, and satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Get Free Estimate
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-warm-white">
              <CheckCircle className="w-6 h-6 text-warm-accent flex-shrink-0" />
              <span>Licensed</span>
            </div>
            
            <div className="flex items-center space-x-3 text-warm-white">
              <CheckCircle className="w-6 h-6 text-warm-accent flex-shrink-0" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;