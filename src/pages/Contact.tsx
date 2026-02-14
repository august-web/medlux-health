import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(240) 780-8930",
    sub: "Mon–Fri, 8am–6pm EST",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "care@deluxmed.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "1503 E North Ave",
    sub: "Baltimore, MD 21213",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Mon–Fri, 8am–6pm",
    sub: "Saturday by appointment",
  },
];

const Contact = () => {
  const [openExisting, setOpenExisting] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const PORTAL_URL = "https://secure.deluxmed.com/portal";
  const SCHEDULE_URL = "https://secure.deluxmed.com/schedule";
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
              Contact Us
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">
              We're Here <span className="text-secondary italic">for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              Have questions about our services or need help accessing the portal? Reach out — our team is ready to assist you with compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-glow/5 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/40 hover:translate-y-[-8px] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">{method.title}</h3>
                <p className="text-foreground font-bold text-base mb-1">{method.detail}</p>
                <p className="text-sm text-muted-foreground">{method.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 rounded-[3rem] border-l-8 border-secondary relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                Existing Patients
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Access your secure patient portal to view records, message your provider, or schedule follow-up visits with ease.
              </p>
              <Button variant="hero" size="lg" className="w-full group py-7 text-lg rounded-2xl shadow-xl hover:shadow-secondary/20" onClick={() => setOpenExisting(true)}>
                Access Secure Portal
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-12 rounded-[3rem] border-l-8 border-teal-glow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-glow/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="w-16 h-16 rounded-2xl bg-teal-glow/10 flex items-center justify-center mb-8">
                <Phone className="w-8 h-8 text-teal-glow" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                New Patients
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Ready to start your care journey? Book your first telehealth visit through our secure scheduling platform.
              </p>
              <Button variant="hero" size="lg" className="w-full group py-7 text-lg rounded-2xl shadow-xl hover:shadow-teal-glow/20" onClick={() => setOpenNew(true)}>
                Book via Secure Platform
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={openExisting} onOpenChange={setOpenExisting}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-primary">Leaving DeluxMed</DialogTitle>
            <DialogDescription>
              You are being redirected to our HIPAA-compliant patient portal. No medical information is collected on this website.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 mt-6">
            <Button className="flex-1" onClick={() => window.open(PORTAL_URL, "_blank", "noopener")}>
              Continue to Portal
            </Button>
            <Button variant="ghost" className="flex-1" onClick={() => setOpenExisting(false)}>
              Stay Here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openNew} onOpenChange={setOpenNew}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-primary">Leaving DeluxMed</DialogTitle>
            <DialogDescription>
              You are being redirected to our HIPAA-compliant scheduling platform. No medical information is collected on this website.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 mt-6">
            <Button className="flex-1" onClick={() => window.open(SCHEDULE_URL, "_blank", "noopener")}>
              Continue to Schedule
            </Button>
            <Button variant="ghost" className="flex-1" onClick={() => setOpenNew(false)}>
              Stay Here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Emergency Notice - Enhanced */}
      <section className="py-24 lg:py-40 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 rounded-[2.5rem] border border-red-500/20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Emergency Information
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This website is for informational purposes only. 
                If you are experiencing a medical emergency, please call <strong className="text-primary font-bold">911</strong> immediately. 
                For the Suicide & Crisis Lifeline, call or text <strong className="text-primary font-bold">988</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
