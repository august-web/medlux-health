import { motion } from "framer-motion";
import founderImage from "@/assets/founder-portrait.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={founderImage}
                alt="Dr. Sarah Mitchell, Medical Director"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
                <p className="text-sm font-medium" style={{ color: 'hsl(172, 45%, 60%)' }}>Medical Director</p>
                <h3 className="text-2xl font-serif font-bold" style={{ color: 'hsl(40, 33%, 98%)' }}>
                  Dr. Sarah Mitchell, MD
                </h3>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-lavender/50 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
              Meet Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A Vision for Better Healthcare
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in internal medicine and a deep commitment to
                health equity, Dr. Mitchell founded DeluxMed Health Group to bridge the gap
                between primary care and mental health.
              </p>
              <p>
                "I saw too many patients falling through the cracks — treated for their physical
                symptoms but never asked about their emotional wellbeing. DeluxMed exists to
                change that."
              </p>
              <p>
                Board-certified in Internal Medicine, Dr. Mitchell brings a patient-first philosophy
                that emphasizes listening, understanding, and treating the whole person.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5,000+", label: "Patients Served" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-serif font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
