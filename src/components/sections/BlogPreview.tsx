import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const BlogPreview = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="font-head text-3xl md:text-4xl">Inside the Studio</h2>
        <Link to="/blog" className="story-link text-sm">All posts</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-lg overflow-hidden border border-border/60 hover-scale">
            <img src={p.image} alt={`${p.title} — Varma Films blog`} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-4 bg-card/70">
              <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
              <div className="font-medium mt-1">{p.title}</div>
              <p className="text-sm mt-2 text-muted-foreground">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
