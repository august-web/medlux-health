import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Shield, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const CTASection = () => {
  const [openVisit, setOpenVisit] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);
  const VISIT_URL = "https://secure.deluxmed.com/schedule";
  const PORTAL_URL = "https://secure.deluxmed.com/portal";
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -mr-96 -mt-96 opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48 opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-10 backdrop-blur-md"
          >
            <Lock className="w-4 h-4 text-secondary" />
            Secure & HIPAA-Compliant
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-tight">
            Experience Healthcare <span className="text-secondary italic">Done Right</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
            Take the first step toward integrated, compassionate care. Schedule your
            telehealth visit today through our secure platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="xl"
              className="bg-secondary text-primary hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-secondary/20 font-bold text-lg rounded-full px-10 group"
              onClick={() => setOpenVisit(true)}
            >
              Start Telehealth Visit
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all font-bold text-lg rounded-full px-10"
              onClick={() => setOpenPortal(true)}
            >
              Access Patient Portal
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40">
            {/* Minimal trust badges or text */}
            <div className="flex items-center gap-2 text-white font-semibold tracking-widest text-xs uppercase">
              <Shield className="w-4 h-4" /> Fully Encrypted
            </div>
            <div className="flex items-center gap-2 text-white font-semibold tracking-widest text-xs uppercase">
              <Lock className="w-4 h-4" /> HIPAA Certified
            </div>
            <div className="flex items-center gap-2 text-white font-semibold tracking-widest text-xs uppercase">
              <Heart className="w-4 h-4" /> Patient-First Care
            </div>
          </div>
        </motion.div>
      </div>
      <Dialog open={openVisit} onOpenChange={setOpenVisit}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-primary">Leaving DeluxMed</DialogTitle>
            <DialogDescription>
              You are being redirected to our HIPAA-compliant scheduling platform. No medical information is collected on this website.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 mt-6">
            <Button className="flex-1" onClick={() => window.open(VISIT_URL, "_blank", "noopener")}>
              Continue to Schedule
            </Button>
            <Button variant="ghost" className="flex-1" onClick={() => setOpenVisit(false)}>
              Stay Here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openPortal} onOpenChange={setOpenPortal}>
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
            <Button variant="ghost" className="flex-1" onClick={() => setOpenPortal(false)}>
              Stay Here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
