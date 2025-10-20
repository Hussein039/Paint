import React, { useState, useEffect } from "react";

// ----- Your Projects Data -----
const featuredProjects = [
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
    image: "/lovable-uploads/image_29.jpg",
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

const extraProjects = Array.from({ length: 100 }, (_, i) => ({
  image: i % 2 === 0
    ? `/lovable-uploads/image_${i + 1}.jpg`
    : `/lovable-uploads/${i + 1}.jpeg`,
  category: "Interior",
  description: "Professional painting and finishing project showcasing quality craftsmanship",
}));






const allProjects = [...featuredProjects, ...extraProjects];

// ----- Component -----
const Portfolio: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  // Secret admin login
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [keyBuffer, setKeyBuffer] = useState("");

  // Detect secret code typed anywhere
  useEffect(() => {
    const handleSecretKeys = (e: KeyboardEvent) => {
      const newBuffer = (keyBuffer + e.key).slice(-20);
      setKeyBuffer(newBuffer);
      if (newBuffer.toLowerCase().includes("admin12321".toLowerCase())) {
        setShowAdminLogin(true);
        setKeyBuffer("");
      }
    };
    window.addEventListener("keydown", handleSecretKeys);
    return () => window.removeEventListener("keydown", handleSecretKeys);
  }, [keyBuffer]);

  // Handle admin login (frontend only)
  const handleLogin = () => {
    if (adminPass === "mySecretPass") {
      alert("✅ Logged in as Admin");
      setShowAdminLogin(false);
      setAdminPass("");
    } else {
      alert("❌ Wrong password");
    }
  };

  // Image viewer keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (enlargedIndex === null) return;
      if (e.key === "Escape") {
        setEnlargedIndex(null);
      } else if (e.key === "ArrowRight") {
        setEnlargedIndex((enlargedIndex + 1) % allProjects.length);
      } else if (e.key === "ArrowLeft") {
        setEnlargedIndex(
          (enlargedIndex - 1 + allProjects.length) % allProjects.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enlargedIndex]);

  // Prevent body scroll when dialogs open
  useEffect(() => {
    if (dialogOpen || enlargedIndex !== null || showAdminLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [dialogOpen, enlargedIndex, showAdminLogin]);

  return (
    <section id="portfolio" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our completed projects showcasing quality
            craftsmanship and attention to detail in every finish.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="featured-grid"
        >
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setEnlargedIndex(idx)}
              className="group overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 cursor-pointer rounded-lg"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-400/20 group-hover:bg-gray-400/40 transition-colors duration-300 rounded-lg"></div>
                <span className="absolute top-4 left-4 bg-gradient-accent to-purple-900 text-white text-sm px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">
            Ready to start your painting project? View our complete portfolio.
          </p>
          <button
            className="bg-gradient-accent to-purple-900 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            onClick={() => setDialogOpen(true)}
          >
            View All Projects ({allProjects.length})
          </button>
        </div>

        {/* All Projects Dialog */}
        {dialogOpen && (
          <div
            onClick={() => setDialogOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-70 z-[99998] flex items-center justify-center p-4 overflow-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-6xl max-h-[85vh] rounded-lg shadow-lg flex flex-col"
            >
              <div className="sticky top-0 bg-white z-10 p-6 border-b">
                <h3 className="text-2xl font-bold">
                  Complete Portfolio ({allProjects.length} Projects)
                </h3>
                <p className="text-gray-600 mt-2">
                  Click on any image to view in full screen
                </p>
              </div>
              <div className="overflow-y-auto flex-1 p-6">
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  id="all-grid"
                >
                  {allProjects.map((project, idx) => (
                    <div
                      key={idx}
                      onClick={() => setEnlargedIndex(idx)}
                      className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow group"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-lg">
                          <div className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                            🔍
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-semibold truncate">
                        </h4>
                        <span className="mt-1 text-xs inline-block bg-gray-200 rounded px-2 py-0.5 text-gray-600">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Viewer */}
        {enlargedIndex !== null && (
          <div
            onClick={() => setEnlargedIndex(null)}
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[99999] cursor-zoom-out p-4"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedIndex(null);
              }}
              title="Close (Esc)"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-[100000] flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedIndex(
                  (enlargedIndex - 1 + allProjects.length) % allProjects.length
                );
              }}
              title="Previous (←)"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-[100000] flex items-center justify-center text-2xl font-bold shadow-lg border border-white/20"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedIndex((enlargedIndex + 1) % allProjects.length);
              }}
              title="Next (→)"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-[100000] flex items-center justify-center text-2xl font-bold shadow-lg border border-white/20"
            >
              ›
            </button>

            <div className="flex flex-col items-center max-w-[30vw] max-h-[100vh] p-4">
              <img
                src={allProjects[enlargedIndex].image}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Secret Admin Login Modal */}
        {showAdminLogin && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100000]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
              <input
                type="password"
                placeholder="Enter Admin Password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className="border p-2 w-full rounded mb-4"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowAdminLogin(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
