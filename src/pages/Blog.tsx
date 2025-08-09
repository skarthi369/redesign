import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { posts } from "@/data/posts";

const BlogPage = () => {
  return (
    <main>
      <SEO title="Blog — Varma Films" description="News, behind-the-scenes and insights from the Varma Films studio." />
      <section className="container py-16 md:py-24">
        <h1 className="font-head text-4xl mb-6">Blog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-lg overflow-hidden border border-border/60">
              <img src={p.image} alt={`${p.title} — Blog`} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-4 bg-card/70">
                <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
                <h2 className="font-medium mt-1"><Link to={`/blog/${p.slug}`} className="story-link">{p.title}</Link></h2>
                <p className="text-sm mt-2 text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
