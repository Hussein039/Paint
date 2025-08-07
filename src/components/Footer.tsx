import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-gray text-warm-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AZ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Aal-Zeyad Painting Services</h3>
                <p className="text-warm-white/80">Professional Service</p>
              </div>
            </div>
            <p className="text-warm-white/90 mb-6 max-w-md">
              Professional painting services for residential and commercial properties. 
              Quality craftsmanship, premium materials, and exceptional customer service.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-warm-white/10 rounded-lg flex items-center justify-center hover:bg-warm-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-warm-white/10 rounded-lg flex items-center justify-center hover:bg-warm-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-warm-white/10 rounded-lg flex items-center justify-center hover:bg-warm-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-warm-white/80">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Commercial Painting</li>
              <li>Specialty Finishes</li>
              <li>Color Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-warm-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warm-accent" />
                <span>(647) 571-0231</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warm-accent" />
                <span>mohammedaalzeyad@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-warm-accent" />
                <span>Greater Toronto Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;