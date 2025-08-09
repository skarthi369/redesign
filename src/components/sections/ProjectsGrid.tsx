import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsGrid = () => {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="font-head text-3xl md:text-4xl">Selected Projects</h2>
        <Link to="/projects" className="story-link text-sm">View all</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link to={`/projects/${p.slug}`} key={p.slug} className="group rounded-lg overflow-hidden border border-border/60 hover-scale">
            <img src={p.image} alt={`${p.title} — ${p.category} by Varma Films`} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-4 bg-card/70">
              <div className="flex items-center justify-between">
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.year}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{p.category}</div>
              <p className="text-sm mt-2 text-muted-foreground">{p.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
