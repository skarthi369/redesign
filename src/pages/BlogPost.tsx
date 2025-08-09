// import { useParams } from "react-router-dom";
// import SEO from "@/components/SEO";
// import { posts } from "@/data/posts";

import { Heart, Calendar, Clock, Share2, ArrowLeft, Film, User, Tag } from "lucide-react";

// Sample post data for demo
const samplePost = {
  slug: "romantic-cinematography-tips",
  title: "The Art of Romantic Cinematography: Creating Visual Poetry",
  excerpt: "Discover the secrets behind capturing intimate moments and creating the visual language of love that speaks directly to the heart.",
  image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=400&fit=crop",
  date: "2024-12-15",
  readTime: "5 min read",
  category: "Cinematography",
  author: "Varma Films Studio"
};

const BlogPostPage = () => {
  // const { slug } = useParams();
  // const post = posts.find((p) => p.slug === slug);
  const post = samplePost; // Using sample data for demo

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl text-primary/30">♥</div>
          <h1 className="cinema-title text-3xl md:text-4xl font-bold">
            Love Story Not Found
          </h1>
          <p className="text-muted-foreground">
            This romantic tale seems to have gotten lost in the stars.
          </p>
          <a 
            href="/blog" 
            className="btn-movie inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Stories
          </a>
        </div>
      </main>
    );
  }

  const structured = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    image: post.image,
    author: { '@type': 'Organization', name: 'Varma Films' },
  };

  return (
    <main className="relative">
      {/* SEO Component would go here */}
      {/* <SEO title={`${post.title} — Varma Films`} description={post.excerpt} structuredData={structured} /> */}
      
      {/* Floating decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 text-primary/15 text-3xl heart-pulse">♥</div>
        <div className="absolute top-40 left-8 text-primary/10 text-2xl heart-pulse" style={{animationDelay: '1s'}}>♥</div>
        <div className="absolute bottom-32 right-1/4 text-primary/8 text-4xl heart-pulse" style={{animationDelay: '2s'}}>♥</div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-6 pt-8">
        <a 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Studio Stories</span>
        </a>
      </div>

      <article className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Film className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>

          {/* Share Button */}
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors duration-300">
            <Share2 className="w-4 h-4" />
            Share Love Story
          </button>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="love-card overflow-hidden">
            <img 
              src={post.image} 
              alt={`${post.title} — Cover image`} 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="love-card p-8 md:p-12 space-y-8">
            {/* Excerpt with special styling */}
            <div className="border-l-4 border-primary/50 pl-6 py-4 bg-primary/5 rounded-r-lg">
              <p className="text-lg leading-relaxed text-foreground/90 italic">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base leading-relaxed text-foreground/90">
                At Varma Films, craft and collaboration shape every project. In this post, we share a deeper look at the process behind our work — from initial concepts and storyboards to on-set execution and post-production polish.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Creating romantic cinematography is more than just pointing a camera at beautiful people. It's about understanding the language of love, the poetry of movement, and the subtle art of capturing genuine emotion. Every frame tells a story, every angle conveys feeling, and every light setup creates mood.
              </p>

              <h3 className="text-2xl font-semibold text-gradient mt-8 mb-4">
                The Magic of Visual Storytelling
              </h3>

              <p className="text-base leading-relaxed text-muted-foreground">
                Our approach to romantic storytelling combines technical excellence with emotional intelligence. We believe that the most powerful love stories are told not just through dialogue, but through the careful orchestration of visual elements that speak directly to the heart.
              </p>

              <div className="bg-accent/30 border border-accent/50 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Director's Note</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Every love story deserves to be told with the reverence and artistry that honors the depth of human connection. That's our commitment to every project."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-12 flex flex-wrap gap-2">
            <span className="genre-tag">Romance</span>
            <span className="genre-tag">Cinematography</span>
            <span className="genre-tag">Love Stories</span>
            <span className="genre-tag">Behind the Scenes</span>
          </div>

        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;