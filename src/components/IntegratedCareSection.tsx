import { motion } from "framer-motion";
import { Heart, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntegratedCareSection = () => {
  return (
    <section id="integrated-care" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Our Approach
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Whole-Person Care,{" "}
            <span className="text-secondary italic">Reimagined</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe your mind and body aren't separate — your healthcare shouldn't be either.
            DeluxMed integrates primary care and behavioral health for truly comprehensive treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Primary Care */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-100 hover:border-secondary/20 hover:shadow-elevated transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                Primary Care
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Comprehensive medical care with a personal touch. From preventive wellness to chronic
                condition management — all accessible from the comfort of home.
              </p>
              <ul className="space-y-4 mb-10">
                {["Annual wellness visits", "Chronic disease management", "Preventive screenings", "Medication management"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white group/btn">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Behavioral Health */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-primary rounded-[2.5rem] p-10 lg:p-14 border border-primary/10 shadow-2xl hover:shadow-glow transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Behavioral Health
              </h3>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                Expert mental health support woven into your care plan. Therapy, counseling,
                and psychiatric services — with the warmth you deserve.
              </p>
              <ul className="space-y-4 mb-10">
                {["Individual therapy", "Anxiety & depression care", "Substance use support", "Stress management"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-white/90 font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary shadow-sm shadow-secondary/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="heroOutline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-primary group/btn">
                Mental Wellness
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedCareSection;
