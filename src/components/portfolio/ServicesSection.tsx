import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Bot, Database } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI / ML Engineering",
    description:
      "Training and evaluating models for prediction and recognition tasks with Python.",
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description:
      "Turning raw data into clear dashboards and reports using Power BI, Excel, and SQL.",
  },
  {
    icon: Bot,
    title: "Deep Learning",
    description:
      "Building and fine-tuning neural networks for real-world recognition problems.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Cleaning, structuring, and preparing data pipelines ready for analysis and modeling.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-24 border-t border-border scroll-mt-20">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-3">
            What I do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold flex flex-col gap-1">
            {["Turning", "Ideas Into", "Digital Reality"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
