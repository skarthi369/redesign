// import SEO from "@/components/SEO";
// import { projects } from "@/data/projects";

import { Heart, Film, Calendar, Award, Play, Star, ArrowLeft, Share2, Download, Eye, Clock } from "lucide-react";
import { useState } from "react";

// Sample projects data for demo
const projects = [
  {
    slug: "eternal-summer-love",
    title: "Eternal Summer Love",
    category: "Romantic Drama",
    year: "2024",
    tagline: "A timeless tale of love that blooms under the summer sun",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=250&fit=crop",
    rating: 4.8,
    duration: "118 min",
    status: "Featured"
  },
  {
    slug: "whispers-in-paris",
    title: "Whispers in Paris",
    category: "Romance",
    year: "2024",
    tagline: "Love finds a way in the city of lights",
    image: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?w=400&h=250&fit=crop",
    rating: 4.9,
    duration: "102 min",
    status: "Award Winner"
  },
  {
    slug: "midnight-serenade",
    title: "Midnight Serenade",
    category: "Musical Romance",
    year: "2023",
    tagline: "When music becomes the language of the heart",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    rating: 4.7,
    duration: "95 min",
    status: "Critics Choice"
  },
  {
    slug: "letters-to-luna",
    title: "Letters to Luna",
    category: "Romantic Drama",
    year: "2023",
    tagline: "A love story written in the stars",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=250&fit=crop",
    rating: 4.6,
    duration: "110 min",
    status: "New Release"
  },
  {
    slug: "dancing-hearts",
    title: "Dancing Hearts",
    category: "Romance",
    year: "2023",
    tagline: "Two souls, one rhythm, infinite love",
    image: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?w=400&h=250&fit=crop",
    rating: 4.5,
    duration: "87 min",
    status: "Popular"
  },
  {
    slug: "autumn-promises",
    title: "Autumn Promises",
    category: "Drama",
    year: "2022",
    tagline: "Love that endures through changing seasons",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    rating: 4.4,
    duration: "125 min",
    status: "Classic"
  }
];

// Projects List Page Component
const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Romance", "Romantic Drama", "Musical Romance", "Drama"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Featured": return "bg-primary/20 text-primary border-primary/30";
      case "Award Winner": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "New Release": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-accent/20 text-accent-foreground border-accent/30";
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* SEO Component would go here */}
      {/* <SEO title="Love Stories — Varma Films" description="Browse our collection of romantic films, heartwarming commercials and passionate documentaries." /> */}
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-12 text-primary/12 text-4xl heart-pulse">♥</div>
        <div className="absolute top-40 left-8 text-primary/8 text-3xl heart-pulse" style={{animationDelay: '1s'}}>♥</div>
        <div className="absolute bottom-32 right-1/4 text-primary/10 text-2xl heart-pulse" style={{animationDelay: '2s'}}>♥</div>
      </div>

      <section className="container mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Film className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Love Stories</span>
          </div>
          
          <h1 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our collection of romantic films, heartwarming commercials, and passionate documentaries that celebrate the beauty of human connection.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-glow"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a 
              key={project.slug}
              href={`/projects/${project.slug}`} 
              className="group block"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <article className="love-card h-full overflow-hidden group-hover:shadow-glow transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} — ${project.category}`} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" 
                  />
                  
                  {/* Overlay with play button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-white font-medium">{project.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="genre-tag text-xs">{project.category}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Watch now indicator */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                    <span>Watch love story</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl text-primary/30 mb-4">♥</div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No love stories found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different category to discover more romantic tales.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};



// Export both components - you can use either based on your routing needs
export default ProjectsPage;