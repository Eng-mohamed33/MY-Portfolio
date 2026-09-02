import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Computer Science",
    org: "Helwan University",
    period: "2023 – 2027",
    description: "Focused on data science, software engineering, and AI/ML foundations.",
  },
  {
    icon: Award,
    title: "Data Analysis Using Python",
    org: "IBM",
    period: "2026",
    description: "Certified in Python-based data cleaning, analysis, and visualization.",
  },
  {
    icon: Award,
    title: "Data Analytics Essentials",
    org: "CISCO",
    period: "2026",
    description: "Covered core analytics concepts, statistics, and data-driven decision making.",
  },
  {
    icon: Award,
    title: "Introduction to Modern AI",
    org: "CISCO",
    period: "2026",
    description: "Studied foundational machine learning and modern AI concepts.",
  },
  {
    icon: Award,
    title: "Introduction to Cybersecurity",
    org: "CISCO",
    period: "2026",
    description: "Learned core security principles applied in the SRMS project.",
  },
  {
    icon: Award,
    title: "Advanced Excel",
    org: "Microsoft",
    period: "2026",
    description: "Advanced formulas, pivot tables, and dashboard-building techniques.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience-section" className="py-24 border-t border-border scroll-mt-20">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-3">
            Education &amp; Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My Academic &amp; Learning Journey
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-base">{item.title}</h3>
                    <span className="text-xs text-primary font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
