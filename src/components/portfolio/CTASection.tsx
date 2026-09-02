import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-card border border-border p-10 md:p-16 text-center"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-4">
            Have a project in mind?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Let's Talk
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Then you're in the right place. Get the collaboration you're
            looking for — just reach out and let me know.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/201110904521"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary border border-border rounded-lg font-semibold text-sm hover:bg-secondary/70 transition-colors"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm uppercase tracking-wide hover:shadow-glow transition-all duration-300"
            >
              <Send size={16} /> Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
