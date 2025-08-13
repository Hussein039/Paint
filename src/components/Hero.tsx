import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio"); // lowercase id
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gray-800/70"></div> {/* overlay */}
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Uncomment if you want the stars
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
          </div>
          */}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              {" "}
              Space
            </span>
            <br />
            With Expert Painting
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Professional interior and exterior painting services for homes and
            buildings. Quality craftsmanship, premium materials, and
            satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Get Free Estimate
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-6 border border-white text-white hover:bg-white hover:text-black"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span>Licensed</span>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span>Satisfaction Guaranteed</span>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span>Professional Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
