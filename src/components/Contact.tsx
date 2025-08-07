import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with us for your painting needs.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-subtle rounded-lg">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium text-foreground text-lg">(647) 571-0231</p>
                  <p className="text-sm text-muted-foreground">Call or text us</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gradient-subtle rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium text-foreground text-lg">mohammedaalzeyad@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Send us an email</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;