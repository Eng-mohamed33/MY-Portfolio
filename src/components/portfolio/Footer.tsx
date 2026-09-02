import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#about-section" },
  { label: "Services", href: "/#services-section" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/#contact-section" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="font-display text-lg font-bold uppercase tracking-wide">
              Mohamed<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              AI Engineer &amp; Data Analyst — building intelligent systems and
              turning data into decisions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01557189422" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} /> 01557189422
                </a>
              </li>
              <li>
                <a href="mailto:mydwmtr6@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} /> mydwmtr6@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> Cairo, Egypt
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/mohamed-soliman-295255244"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/Eng-mohamed33"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mohamed Soliman. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
