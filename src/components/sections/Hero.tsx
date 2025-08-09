import heroImage from "@/assets/hero-varma-films.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "@/components/ui/AnimatedText";

const Hero = () => {
  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    (e.currentTarget as HTMLElement).style.setProperty("--mx", `${mx}%`);
    (e.currentTarget as HTMLElement).style.setProperty("--my", `${my}%`);
  };

  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out" });
      gsap.from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.9, delay: 0.15, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 16, opacity: 0, duration: 0.9, delay: 0.3, stagger: 0.08, ease: "power3.out" });
      // Background parallax on scroll
      gsap.to(".hero-bg", {
        yPercent: 8,
        scrollTrigger: { trigger: rootRef.current!, start: "top top", end: "bottom top", scrub: 0.5 },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} onMouseMove={onMove} className="relative overflow-hidden bg-hero min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
      <img 
        src={heroImage} 
        alt="Cinematic film set with camera, lights and director's chair" 
        className="hero-bg absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-soft-light" 
        loading="eager" 
      />
      
      {/* Subtle floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <Heart 
            key={i} 
            className="absolute text-primary/15 animate-float" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative container py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-primary/80 heart-pulse" />
            <p className="text-sm tracking-widest text-brand uppercase film-subtitle">A Love Story</p>
          </div>
          <h1 className="mt-3 cinema-title text-4xl md:text-5xl leading-tight hero-title">
            <AnimatedText text="Varma Film Factorys" className="text-gradient" /> <br/>
            <AnimatedText text="presents a journey of love" className="text-foreground/90 text-2xl md:text-3xl" delay={0.15} />
          </h1>
          <p className="mt-5 text-lg text-muted-foreground film-subtitle hero-subtitle">
            Experience the magic of <span className="text-foreground/90 font-medium">Love Story Begins</span> and the rhythm of <span className="text-foreground/90 font-medium">Vasthaavaa</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" className="hover-scale relative overflow-hidden group hero-cta">
              <Link to="/projects" className="flex items-center gap-2">
                <span>Explore Our Stories</span>
                <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale border-primary/20 hover:border-primary/40 hero-cta">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;