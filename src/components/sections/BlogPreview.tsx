import { Link } from "react-router-dom";
// import { posts } from "@/data/posts";

// Sample posts data for demo
const posts = [
  {
    slug: "romantic-cinematography-tips",
    title: "The Art of Romantic Cinematography",
    excerpt: "Discover how we capture intimate moments and create visual poetry that speaks to the heart.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=250&fit=crop",
    date: "2024-12-15"
  },
  {
    slug: "behind-scenes-love-actually",
    title: "Behind the Scenes: Love Actually",
    excerpt: "An exclusive look into our latest romantic production and the magic that happens off-camera.",
    image: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?w=400&h=250&fit=crop",
    date: "2024-12-10"
  },
  {
    slug: "casting-perfect-couple",
    title: "Casting the Perfect On-Screen Couple",
    excerpt: "The delicate process of finding actors who can create believable chemistry and authentic romance.",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=250&fit=crop",
    date: "2024-12-05"
  }
];
import { Heart, ArrowRight, Calendar, BookOpen, Sparkles, Film } from "lucide-react";

const BlogPreview = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-10 text-primary/10 text-6xl heart-pulse">♥</div>
        <div className="absolute bottom-20 left-16 text-primary/8 text-4xl" style={{animationDelay: '1.5s'}}>♥</div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Behind the Scenes</span>
          </div>
          
          <h2 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Inside the Studio
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the magic behind our romantic films, creative process, and the passionate stories that drive our studio forward.
          </p>

          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 story-link text-base font-medium group"
          >
            <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            View All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.slug} 
              to={`/blog/${post.slug}`} 
              className="group block"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <article className="love-card h-full overflow-hidden group-hover:shadow-glow transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img 
                    src={post.image} 
                    alt={`${post.title} — Varma Films love story`} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating heart on hover */}
                  <div className="absolute top-4 right-4 text-white/80 text-xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 heart-pulse">
                    ♥
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Date with icon */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read more indicator */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Read love story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </article>
            </Link>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default BlogPreview;