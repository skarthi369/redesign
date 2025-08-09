import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container py-16">
        <h1 className="font-head text-3xl">Project not found</h1>
        <p className="mt-2 text-muted-foreground">
          The project you’re looking for doesn’t exist. <Link to="/projects" className="story-link">Back to projects</Link>
        </p>
      </main>
    );
  }

  const structured = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    image: project.image,
    datePublished: String(project.year),
    genre: project.category,
    productionCompany: { '@type': 'Organization', name: 'Varma Films' },
  };

  return (
    <main>
      <SEO title={`${project.title} — Varma Films`} description={project.tagline} structuredData={structured} />
      <article className="container py-16 md:py-24">
        <header>
          <h1 className="font-head text-4xl">{project.title}</h1>
          <div className="text-sm text-muted-foreground mt-2">{project.category} • {project.year}</div>
        </header>
        <img src={project.image} alt={`${project.title} — ${project.category} by Varma Films`} className="mt-6 w-full max-h-[560px] object-cover rounded-lg" />
        <div className="mt-6 text-base text-muted-foreground space-y-4">
          <p>{project.tagline}</p>
          <p>From concept to final cut, Varma Films brings cinematic storytelling to life with a collaborative, craft-first approach. This project showcases our focus on visual language, performance, and sound to create memorable, emotionally resonant work.</p>
        </div>
        <aside className="mt-8">
          <Link to="/projects" className="story-link">← Back to all projects</Link>
        </aside>
      </article>
    </main>
  );
};

export default ProjectPage;
