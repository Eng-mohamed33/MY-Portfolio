import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-background"
    >
      {/* Full-bleed portrait, right side (desktop only) */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[58%] lg:w-[52%]">
        <img
          src="/me.jpeg"
          alt="Portrait of Mohamed Soliman"
          className="w-full h-full object-cover object-top"
        />
        {/* Fade into background on the left edge of the image, and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/0 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Mobile portrait, inline below the headline */}
      <div className="md:hidden absolute inset-x-0 bottom-0 h-[42%]">
        <img
          src="/me.jpeg"
          alt="Portrait of Mohamed Soliman"
          className="w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Faint horizontal scan lines behind text, like reference */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 28px)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-10 h-full pt-32 pb-16 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-muted-foreground font-semibold mb-6"
        >
          Welcome to my profile
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-6 max-w-3xl"
        >
          <span className="text-primary">I'M</span>{" "}
          <span className="text-foreground">MOHAMED</span>
          <br />
          <span className="text-foreground">SOLIMAN.</span>
        </motion.h1>

        {/* Supporting copy, sits under the headline in the left column */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed mb-8"
        >
          Fourth-year Computer Science student building AI/ML models and
          turning raw data into clear, actionable insight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex items-center gap-6 mb-10"
        >
          <a
            href="#projects-section"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border text-sm font-semibold uppercase tracking-wide hover:bg-secondary transition-colors"
          >
            View Portfolio <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Projects stat, under the CTA in the left column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shrink-0">
            +25
          </div>
          <span className="text-xs uppercase tracking-wide text-muted-foreground leading-tight">
            Projects
            <br />
            Shipped So Far
          </span>
        </motion.div>

        {/* Socials, bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-6 md:left-10 bottom-8 flex items-center gap-6"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-soliman-295255244", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Eng-mohamed33", label: "GitHub" },
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
