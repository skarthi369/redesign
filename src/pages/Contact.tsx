import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We’ll get back to you shortly." });
    }, 800);
  };

  const structured = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Varma Films',
  };

  return (
    <main>
      <SEO title="Contact — Varma Films" description="Get in touch with Varma Films for projects, collaborations, and press." structuredData={structured} />
      <section className="container py-16 md:py-24">
        <h1 className="font-head text-4xl">Contact us</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Tell us a little about your project and we’ll reach out to discuss how we can help bring it to life.</p>
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="md:col-span-1">
            <label className="text-sm">Name</label>
            <Input name="name" required className="mt-2" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm">Email</label>
            <Input type="email" name="email" required className="mt-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Message</label>
            <Textarea name="message" rows={6} className="mt-2" required />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="hero" disabled={loading}>{loading ? 'Sending…' : 'Send message'}</Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
