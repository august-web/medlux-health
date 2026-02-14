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
    <section id="trust" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Shield className="w-4 h-4 text-secondary" />
            Our Foundation
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Built on Trust, <span className="text-secondary italic">Driven by Care</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our mission is simple: make quality healthcare accessible, compassionate, and truly human.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-50 hover:border-secondary/20 hover:bg-slate-50/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
