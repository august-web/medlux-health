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
  { name: "Doreen Ackom-Owusu", role: "Founder & Medical Director", specialty: "FNP-BC • PMHNP-BC", image: founderImage },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-primary relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-glow/10 blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md"
            >
              <Shield className="w-3.5 h-3.5" />
              Our Journey & Vision
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">
              Healthcare <span className="text-secondary italic">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              We're on a mission to bring compassionate, high-quality medical care directly to you, 
              blending advanced technology with a deeply human touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 max-w-7xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="group">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-widest mb-6">
                  <Target className="w-5 h-5" />
                  Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                  Patient-Centered <span className="text-secondary">Excellence</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  To provide accessible, compassionate, and integrated healthcare that addresses
                  both the physical and mental well-being of every patient we serve, 
                  regardless of their circumstances.
                </p>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />
              
              <div className="group">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-teal-glow/10 text-teal-glow text-sm font-bold uppercase tracking-widest mb-6">
                  <Award className="w-5 h-5" />
                  Our Vision
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                  A Healthier <span className="text-teal-glow">Tomorrow</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  A world where quality healthcare is not a privilege but a right — where every
                  patient receives personalized, holistic care through seamless technological innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-elevated relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                  alt="Modern Healthcare" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-12 -left-12 glass-card p-8 rounded-[2rem] shadow-2xl z-20 max-w-[280px] backdrop-blur-xl border border-white/20 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30">
                    <Heart className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary mb-1">Compassionate</p>
                    <p className="text-sm text-slate-500 font-medium leading-tight">Treating the whole person, not just symptoms.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Frame */}
              <div className="absolute inset-0 border-2 border-slate-100 rounded-[4.5rem] -m-6 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The Values That Drive Us</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: Heart, 
                title: "Compassion", 
                desc: "Every patient is treated with empathy, dignity, and respect.", 
                iconColor: "text-secondary", 
                bgColor: "bg-secondary/10" 
              },
              { 
                icon: Shield, 
                title: "Integrity", 
                desc: "We uphold the highest ethical and clinical standards.", 
                iconColor: "text-teal-glow", 
                bgColor: "bg-teal-glow/10" 
              },
              { 
                icon: Users, 
                title: "Inclusivity", 
                desc: "Culturally sensitive care that welcomes all backgrounds.", 
                iconColor: "text-lavender", 
                bgColor: "bg-lavender/10" 
              },
              { 
                icon: Target, 
                title: "Innovation", 
                desc: "Leveraging technology to expand access and quality.", 
                iconColor: "text-secondary", 
                bgColor: "bg-secondary/10" 
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:translate-y-[-8px] transition-all duration-300 border border-white/40 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className={`w-7 h-7 ${v.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Evolution of Excellence</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">A history of unwavering commitment to our patients and the future of healthcare.</p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-secondary/20 to-transparent hidden md:block" />
            
            <div className="space-y-24">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div className={`glass-card p-10 rounded-[2.5rem] border border-slate-100 shadow-elevated w-full max-w-md relative group hover:border-secondary/20 transition-all duration-500 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full hidden md:block ${i % 2 === 0 ? '-left-[58px]' : '-right-[58px]'}`}>
                        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20" />
                      </div>
                      
                      <span className="text-3xl font-serif font-bold text-secondary mb-4 block">{m.year}</span>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">{m.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{m.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Refined */}
      <section className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto glass-card rounded-[4rem] overflow-hidden border border-white shadow-elevated">
            <div className="grid lg:grid-cols-2 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[500px] lg:min-h-full overflow-hidden group"
              >
                <img src={team[0].image} alt={team[0].name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border-white/20">
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{team[0].role}</p>
                    <h3 className="text-3xl font-serif font-bold text-white">{team[0].name}</h3>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-12 lg:p-24 flex flex-col justify-center bg-white"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-8">
                  <Shield className="w-4 h-4 text-teal-glow" />
                  Credentials: {team[0].specialty}
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-10 leading-tight">
                  A New Standard for <span className="text-secondary italic">Whole-Person</span> Care
                </h2>
                
                <div className="space-y-8">
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    With advanced training in Family and Psychiatric-Mental Health Nursing and a commitment to health equity, Doreen leads DeluxMed’s integrated model that bridges primary care and behavioral health.
                  </p>
                  
                  <div className="relative pt-10 border-t border-slate-100">
                    <div className="absolute -top-4 left-0 text-7xl text-secondary/10 font-serif leading-none">"</div>
                    <p className="text-2xl text-primary font-serif italic leading-relaxed relative z-10">
                      I saw too many patients falling through the cracks — treated for their physical symptoms but never asked about their emotional wellbeing. DeluxMed exists to change that.
                    </p>
                  </div>
                </div>
                
                <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-3 gap-8">
                  {[
                    { label: "Experience", val: "15+ Yrs" },
                    { label: "Patients", val: "5k+" },
                    { label: "Satisfaction", val: "98%" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-serif font-bold text-primary mb-1">{stat.val}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
