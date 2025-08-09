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
      toast({
        title: "✅ Message sent",
        description: "We’ll get back to you shortly.",
      });
    }, 800);
  };

  const structured = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — Varma Films",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO
        title="Contact — Varma Films"
        description="Get in touch with Varma Films for projects, collaborations, and press."
        structuredData={structured}
      />

      <section className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Tell us a little about your project and we’ll reach out to discuss
            how we can help bring it to life.
          </p>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="mt-10 grid md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                name="name"
                required
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                required
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                name="message"
                rows={6}
                required
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <Button
                type="submit"
                variant="hero"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 text-lg font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending…
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
