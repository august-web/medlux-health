import { motion } from "framer-motion";
import { Stethoscope, Brain, Pill, Activity, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Virtual Primary Care",
    description: "See your provider face-to-face from anywhere. Comprehensive visits for acute and chronic care.",
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    description: "Licensed therapists and psychiatric providers for anxiety, depression, trauma, and more.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Safe, coordinated medication reviews and prescriptions — all integrated in your care plan.",
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Activity,
    title: "Chronic Care Programs",
    description: "Ongoing support for diabetes, hypertension, and other conditions with personalized care plans.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Healthcare for every stage of life. We welcome patients of all ages and backgrounds.",
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sparkles,
    title: "Wellness & Prevention",
    description: "Annual physicals, screenings, and health coaching to help you thrive — not just survive.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
            Excellence in Care
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Services Designed Around You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From routine check-ups to specialized behavioral health, our care is always centered on what you need most.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-10 border border-slate-100 hover:border-secondary/20 hover:shadow-elevated transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
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
