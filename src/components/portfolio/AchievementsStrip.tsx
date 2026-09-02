import { motion } from "framer-motion";

const achievements = [
  { year: "2023", label: "Started Computer Science at Helwan University" },
  { year: "2025", label: "Built first ML regression project (Audi price prediction)" },
  { year: "2026", label: "Earned IBM & CISCO data analytics certifications" },
  { year: "2026", label: "Shipped a secure records system with RBAC" },
];

const AchievementsStrip = () => {
  return (
    <section className="py-20 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-10 text-center"
        >
          Milestones so far
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.year + a.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-primary mb-2">{a.year}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsStrip;
