import { Heart, Film, Award, Globe, Clock, Star } from "lucide-react";

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

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/20 text-2xl animate-pulse">♥</div>
        <div className="absolute top-32 right-20 text-primary/15 text-xl animate-bounce" style={{animationDelay: '1s'}}>♥</div>
        <div className="absolute bottom-20 left-1/4 text-primary/10 text-3xl animate-pulse" style={{animationDelay: '2s'}}>♥</div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About Our Studio</span>
              </div>
              
              <h2 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Varma Films
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
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

          {/* Stats Section */}
          <div className="relative">
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

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl"></div>
            </div>

            {/* Floating heart */}
            <div className="absolute -top-6 -right-6 text-primary/30 text-4xl heart-pulse">
              ♥
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;