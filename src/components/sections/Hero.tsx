import heroImage from "@/assets/hero-varma-films.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    (e.currentTarget as HTMLElement).style.setProperty("--mx", `${mx}%`);
    (e.currentTarget as HTMLElement).style.setProperty("--my", `${my}%`);
  };

  return (
    <section onMouseMove={onMove} className="relative overflow-hidden bg-hero">
      <img src={heroImage} alt="Cinematic film set with camera, lights and director's chair" className="absolute inset-0 w-full h-full object-cover opacity-35" loading="eager" />
      <div className="relative container py-24 md:py-36">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">Modern Film Production</p>
          <h1 className="mt-3 font-head text-4xl md:text-6xl leading-tight">
            <span className="text-gradient">Varma Films</span> crafts cinematic stories with optimism
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            From concept to the final cut, we develop, produce and deliver films and branded content that move audiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" className="hover-scale">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
