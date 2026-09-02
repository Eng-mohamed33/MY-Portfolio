import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import SiteNavbar from "@/components/portfolio/SiteNavbar";
import Footer from "@/components/portfolio/Footer";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [videoOpen, setVideoOpen] = useState(false);
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/portfolio" replace />;

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      <article className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-12 mb-14"
          >
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                {project.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/70 transition-colors"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
                  >
                    <ExternalLink size={16} /> Live Preview
                  </a>
                )}
                {project.demoVideo && (
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
                  >
                    <Play size={16} fill="currentColor" /> Watch Demo
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 h-fit space-y-4">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</div>
                <div className="font-medium text-sm">{project.role}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Year</div>
                <div className="font-medium text-sm">{project.year}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Scope</div>
                <div className="font-medium text-sm">{project.scope}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-border bg-secondary mb-14 aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {(project.challenge || project.solution) && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {project.challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-xl font-semibold mb-3">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </motion.div>
              )}
              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="font-display text-xl font-semibold mb-3">The Approach</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </motion.div>
              )}
            </div>
          )}

          {otherProjects.length > 0 && (
            <div className="border-t border-border pt-14">
              <h2 className="font-display text-2xl font-bold mb-8">More Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/project/${p.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {p.category}
                      </span>
                      <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {videoOpen && project.demoVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <video src={project.demoVideo} controls autoPlay className="w-full h-full rounded-xl" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
