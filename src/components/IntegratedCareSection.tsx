import { motion } from "framer-motion";
import { Heart, Brain, ArrowRight } from "lucide-react";

const IntegratedCareSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Whole-Person Care,{" "}
            <span className="text-gradient-primary">Reimagined</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe your mind and body aren't separate — your healthcare shouldn't be either.
            DeluxMed integrates primary care and behavioral health for truly comprehensive treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Primary Care */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border hover:shadow-elevated transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Primary Care
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Comprehensive medical care with a personal touch. From preventive wellness to chronic
              condition management — all accessible from the comfort of home.
            </p>
            <ul className="space-y-3 mb-8">
              {["Annual wellness visits", "Chronic disease management", "Preventive screenings", "Medication management"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Behavioral Health */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border hover:shadow-elevated transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-lavender flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-lavender-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Behavioral Health
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Expert mental health support woven into your care plan. Therapy, counseling,
              and psychiatric services — with the warmth you deserve.
            </p>
            <ul className="space-y-3 mb-8">
              {["Individual therapy", "Anxiety & depression care", "Substance use support", "Stress management"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-lavender-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-foreground group-hover:gap-3 transition-all">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedCareSection;
