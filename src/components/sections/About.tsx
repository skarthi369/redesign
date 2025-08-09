import { Heart, Film, Award, Globe, Clock, Star } from "lucide-react";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [transformStyle, setTransformStyle] = useState<string>("")

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    const rotateX = py * -8
    const rotateY = px * 8
    setTransformStyle(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    )
  }

  const handlePointerLeave = () => {
    setTransformStyle("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      style={{ transform: transformStyle, transition: "transform 150ms ease-out" }}
    >
      {children}
    </div>
  )
}

const About = () => {
  const stats = [
    {
      icon: <Film className="w-6 h-6" />,
      number: "50+",
      label: "Love Stories Created",
      description: "Romantic films that touch hearts"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "12",
      label: "Awards Won",
      description: "Recognition for storytelling"
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "8K",
      label: "Ultra HD Ready",
      description: "Cinematic quality delivery"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "24/7",
      label: "Global Reach",
      description: "Worldwide creative team"
    }
  ];

  // Cursor-parallax state for decorative motion orbs
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const nx = (event.clientX - rect.left) / rect.width - 0.5
    const ny = (event.clientY - rect.top) / rect.height - 0.5
    setCursor({ x: nx, y: ny })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-header", start: "top 85%", once: true },
      })
      gsap.from(".about-paras > *", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-paras", start: "top 85%", once: true },
      })
      gsap.from(".gallery-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-card", start: "top 85%", once: true },
      })
      gsap.from(".bio-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".bio-card", start: "top 85%", once: true },
      })

      // Floating orb subtle motion
      gsap.utils.toArray<HTMLElement>(".motion-orb").forEach((el, i) => {
        gsap.to(el, {
          x: `+=${gsap.utils.random(-60, 60)}`,
          y: `+=${gsap.utils.random(-40, 40)}`,
          scale: gsap.utils.random(0.9, 1.15),
          duration: gsap.utils.random(6, 10),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })

      // Parallax shift of background on scroll
      gsap.to(".motion-bg", {
        yPercent: 6,
        scrollTrigger: { trigger: containerRef.current!, start: "top bottom", end: "bottom top", scrub: 0.4 },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/20 text-2xl animate-pulse">♥</div>
        <div className="absolute top-32 right-20 text-primary/15 text-xl animate-bounce" style={{animationDelay: '1s'}}>♥</div>
        <div className="absolute bottom-20 left-1/4 text-primary/10 text-3xl animate-pulse" style={{animationDelay: '2s'}}>♥</div>
      </div>

      <div className="container mx-auto px-6 motion-bg">
        {/* Motion Orbs background that follow cursor slightly */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="motion-orb absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, var(--primary) 0%, transparent 70%)",
              transform: `translate3d(${cursor.x * 40}px, ${cursor.y * 40}px, 0)`,
              transition: "transform 120ms ease-out",
            }}
          />
          <div
            className="motion-orb absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, var(--accent) 0%, transparent 70%)",
              transform: `translate3d(${cursor.x * -50}px, ${cursor.y * -50}px, 0)`,
              transition: "transform 120ms ease-out",
            }}
          />
        </div>
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4 about-header">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About Our Studio</span>
              </div>
              
              <h2 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Varma Films
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed about-paras">
              <p className="text-foreground/90">
                We are a film production studio passionate about crafting 
                <span className="text-primary font-semibold"> human love stories</span> with 
                striking visuals and meticulous attention to detail. Our team blends 
                seasoned expertise with fresh perspectives to deliver premium narrative films, 
                commercials and documentaries.
              </p>
              
              <p className="text-muted-foreground">
                With a collaborative approach rooted in <em>romance and emotion</em>, 
                we partner with brands and creators worldwide to bring heartfelt ideas to life — 
                on time and on budget, always with love at the center.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="genre-tag">Romance</span>
              <span className="genre-tag">Drama</span>
              <span className="genre-tag">Documentaries</span>
              <span className="genre-tag">Commercials</span>
            </div>
          </div>

          {/* Photo Gallery - Modern Carousel */}
          <Card className="love-card overflow-hidden gallery-card">
            <CardHeader>
              <CardTitle className="text-gradient">On-Set Moments</CardTitle>
              <CardDescription>Behind the scenes with the crew</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {[
                    "/images/mithun-3.jpg",
                    "/images/mithun-4.jpg",
                    "/images/mithun-5.jpg",
                    "/images/mithun-6.jpg",
                    "/images/mithun-7.jpg",
                  ].map((src, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                      <TiltCard>
                        <div className="p-1">
                          <AspectRatio ratio={16 / 9}>
                            <a href={src} target="_blank" rel="noopener noreferrer">
                              <img
                                src={src}
                                alt={`Mithun Chakravarthi on set ${idx + 1}`}
                                className="h-full w-full rounded-md object-cover shadow-glow hover:opacity-95 transition"
                                loading="lazy"
                              />
                            </a>
                          </AspectRatio>
                        </div>
                      </TiltCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-6 bg-background/70 backdrop-blur" />
                <CarouselNext className="-right-6 bg-background/70 backdrop-blur" />
              </Carousel>
            </CardContent>
          </Card>

          {/* Biography Section */}
          <div className="love-card p-8 space-y-6 bio-card">
            <div className="space-y-2">
              <h3 className="cinema-title text-3xl md:text-4xl font-bold text-gradient">
                Mithun Chakravarthi &ndash; Biography
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="prose prose-invert max-w-none text-foreground/90">
              <p>
                Mithun Chakravarthi is a 21-year-old Indian actor, director, and film producer. He is widely
                recognized as the first person in India to simultaneously act in, direct, and produce a feature film at
                the age of 21, under his own production banner, Varma Film Factorys. His debut film, <em>Love Story: Begins</em>,
                is a Pan-Indian romantic drama made in Tamil, Telugu, and Hindi, and is currently being filmed across
                Chennai, Hyderabad, and Dubai. The movie is slated for a theatrical release in early 2026.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Early Life and Background</h4>
              <p>
                Mithun Chakravarthi was born and raised in Chennai, Tamil Nadu, into a culturally diverse family.
                His father is a Varmakalai doctor, practicing the ancient Tamil martial and healing art, while his
                mother is a Telugu-speaking homemaker from Andhra Pradesh. Mithun's mother tongue is Telugu,
                and he is fluent in Tamil, Telugu, Hindi, and English.
              </p>
              <p>
                He completed his schooling at Bharathi Vidya Mandhir School, Chennai, where he actively
                participated in dance, drama, and stage performances. These early experiences on stage sparked
                his passion for cinema and storytelling, eventually shaping his career path in the film industry.
                Mithun has a younger brother named Siranjeevi Varma.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Career</h4>
              <p>
                Mithun began his professional journey in cinema with unmatched ambition and confidence. Rather
                than entering the industry through traditional routes, he chose to take full creative control by writing,
                directing, producing, and acting in his debut feature film, <em>Love Story: Begins</em>.
              </p>
              <p>
                This Pan-Indian bilingual romantic drama is being simultaneously shot in Tamil, Telugu, and Hindi,
                and is produced under his own banner, Varma Film Factorys. The movie is currently in production,
                with major filming happening in Chennai, Hyderabad, and Dubai.
              </p>
              <p>
                At just 21, Mithun has made history in Indian cinema by managing all three major creative
                roles—actor, director, and producer—on a full-length feature film, a rare feat for someone so young.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Creative Talents and Vision</h4>
              <p>Mithun is deeply involved in every aspect of filmmaking. His creative interests include:</p>
              <ul className="list-disc pl-6">
                <li>Story development and screenwriting</li>
                <li>Choreography and stage performance</li>
                <li>Music composition and lyric writing</li>
                <li>Visual direction and aesthetic design</li>
              </ul>
              <p>
                His cinematic vision combines youthful storytelling with cross-cultural appeal. Drawing inspiration
                from both traditional Indian values and modern film styles, Mithun aims to tell stories that resonate
                emotionally across languages and generations.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Philanthropy</h4>
              <p>
                Beyond his film career, Mithun is committed to philanthropic work, especially in the field of
                education for underprivileged children. He personally supports initiatives that provide access to
                quality schooling, learning materials, and mentorship for students from economically disadvantaged
                backgrounds. His long-term goal is to use his platform to empower the next generation through
                education.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Languages Spoken</h4>
              <ul className="list-disc pl-6">
                <li>Tamil</li>
                <li>Telugu</li>
                <li>Hindi</li>
                <li>English</li>
              </ul>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Personal Life</h4>
              <p>
                Mithun currently resides in Chennai with his family. Despite his early success, he remains grounded
                and focused, balancing his cinematic ambitions with his desire to make a meaningful social impact.
                In his free time, he continues to train in performance, writing, and directing, constantly working to
                grow as a well-rounded artist.
              </p>

              <h4 className="mt-8 mb-3 text-xl font-semibold">Legacy</h4>
              <p>
                Mithun Chakravarthi is already being recognized as a trailblazer in Indian cinema for his bold and
                unprecedented debut. As he continues his journey, he is expected to become a defining voice in the
                new generation of filmmakers—bringing innovation, compassion, and storytelling to the forefront of
                Indian film.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="relative">
            <div className="love-card p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gradient mb-2">Our Journey</h3>
                <p className="text-muted-foreground">Creating love stories that last forever</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group cursor-default"
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <div className="love-icon mb-3 mx-auto w-fit p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-foreground/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl"></div>
            </div>

            <div className="absolute -top-6 -right-6 text-primary/30 text-4xl heart-pulse">
              ♥
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default About;