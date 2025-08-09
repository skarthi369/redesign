import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import { Calendar, ArrowRight, Heart } from "lucide-react";


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
const BlogPage = () => {
  return (
    <main>
      <SEO title="Blog — Varma Films" description="News, behind-the-scenes and insights from the Varma Films studio." />
      <section className="container py-16 md:py-24">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-4 w-4 text-primary/80 heart-pulse" />
          <h2 className="cinema-title text-3xl md:text-4xl text-gradient">Film Stories</h2>
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
      </section>
    </main>
  );
};

export default BlogPage;
