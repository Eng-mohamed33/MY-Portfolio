import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  return (
    <section id="projects-section" className="py-24 border-t border-border scroll-mt-20">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-3">
              My featured projects
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Selected Works</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                to={`/project/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-lg mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
