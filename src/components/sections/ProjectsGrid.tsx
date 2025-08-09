import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Heart } from "lucide-react";

const ProjectsGrid = () => {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-10">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-primary/80 heart-pulse" />
          <h2 className="cinema-title text-3xl md:text-4xl text-gradient">Film Stories</h2>
        </div>
        <Link to="/projects" className="story-link text-sm film-subtitle">View all</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.filter(p=>p.slug==='love-story-begins').map((p) => (
          <Link to={`/projects/${p.slug}`} key={p.slug} className="group">
            <div className="love-card">
              <div className="relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={`${p.title} — ${p.category} by Varma Film Factorys`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center gap-1.5">
                      <Heart className="h-3 w-3 love-icon" />
                      <span className="text-sm font-medium text-white/90">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-lg cinema-title">{p.title}</div>
                  <div className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary-foreground/90">{p.year}</div>
                </div>
                <div className="text-xs text-brand/90 mb-2 film-subtitle">{p.category}</div>
                <p className="text-sm text-muted-foreground film-subtitle">{p.tagline}</p>
                {p.release && (
                  <div className="mt-3 text-xs flex items-center gap-1 director-note">
                    <span className="text-muted-foreground">Release:</span> 
                    <span className="text-accent-foreground/90">{p.release}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;