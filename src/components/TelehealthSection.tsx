import { motion } from "framer-motion";
import { Monitor, CalendarCheck, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book Your Visit",
    description: "Schedule through our secure platform in minutes. Choose a time that fits your life.",
  },
  {
    icon: Lock,
    step: "02",
    title: "Secure Check-In",
    description: "Complete your intake on our HIPAA-compliant portal. Your data stays protected.",
  },
  {
    icon: Monitor,
    step: "03",
    title: "Meet Your Provider",
    description: "Connect via high-quality video. Receive the same quality care as an in-person visit.",
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Ongoing Support",
    description: "Get follow-ups, prescriptions, and care coordination — all through one secure platform.",
  },
];

const TelehealthSection = () => {
  return (
    <section id="telehealth" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/50 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-lavender/30 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Telehealth Made Simple
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quality healthcare shouldn't be complicated. Four simple steps to the care you deserve.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center mx-auto group-hover:shadow-elevated transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="xl">
            Start Telehealth Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TelehealthSection;
