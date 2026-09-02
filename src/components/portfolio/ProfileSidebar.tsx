import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  X,
  Code2,
  BarChart3,
  Wrench,
  User,
  Briefcase,
  Terminal,
} from "lucide-react";

const navItems = [
  { label: "About", icon: User, href: "#about-section" },
  { label: "Experience", icon: Briefcase, href: "#experience-section" },
  { label: "Stack", icon: Terminal, href: "#stack-section" },
];

const services = [
  {
    title: "AI / ML Engineering",
    items: ["React & TypeScript", "Responsive UI", "Tailwind CSS", "Next.js", "Landing pages"],
  },
  {
    title: "Data Analysis",
    items: ["Power BI dashboards", "Excel (Advanced)", "Python for data analysis", "SQL"],
  },
  {
    title: "AI / ML Engineering",
    items: ["Deep learning models", "Regression & prediction", "Model evaluation", "Data cleaning & EDA"],
  },
];

const stack = [
  { name: "React", role: "Frontend", icon: Code2 },
  { name: "TypeScript", role: "Frontend", icon: Code2 },
  { name: "Python", role: "Data & ML", icon: BarChart3 },
  { name: "Power BI", role: "Data Analysis", icon: BarChart3 },
  { name: "SQL", role: "Data Analysis", icon: BarChart3 },
  { name: "Git & GitHub", role: "Tooling", icon: Wrench },
];

const experience = [
  {
    role: "Bachelor's in Data Science",
    org: "Helwan National University",
    period: "2023 – 2027",
  },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "mydwmtr6@gmail.com", href: "mailto:mydwmtr6@gmail.com" },
  { icon: Phone, label: "Phone", value: "01557189422", href: "tel:01557189422" },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-soliman-295255244", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Eng-mohamed33", label: "GitHub" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

const ProfileSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-0">
      {/* Brand */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-10">
        <h1 className="font-display text-2xl md:text-[1.75rem] font-bold tracking-wide uppercase">
          Mohamed<span className="text-primary">_01</span>
        </h1>
        <p className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wide">
          AI Engineer &amp; Data Analyst
        </p>
      </motion.div>

      {/* Icon nav */}
      <motion.nav
        custom={0.5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1 mb-10"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
          >
            <item.icon size={16} className="text-primary" />
            {item.label}
          </a>
        ))}
      </motion.nav>

      {/* Availability badge */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border text-sm text-muted-foreground mb-8 w-fit"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Available for work.
      </motion.div>

      {/* Identity */}
      <motion.div
        custom={1.5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-4 mb-6"
      >
        <motion.div
          className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-primary/70 via-primary/20 to-transparent cursor-pointer flex-shrink-0"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-secondary border border-border">
            <img
              src="/me.jpeg"
              alt="Portrait of Mohamed Soliman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold leading-tight">
            Mohamed Soliman
          </h2>
          <p className="text-muted-foreground text-sm">
            AI Engineer &amp; Data Analyst
          </p>
        </div>
      </motion.div>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-lg text-foreground/90 mb-8 leading-relaxed"
      >
        I build intelligent AI/ML models and turn complex data into
        actionable insights, bridging clean code and data-driven decisions.
      </motion.p>

      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show">
        <motion.a
          href="#contact-info"
          className="inline-block w-full text-center px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold uppercase tracking-wide text-sm hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in touch
        </motion.a>
      </motion.div>

      <div className="h-px bg-border my-10" />

      {/* About me */}
      <motion.div
        id="about-section"
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mb-10 scroll-mt-6"
      >
        <h2 className="font-display text-xl font-semibold mb-3">About me.</h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm Mohamed Soliman, a fourth-year Computer Science student at Helwan
          University with a passion for frontend development, data analysis,
          and AI/ML engineering — turning ideas into clean, functional
          products.
        </p>
      </motion.div>

      {/* Services */}
      <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="mb-10">
        <h2 className="font-display text-xl font-semibold mb-4">Services.</h2>
        <div className="space-y-6">
          {services.map((service, i) => (
            <div key={service.title}>
              <h3 className="font-medium mb-2">
                {i + 1}. {service.title}
              </h3>
              <ul className="space-y-1">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="h-px bg-border my-10" />

      {/* Stack */}
      <motion.div
        id="stack-section"
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mb-10 scroll-mt-6"
      >
        <h2 className="font-display text-xl font-semibold mb-4">Stack.</h2>
        <div className="space-y-4">
          {stack.map((tool) => (
            <div key={tool.name} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <tool.icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{tool.name}</div>
                <div className="text-xs text-muted-foreground">{tool.role}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="h-px bg-border my-10" />

      {/* Experience / Education */}
      <motion.div
        id="experience-section"
        custom={7}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mb-10 scroll-mt-6"
      >
        <h2 className="font-display text-xl font-semibold mb-4">Experience.</h2>
        <div className="space-y-5">
          {experience.map((exp) => (
            <div key={exp.role}>
              <h3 className="font-medium">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.org} <span className="mx-1">·</span> {exp.period}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="h-px bg-border my-10" />

      {/* Contact */}
      <motion.div custom={8} variants={fadeUp} initial="hidden" animate="show" id="contact-info">
        <h2 className="font-display text-xl font-semibold mb-4">Contact.</h2>
        <div className="space-y-3 mb-6">
          {contactInfo.map((item) => {
            const content = (
              <>
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </>
            );
            return item.href ? (
              <a key={item.label} href={item.href} className="flex items-center gap-3">
                {content}
              </a>
            ) : (
              <div key={item.label} className="flex items-center gap-3">
                {content}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Avatar lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-sm w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <X size={24} />
              </motion.button>
              <img
                src="/me.jpeg"
                alt="Portrait of Mohamed Soliman"
                className="w-full h-auto rounded-2xl shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileSidebar;
