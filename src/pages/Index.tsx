import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import MusicSection from "@/components/sections/MusicSection";
import ContactCta from "@/components/sections/ContactCta";

const Index = () => {
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Varma Films',
    url: window.location.origin,
    sameAs: ['https://instagram.com', 'https://twitter.com'],
  };

  return (
    <main>
      <SEO title="Varma Films — Modern Film Production" description="Modern, optimistic film production studio crafting cinematic stories for screens of all sizes." structuredData={structured} />
      <Hero />
      <About />
      <ProjectsGrid />
      <Testimonials />
      <BlogPreview />
      <MusicSection />
      <ContactCta />
    </main>
  );
};

export default Index;
