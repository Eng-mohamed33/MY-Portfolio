import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
         

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-primary/60 via-primary/20 to-transparent shadow-2xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-secondary border border-border">
              <img
                src="/me.jpeg"
                alt="Portrait of Mohamed Soliman"
                className="w-full h-full object-cover"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            I'm{" "}
            <span className="text-gradient">Mohamed Soliman</span>
            <br />
            <span className="text-muted-foreground">
              Web Developer & Data Analyst
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            I build responsive web applications and turn complex data into
            actionable insights. Passionate about bridging the gap between clean
            code and data-driven decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-sky-400 text-black rounded-full font-medium border border-border hover:bg-sky-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setIsModalOpen(false)}
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
                  src="/me.jpeg"
                  alt="Portrait of Mohamed Soliman"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
