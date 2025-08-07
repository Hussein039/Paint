import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AZ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Aal-Zeyad Painting Services</h1>
              <p className="text-sm text-muted-foreground">Professional Service</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>(647) 571-0231</span>
            </div>
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;