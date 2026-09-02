import { motion } from "framer-motion";
import { Code2, BarChart3, Brain } from "lucide-react";

const skills = [
  { name: "React & TypeScript", level: 85, icon: Code2 },
  { name: "Python (Data & ML)", level: 88, icon: Brain },
  { name: "Power BI", level: 82, icon: BarChart3 },
  { name: "SQL", level: 80, icon: BarChart3 },
];

const AboutSkills = () => {
  return (
    <section id="about-section" className="py-24 border-t border-border scroll-mt-20">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-3">
            About myself
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            A Focused Overview of My Background &amp; Skills
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm Mohamed Soliman, a fourth-year Computer Science student at
            Helwan University with a passion for frontend development, data
            analysis, and AI/ML engineering — turning ideas into clean,
            functional products.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I bring both technical curiosity and a collaborative mindset to
            every project, and I'm always looking for the next hard problem
            worth solving.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-display text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years studying CS</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Projects shipped</div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <skill.icon size={16} className="text-primary" />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
