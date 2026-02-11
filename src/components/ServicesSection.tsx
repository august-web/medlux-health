import { motion } from "framer-motion";
import { Stethoscope, Brain, Pill, Activity, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Virtual Primary Care",
    description: "See your provider face-to-face from anywhere. Comprehensive visits for acute and chronic care.",
    color: "bg-accent text-primary",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    description: "Licensed therapists and psychiatric providers for anxiety, depression, trauma, and more.",
    color: "bg-lavender text-lavender-foreground",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Safe, coordinated medication reviews and prescriptions — all integrated in your care plan.",
    color: "bg-sky text-primary",
  },
  {
    icon: Activity,
    title: "Chronic Care Programs",
    description: "Ongoing support for diabetes, hypertension, and other conditions with personalized care plans.",
    color: "bg-accent text-primary",
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Healthcare for every stage of life. We welcome patients of all ages and backgrounds.",
    color: "bg-sand text-foreground",
  },
  {
    icon: Sparkles,
    title: "Wellness & Prevention",
    description: "Annual physicals, screenings, and health coaching to help you thrive — not just survive.",
    color: "bg-lavender text-lavender-foreground",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Services Designed Around You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From routine check-ups to specialized behavioral health, our care is always centered on what you need most.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
