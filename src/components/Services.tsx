import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Palette, Brush, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description: "Transform your indoor spaces with premium paints and expert color consultation.",
      features: ["Wall painting", "Ceiling painting", "Trim & molding", "Color consultation"]
    },
    {
      icon: Building,
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with weather-resistant finishes.",
      features: ["House painting", "Deck staining", "Fence painting", "Weather protection"]
    },
    {
      icon: Palette,
      title: "Commercial Painting",
      description: "Professional painting services for offices, retail spaces, and commercial buildings.",
      features: ["Office spaces", "Retail stores", "Warehouses", "Quick turnaround"]
    },
    {
      icon: Shield,
      title: "Surface Preparation",
      description: "Thorough prep work ensures lasting, beautiful results for every project.",
      features: ["Pressure washing", "Sanding & scraping", "Priming", "Repair work"]
    },
    {
      icon: Clock,
      title: "Maintenance Services",
      description: "Keep your paint looking fresh with our ongoing maintenance programs.",
      features: ["Touch-up services", "Annual inspections", "Preventive maintenance", "Color matching"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From interior walls to exterior buildings, we provide comprehensive painting solutions 
            with attention to detail and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Request Service Quote
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;