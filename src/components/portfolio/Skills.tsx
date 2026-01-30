import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileSpreadsheet,
  BarChart3,
  Code,
  Database,
  Sparkles,
  Code2,
  GitBranch,
  FileCode,
  Layers,
  Atom,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 95, icon: FileCode },
      { name: "JavaScript & TypeScript", level: 88, icon: Code2 },
      { name: "React", level: 90, icon: Atom },
      { name: "Next.js", level: 82, icon: Layers },
      { name: "Tailwind CSS", level: 92, icon: Sparkles },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "Excel (Advanced)", level: 88, icon: FileSpreadsheet },
      { name: "Power BI", level: 85, icon: BarChart3 },
      { name: "Python for Data Analysis", level: 87, icon: Code },
      { name: "SQL", level: 83, icon: Database },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Cursor AI", level: 90, icon: Sparkles },
      { name: "VS Code", level: 93, icon: Code2 },
      { name: "SQL Server Management Studio", level: 85, icon: Database },
      { name: "Git & GitHub", level: 92, icon: GitBranch },
      { name: "Power BI", level: 88, icon: BarChart3 },
      { name: "Microsoft Excel", level: 91, icon: FileSpreadsheet },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm constantly learning and improving my skills. Here are the 
            technologies I work with most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border shadow-card"
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {Icon && (
                            <Icon
                              className="text-primary"
                              size={18}
                            />
                          )}
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
