import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mydwmtr6@gmail.com",
    href: "mailto:mydwmtr6@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01557189422",
    href: "tel:01557189422",
  },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear from you. Send me a message 
            and let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold mb-8">
              Get in touch
            </h3>
            {contactInfo.map((item, index) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 bg-card rounded-xl border border-border ${
                    item.href ? "hover:border-primary/50 transition-all cursor-pointer" : ""
                  }`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 w-full"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mt-8"
            >
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex items-center gap-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mohamed-soliman-295255244",
                    label: "LinkedIn",
                    external: true,
                  },
                  {
                    icon: Github,
                    href: "https://github.com/Eng-mohamed33",
                    label: "GitHub",
                    external: true,
                  },
                  {
                    icon: Phone,
                    href: "tel:01557189422",
                    label: "Phone",
                    external: false,
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
