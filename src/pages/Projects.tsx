import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <main>
      <SEO title="Projects — Varma Films" description="Browse a selection of films, commercials and documentaries produced by Varma Films." />
      <section className="container py-16 md:py-24">
        <h1 className="font-head text-4xl mb-6">Projects</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link id={p.slug} to={`/projects/${p.slug}`} key={p.slug} className="group rounded-lg overflow-hidden border border-border/60 hover-scale">
              <img src={p.image} alt={`${p.title} — ${p.category}`} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-4 bg-card/70">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium">{p.title}</h2>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{p.category}</div>
                <p className="text-sm mt-2 text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
