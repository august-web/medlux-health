import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [openPortal, setOpenPortal] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  const PORTAL_URL = "https://secure.deluxmed.com/portal";
  const SCHEDULE_URL = "https://secure.deluxmed.com/schedule";
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern telehealth consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              HIPAA-Compliant Telehealth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white"
          >
            Nurse Practitioner–Led Primary & Behavioral Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl text-white/80"
          >
            Integrated, evidence-based care serving Baltimore and Maryland. Compassionate, secure telehealth on HIPAA-compliant platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group" onClick={() => setOpenPortal(true)}>
              Access Secure Portal
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => setOpenSchedule(true)}
            >
              Schedule Secure Visit
            </Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-3 text-white/70">
            <Lock className="w-4 h-4 text-secondary" />
            <span className="text-sm">All appointments and portals handled via HIPAA-compliant partners</span>
          </div>
        </div>
      </div>

      {/* Subtle bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 72C120 64 240 48 360 42.7C480 37 600 43 720 48C840 53 960 59 1080 56C1200 53 1320 43 1380 37.3L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(40, 33%, 98%)"
          />
        </svg>
      </div>
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
      <Dialog open={openSchedule} onOpenChange={setOpenSchedule}>
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
            <Button variant="ghost" className="flex-1" onClick={() => setOpenSchedule(false)}>
              Stay Here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
