import { ArrowLeft, Award, Calendar, Clock, Heart, Play, Share2, Star } from "lucide-react";
// Sample projects data for demo
const projects = [
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
  },
  {
    slug: "letters-to-luna",
    title: "Letters to Luna",
    category: "Romantic Drama",
    year: "2023",
    tagline: "A love story written in the stars",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=250&fit=crop",
    rating: 4.6,
    duration: "110 min",
    status: "New Release"
  },
  {
    slug: "dancing-hearts",
    title: "Dancing Hearts",
    category: "Romance",
    year: "2023",
    tagline: "Two souls, one rhythm, infinite love",
    image: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?w=400&h=250&fit=crop",
    rating: 4.5,
    duration: "87 min",
    status: "Popular"
  },
  {
    slug: "autumn-promises",
    title: "Autumn Promises",
    category: "Drama",
    year: "2022",
    tagline: "Love that endures through changing seasons",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    rating: 4.4,
    duration: "125 min",
    status: "Classic"
  }
];
// Individual Project Page Component
const ProjectPage = () => {
  // Using the first project as sample data
  const project = projects[0];
  
  const projectDetails = {
    ...project,
    director: "Arjun Varma",
    producer: "Varma Films Studio",
    writer: "Priya Sharma",
    cinematographer: "Ravi Kumar",
    composer: "Anjali Devi",
    cast: ["Aditi Rao", "Vikram Singh", "Meera Nair"],
    awards: ["Best Romantic Film 2024", "Audience Choice Award"],
    synopsis: "Set against the backdrop of a picturesque coastal town, Eternal Summer Love follows Maya and Arjun as they navigate the complexities of modern romance. When a chance encounter during the summer festival changes everything, they must learn that true love isn't just about finding the right person, but becoming the right person for each other.",
    production: "Shot over 45 days across three stunning locations, this film captures the raw beauty of love in its most authentic form. Our team worked tirelessly to create a visual poetry that speaks to the heart while maintaining the highest production values.",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={projectDetails.image} 
          alt={projectDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border bg-white/20 text-white border-white/30`}>
                  {projectDetails.status}
                </span>
                <span className="genre-tag bg-white/20 text-white border-white/30">
                  {projectDetails.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {projectDetails.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                {projectDetails.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm mb-8">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {projectDetails.year}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {projectDetails.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {projectDetails.rating}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="btn-movie inline-flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Trailer
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors duration-300">
                  <Share2 className="w-4 h-4" />
                  Share Love Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 text-white border border-white/20 hover:bg-black/50 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </a>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Synopsis */}
            <div className="love-card p-8">
              <h2 className="text-2xl font-semibold text-gradient mb-6">Synopsis</h2>
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
                {projectDetails.synopsis}
              </p>
              
              <div className="border-l-4 border-primary/50 pl-6 py-4 bg-primary/5 rounded-r-lg">
                <h3 className="font-semibold text-foreground mb-2">Production Notes</h3>
                <p className="text-sm text-muted-foreground italic">
                  {projectDetails.production}
                </p>
              </div>
            </div>

            {/* Trailer */}
            <div className="love-card p-8">
              <h2 className="text-2xl font-semibold text-gradient mb-6">Watch Trailer</h2>
              <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">Trailer coming soon...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cast & Crew */}
            <div className="love-card p-6">
              <h3 className="text-xl font-semibold text-gradient mb-6">Cast & Crew</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">Director</h4>
                  <p className="text-foreground">{projectDetails.director}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">Cast</h4>
                  <div className="space-y-1">
                    {projectDetails.cast.map((actor, index) => (
                      <p key={index} className="text-foreground">{actor}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">Writer</h4>
                  <p className="text-foreground">{projectDetails.writer}</p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-2">Music</h4>
                  <p className="text-foreground">{projectDetails.composer}</p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="love-card p-6">
              <h3 className="text-xl font-semibold text-gradient mb-6">Recognition</h3>
              <div className="space-y-3">
                {projectDetails.awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="love-card p-6">
              <h3 className="text-xl font-semibold text-gradient mb-6">Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Release Year</span>
                  <span className="font-medium">{projectDetails.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{projectDetails.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{projectDetails.rating}/5</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Genre</span>
                  <span className="font-medium">{projectDetails.category}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="love-card p-6 text-center">
              <h3 className="text-lg font-semibold text-gradient mb-3">
                Love This Story?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Discover more romantic tales from our studio.
              </p>
              <a 
                href="/projects" 
                className="btn-movie w-full inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" />
                More Love Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage