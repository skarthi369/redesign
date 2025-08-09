import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { posts } from "@/data/posts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container py-16">
        <h1 className="font-head text-3xl">Post not found</h1>
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
    <main>
      <SEO title={`${post.title} — Varma Films`} description={post.excerpt} structuredData={structured} />
      <article className="container py-16 md:py-24">
        <h1 className="font-head text-4xl">{post.title}</h1>
        <div className="text-sm text-muted-foreground mt-2">{new Date(post.date).toLocaleDateString()}</div>
        <img src={post.image} alt={`${post.title} — Cover image`} className="mt-6 w-full max-h-[480px] object-cover rounded-lg" />
        <div className="mt-6 text-base text-muted-foreground space-y-4">
          <p>{post.excerpt}</p>
          <p>At Varma Films, craft and collaboration shape every project. In this post, we share a deeper look at the process behind our work — from initial concepts and storyboards to on-set execution and post-production polish.</p>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
