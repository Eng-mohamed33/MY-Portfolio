import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Play, X } from "lucide-react";

const projects = [
  {
    title: "Sales & Business Analytics Dashboard",
    label: "Team Collaboration",
    role: "Data Analyst",
    description: "Created a professional Power BI dashboard to analyze sales trends, track KPIs, and provide actionable business insights through interactive visualizations.",
    image: "/powerbi-project.jpg.png",
    tags: ["Power BI", "Data Visualization", "Excel"],
    premium: true,
    github: "#",
    live: "#",
  },
  {
    title: "Audi Car Price Prediction",
    label: "Team Collaboration",
    role: "Machine Learning Developer",
    description: "A collaborative project where I led the Regression phase, achieving an R² score of 0.93 using Random Forest. Handled data cleaning and outlier removal for 10,000+ Audi car listings.",
    image: "/ml-project.jpg.png",
    tags: ["Random Forest", "Scikit-Learn", "EDA", "Data Cleaning", "Python"],
    premium: true,
    github: "https://github.com/Eng-mohamed33/Audi-Price-Prediction-",
    live: "#",
    buttons: [
      { label: "View Code", action: "code" }
    ]
  },
  {
    title: "Team-Based AI Skills Recognition",
    label: "Team Collaboration",
    role: "Deep Learning Engineer",
    description: "A collaborative deep learning project where I took full ownership of developing the InceptionV3 architecture. My work is contained in the second notebook of the repository (PROJECT_AI_SKILLS_EDIT_1_ (1).ipynb), where I implemented multi-scale feature extraction to optimize recognition accuracy.",
    image: "/placeholder.svg",
    tags: ["InceptionV3", "Deep Learning", "Multi-scale Features", "Team Collaboration"],
    premium: true,
    github: "https://github.com/Eng-mohamed33/-AI-Skills-Recognition/tree/main",
    live: "#",
    buttons: [
      { label: "View Code", action: "code" }
    ]
  },
  {
    title: "Secure Student Records System (SRMS)",
    label: "Team Collaboration Project",
    description: "A secure management system built with Python and SQL Server. I architected the security layer using SHA-256 hashing and implemented Role-Based Access Control (RBAC) for different user levels.",
    image: "/placeholder.svg",
    tags: ["Python", "SQL Server", "CyberSecurity", "Desktop GUI"],
    github: "#",
    live: "#",
    demoVideo: "/srms-demo.mp4",
    buttons: [
      { label: "Watch Demo", action: "demo" }
    ]
  },
  
];

const Projects = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [videoModalSrc, setVideoModalSrc] = useState<string | null>(null);

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
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and passion 
            for creating meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl overflow-hidden transition-all duration-300 ${project.premium ? 'border-4 border-sky-400 shadow-xl' : 'border border-border overflow-hidden shadow-card hover:border-primary/50'}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-secondary transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                {project.role && (
                  <span className="inline-block mb-3 mr-2 px-3 py-1 bg-sky-50 text-sky-700 text-xs rounded-full font-semibold">
                    {project.role}
                  </span>
                )}
                {"label" in project && (project as { label?: string }).label && (
                  <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {(project as { label: string }).label}
                  </span>
                )}
                <p className="text-muted-foreground text-sm mb-4">
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
                {"buttons" in project && (project as { buttons?: Array<{ label: string; action: string }> }).buttons ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(project as { buttons: Array<{ label: string; action: string }> }).buttons.map((btn) => (
                      <motion.button
                        key={btn.label}
                        onClick={() => {
                          if (btn.action === "demo" && "demoVideo" in project) {
                            setVideoModalSrc((project as { demoVideo: string }).demoVideo);
                          } else if (btn.action === "code" && "github" in project) {
                            window.open((project as { github: string }).github, "_blank");
                          }
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-glow transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {btn.action === "demo" && <Play size={18} fill="currentColor" />}
                        {btn.label}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <>
                    {"demoVideo" in project && (project as { demoVideo?: string }).demoVideo && (
                      <motion.button
                        onClick={() => setVideoModalSrc((project as { demoVideo: string }).demoVideo)}
                        className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-glow transition-all duration-300 w-full justify-center sm:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Play size={18} fill="currentColor" />
                        Watch Demo
                      </motion.button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </motion.button>

                {/* Image */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  src={lightboxImage}
                  alt="Project preview"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain bg-white"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {videoModalSrc && (
          <motion.div
            key="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              key="video-modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-5xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={closeVideoModal}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close video"
                >
                  <X size={24} />
                </motion.button>

                <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 aspect-video max-h-[80vh] sm:max-h-[85vh]">
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
    </section>
  );
};

export default Projects;
