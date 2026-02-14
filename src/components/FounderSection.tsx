import { motion } from "framer-motion";
import founderImage from "@/assets/founder-portrait.jpg";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-elevated group">
              <img
                src={founderImage}
                alt="Dr. Sarah Mitchell, Medical Director"
                className="w-full aspect-[4/5] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Founder & Medical Director</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    Dr. Sarah Mitchell, MD
                  </h3>
                </motion.div>
              </div>
            </div>
            
            {/* Background frames */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-secondary/30 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-secondary/20 rounded-2xl blur-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Visionary Leadership
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
              A New Standard for <span className="text-secondary italic">Whole-Person</span> Care
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                With over 15 years of experience in internal medicine and a deep commitment to
                health equity, Dr. Mitchell founded DeluxMed Health Group, LLC to bridge the gap
                between primary care and mental health.
              </p>
              <blockquote className="border-l-4 border-secondary pl-8 py-2 my-10 italic text-primary font-serif text-2xl">
                "I saw too many patients falling through the cracks. DeluxMed exists to treat the whole person, ensuring no one is ever defined by just their symptoms."
              </blockquote>
              <p>
                Board-certified in Internal Medicine, Dr. Mitchell brings a patient-first philosophy
                that emphasizes listening, understanding, and treating the whole person.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-3 gap-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5,000+", label: "Patients Served" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12"
              whileHover={{ x: 5 }}
            >
              <Button size="xl" className="rounded-full shadow-lg hover:shadow-glow transition-all">
                Learn About Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
