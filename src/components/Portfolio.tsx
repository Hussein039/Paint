import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  const projects = [
    {
      image: "/lovable-uploads/80777084-87b4-45e0-8db5-38c1f5e41b60.png",
      title: "Modern Entryway Design",
      category: "Interior",
      description: "Elegant wainscoting with premium gray and white finish",
    },
    {
      image: "/lovable-uploads/47ea692d-34e1-4cda-bf46-777e2a4da181.png",
      title: "Contemporary Living Space",
      category: "Interior",
      description: "Bold accent wall with large windows and modern finishes",
    },
    {
      image: "/lovable-uploads/c6a883c9-b1c4-40d2-8732-7679131fe0f1.png",
      title: "Luxury Bathroom Renovation",
      category: "Interior",
      description: "Clean lines with premium gray tile and modern fixtures",
    },
    {
      image: "/lovable-uploads/e283cd60-5f94-427c-a67a-5cc385f4375e.png",
      title: "Modern Kitchen Design",
      category: "Interior",
      description: "Sophisticated gray cabinets with contemporary styling",
    },
    {
      image: "/lovable-uploads/9bd92193-000d-4957-af74-9635a68bfb74.png",
      title: "Curved Staircase Feature",
      category: "Interior",
      description: "Elegant curved design with white railings and wood floors",
    },
    {
      image: "/lovable-uploads/17c09118-4534-4f0a-8f18-cfe67cb5522b.png",
      title: "Custom Wall Paneling",
      category: "Interior",
      description: "Sophisticated paneling design with warm neutral tones",
    },
  ];

  // Keyboard navigation for enlarged images
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (enlargedIndex === null) return;
      if (e.key === "Escape") {
        setEnlargedIndex(null);
      } else if (e.key === "ArrowRight") {
        setEnlargedIndex((prev) =>
          prev === null || prev === projects.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setEnlargedIndex((prev) =>
          prev === null || prev === 0 ? projects.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enlargedIndex, projects.length]);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our completed projects showcasing quality craftsmanship
            and attention to detail in every finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-warm-gray/20 group-hover:bg-warm-gray/40 transition-colors duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-accent text-white border-0">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Ready to start your painting project?</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button
                onClick={() => setOpen(true)}
                className="text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors"
              >
                View All Projects →
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">All Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                    onClick={() => setEnlargedIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setEnlargedIndex(index);
                      }
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Fullscreen Enlarged Image Slider Overlay */}
        {enlargedIndex !== null && (
          <div
            onClick={() => setEnlargedIndex(null)}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] cursor-zoom-out"
          >
            <button
              onClick={() => setEnlargedIndex(null)}
              className="absolute top-6 right-6 text-white text-4xl font-bold z-[10000]"
              aria-label="Close enlarged image"
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedIndex((prev) =>
                  prev === 0 ? projects.length - 1 : (prev ?? 0) - 1
                );
              }}
              className="absolute left-6 text-white text-4xl font-bold z-[10000] select-none user-select-none"
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <img
              src={projects[enlargedIndex].image}
              alt={projects[enlargedIndex].title}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent close on image click
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedIndex((prev) =>
                  prev === projects.length - 1 ? 0 : (prev ?? 0) + 1
                );
              }}
              className="absolute right-6 text-white text-4xl font-bold z-[10000] select-none user-select-none"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
