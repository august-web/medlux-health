import { motion } from "framer-motion";
import { Heart, Users, Target, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderImage from "@/assets/founder-portrait.jpg";

const milestones = [
  { year: "2018", title: "Founded", description: "DeluxMed Health Group, LLC was established with a vision for integrated care." },
  { year: "2020", title: "Telehealth Launch", description: "Expanded to nationwide telehealth services during a time of unprecedented need." },
  { year: "2022", title: "Behavioral Health Integration", description: "Added comprehensive behavioral health services under one roof." },
  { year: "2024", title: "5,000+ Patients", description: "Reached a milestone of over 5,000 patients served with a 98% satisfaction rate." },
];

const team = [
  { name: "Dr. Sarah Mitchell, MD", role: "Founder & Medical Director", specialty: "Internal Medicine", image: founderImage },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-teal-glow blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-lavender blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Healthcare With Heart
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              At DeluxMed Health Group, LLC, we believe everyone deserves care that sees them as a whole person — not just a set of symptoms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide accessible, compassionate, and integrated healthcare that addresses
                both the physical and mental well-being of every patient we serve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to breaking down barriers between primary care and behavioral
                health, ensuring no patient falls through the cracks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-lavender flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-lavender-foreground" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A world where quality healthcare is not a privilege but a right — where every
                patient receives personalized, holistic care regardless of location or circumstance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where telehealth bridges the gap between communities
                and the exceptional care they deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">Our core values shape every decision we make and every patient we serve.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Compassion", desc: "Every patient is treated with empathy, dignity, and respect." },
              { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical and clinical standards." },
              { icon: Users, title: "Inclusivity", desc: "Culturally sensitive care that welcomes all backgrounds." },
              { icon: Target, title: "Innovation", desc: "Leveraging technology to expand access and quality." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">{m.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">{m.title}</h3>
                  <p className="text-muted-foreground">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-elevated"
            >
              <img src={team[0].image} alt={team[0].name} className="w-full aspect-[3/4] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">{team[0].role}</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">{team[0].name}</h2>
              <p className="text-sm text-muted-foreground mb-4">Specialty: {team[0].specialty}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years of experience in internal medicine and a deep commitment to health equity, Dr. Mitchell founded DeluxMed to bridge the gap between primary care and mental health.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                "I saw too many patients falling through the cracks — treated for their physical symptoms but never asked about their emotional wellbeing. DeluxMed exists to change that."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
