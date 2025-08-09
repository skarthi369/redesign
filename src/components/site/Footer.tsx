import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-head text-lg text-gradient">Varma Films</div>
          <p className="text-muted-foreground mt-2">Modern, optimistic film production. Crafting cinematic stories with heart.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link className="story-link" to="/#about">About</Link></li>
            <li><Link className="story-link" to="/projects">Projects</Link></li>
            <li><Link className="story-link" to="/blog">Blog</Link></li>
            <li><Link className="story-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: hello@varmafilms.com</li>
            <li>Mumbai, IN</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Varma Films. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
