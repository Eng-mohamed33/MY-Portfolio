import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

const educationData = [
  {
    institution: "Helwan National University",
    degree: "Bachelor's in Data Science",
    duration: "2023 – 2027",
    icon: GraduationCap,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-sky-400">
            My Educational Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building a strong foundation in data science and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-card hover:border-sky-400/50 transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-sky-400/20 flex items-center justify-center">
                      <IconComponent className="text-sky-400" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                          <Building2 size={16} />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sky-400 font-medium mt-3 md:mt-0">
                        <Calendar size={16} />
                        <span className="text-sm whitespace-nowrap">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
