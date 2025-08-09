import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="glass-card rounded-lg p-8 md:p-12 text-center">
        <h2 className="font-head text-3xl">Have a story to tell?</h2>
        <p className="mt-3 text-muted-foreground">We’d love to collaborate. Let’s create something memorable together.</p>
        <div className="mt-6">
          <Button asChild variant="hero" size="lg" className="hover-scale">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
