import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Certification = {
  title: string;
  provider: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "Introduction to Modern AI",
    provider: "CISCO",
    image: "/IntrotoModernAI CISCO-32-xa74s2_page-0001.jpg",
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "CISCO",
    image: "/Intoduction to CyberSecrity CISCO_page-0001.jpg",
  },
  {
    title: "Data Analytics Essential",
    provider: "CISCO",
    image: "/DataAnalyticsEssential CISCO _pages-to-jpg-0001.jpg",
  },
  {
    title: "Data Analysis Using Python",
    provider: "IBM",
    image: "/Data Analysis Using Python IBM_page-0001.jpg",
  },
  {
    title: "Advanced Excel",
    provider: "Microsoft",
    image: "/Advanced Excel certificate_page-0001.jpg",
  },
  {
    title: "Professional Certificate",
    provider: "Certification Provider",
    image: "/mohamed-soliman-certificate_page-0001.jpg",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Credentials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of courses and certifications that support my work as a Web
            Developer & Data Analyst.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.provider}-${cert.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-secondary/30">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.provider}`}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {cert.title}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground border border-border">
                  {cert.provider}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
