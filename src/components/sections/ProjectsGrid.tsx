import { Link } from "react-router-dom";
import { Clock, Eye, Heart, Play, Star } from "lucide-react";
// Sample projects data for demo
const filteredProjects = [
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
  }
];
const ProjectsGrid = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Featured": return "bg-primary/20 text-primary border-primary/30";
      case "Award Winner": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "New Release": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-accent/20 text-accent-foreground border-accent/30";
    }
  };
  
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-10">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-primary/80 heart-pulse" />
          <h2 className="cinema-title text-3xl md:text-4xl text-gradient">Film Stories</h2>
        </div>
        <Link to="/projects" className="story-link text-sm film-subtitle">View all</Link>
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
    </section>
  );
};

export default ProjectsGrid;