import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(555) 123-4567",
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
    detail: "Telehealth Nationwide",
    sub: "Serving patients across the US",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Mon–Fri, 8am–6pm",
    sub: "Saturday by appointment",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-teal-glow blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-lavender blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              We're Here for You
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Have questions about our services? Need help accessing the patient portal? Reach out — our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">{method.title}</h3>
                <p className="text-foreground font-medium text-sm mb-1">{method.detail}</p>
                <p className="text-xs text-muted-foreground">{method.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-10 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Existing Patients
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Access your secure patient portal to view records, message your provider, or schedule follow-up visits.
              </p>
              <Button variant="hero" size="lg" className="group">
                Access Secure Portal
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card rounded-2xl p-10 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-lavender-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                New Patients
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to start your care journey? Book your first telehealth visit through our secure scheduling platform.
              </p>
              <Button variant="hero" size="lg" className="group">
                Book via Secure Platform
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Important:</strong> This website is for informational purposes only. 
              If you are experiencing a medical emergency, please call <strong className="text-foreground">911</strong> immediately. 
              For the Suicide & Crisis Lifeline, call or text <strong className="text-foreground">988</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
