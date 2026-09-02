import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Play, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Building the Future, One Line at a Time",
    label: "SELECTED WORK",
    description:
      "A closer look at how I approach problems: clean code, thoughtful data, and interfaces people actually enjoy using.",
    image: "/hero-portrait.png",
    tags: ["Frontend", "Data Analysis", "AI/ML"],
    featured: true,
  },
  {
    title: "Sales & Business Analytics Dashboard",
    label: "Data Analyst",
    description:
      "A professional Power BI dashboard analyzing sales trends, tracking KPIs, and delivering actionable business insights through interactive visualizations.",
    image: "/powerbi-project.jpg.png",
    tags: ["Power BI", "Data Visualization", "Excel"],
  },
  {
    title: "Audi Car Price Prediction",
    label: "Machine Learning Developer",
    description:
      "Led the regression phase of a collaborative ML project, achieving an R² score of 0.93 with Random Forest across 10,000+ Audi listings.",
    image: "/ml-project.jpg.png",
    tags: ["Random Forest", "Scikit-Learn", "EDA", "Python"],
    github: "https://github.com/Eng-mohamed33/Audi-Price-Prediction-",
  },
  {
    title: "Team-Based AI Skills Recognition",
    label: "Deep Learning Engineer",
    description:
      "Built the InceptionV3 architecture for a team deep-learning project, implementing multi-scale feature extraction to optimize recognition accuracy.",
    image: "/placeholder.svg",
    tags: ["InceptionV3", "Deep Learning", "Multi-scale Features"],
    github: "https://github.com/Eng-mohamed33/-AI-Skills-Recognition/tree/main",
  },
  {
    title: "Secure Student Records System (SRMS)",
    label: "Security & Backend",
    description:
      "A secure records management system built with Python and SQL Server, with SHA-256 hashing and Role-Based Access Control (RBAC).",
    image: "/placeholder.svg",
    tags: ["Python", "SQL Server", "CyberSecurity", "Desktop GUI"],
    demoVideo: "/srms-demo.mp4",
  },
];

const WorkGallery = () => {
  const [videoModalSrc, setVideoModalSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideoModal = () => {
    videoRef.current?.pause();
    setVideoModalSrc(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideoModal();
    };
    if (videoModalSrc) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [videoModalSrc]);

  return (
    <div className="w-full">
      {/* Masonry grid: 2 columns on md+, 1 column on mobile */}
      <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden border border-border bg-card shadow-card ${
              project.featured ? "md:[column-span:all]" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-secondary ${
                project.featured
                  ? "aspect-[4/3] md:aspect-[16/9]"
                  : index % 3 === 0
                  ? "aspect-[3/4]"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                  project.featured ? "object-cover object-top" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {project.featured ? (
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <span className="inline-block px-3 py-1 mb-3 bg-white/90 text-black text-[11px] font-semibold uppercase tracking-wider rounded">
                    {project.label}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white max-w-lg leading-tight">
                    {project.title}
                  </h3>
                </div>
              ) : (
                /* Title overlay, bottom-left / bottom-right like reference */
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs md:text-sm font-medium truncate">
                    {project.title}
                  </span>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[11px] md:text-xs">
                    {project.label}
                  </span>
                </div>
              )}

              {/* Action buttons appear on hover */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.demoVideo && (
                  <motion.button
                    onClick={() => setVideoModalSrc(project.demoVideo)}
                    className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Watch demo"
                  >
                    <Play size={15} fill="currentColor" />
                  </motion.button>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View code"
                  >
                    <Github size={15} />
                  </motion.a>
                )}
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 flex items-center justify-center z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close video"
              >
                <X size={24} />
              </motion.button>
              <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 aspect-video">
                <video
                  ref={videoRef}
                  src={videoModalSrc}
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkGallery;
