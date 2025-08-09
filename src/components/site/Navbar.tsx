import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toHash = (hash: string) => (location.pathname === "/" ? `#${hash}` : `/#${hash}`);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/60">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span aria-label="Varma Films" className="font-head text-xl tracking-wide text-gray-500">Varma Films Factory</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to={toHash('about')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          {/* <Link to={toHash('testimonials')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link> */}
          {/* <Link to={toHash('music')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Music</Link> */}
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{n.label}</NavLink>
          ))}
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Let’s talk</Link>
          </Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          <Menu />
        </Button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60">
          <div className="container py-3 flex flex-col gap-3">
            <Link to={toHash('about')} onClick={()=>setOpen(false)}>About</Link>
            {/* <Link to={toHash('projects')} onClick={()=>setOpen(false)}>Projects</Link> */}
            {/* <Link to={toHash('testimonials')} onClick={()=>setOpen(false)}>Testimonials</Link> */}
            {/* <Link to={toHash('music')} onClick={()=>setOpen(false)}>Music</Link> */}
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)}>{n.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
