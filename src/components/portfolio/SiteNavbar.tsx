import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone, Linkedin, Github } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about-section" },
  { label: "Services", href: "/#services-section" },
  { label: "Experience", href: "/#experience-section" },
  { label: "Projects", href: "/#projects-section" },
  { label: "Contact", href: "/#contact-section" },
];

const SiteNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs text-muted-foreground border-b border-border/60 bg-background">
        <div className="flex items-center gap-6">
          <a href="tel:01557189422" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={12} /> 01557189422
          </a>
          <a href="mailto:mydwmtr6@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={12} /> mydwmtr6@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/mohamed-soliman-295255244" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={13} />
          </a>
          <a href="https://github.com/Eng-mohamed33" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={13} />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <Link to="/" className="font-display text-lg font-bold uppercase tracking-wide">
            Mohamed<span className="text-primary">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/#contact-section"
              className="hidden md:inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold uppercase tracking-wide hover:shadow-glow transition-all duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-lg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-display text-lg font-bold uppercase">Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl font-display font-semibold py-3 border-b border-border/60"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteNavbar;
