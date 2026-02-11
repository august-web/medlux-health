import { motion } from "framer-motion";
import { Heart, Shield, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every interaction is guided by empathy. We listen, we understand, and we care deeply about your journey.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your health data is sacred. We use HIPAA-compliant platforms and enterprise-grade encryption to protect you.",
  },
  {
    icon: Users,
    title: "Inclusive Access",
    description: "Healthcare should be for everyone. We serve diverse communities with culturally sensitive, equitable care.",
  },
  {
    icon: Leaf,
    title: "Holistic Wellness",
    description: "We treat you — not just your symptoms. Mind, body, and spirit are all part of the care plan.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Built on Trust, Driven by Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is simple: make quality healthcare accessible, compassionate, and human.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
