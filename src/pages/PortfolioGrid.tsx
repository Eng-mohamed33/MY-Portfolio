import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteNavbar from "@/components/portfolio/SiteNavbar";
import Footer from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

const PortfolioGrid = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-3">
              Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">All Projects</h1>
            <p className="text-muted-foreground mt-4">
              A growing collection of everything I've built — AI/ML models, data
              projects, and machine learning experiments.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
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
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioGrid;
