import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const BehavioralHealth = () => {
  const [openSchedule, setOpenSchedule] = useState(false);
  const SCHEDULE_URL = "https://secure.deluxmed.com/schedule";
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              <Brain className="w-3.5 h-3.5" />
              Behavioral Health
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Psychiatric & Behavioral Care</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Board-certified NP delivering medication management and trauma-informed care. Serving Baltimore and Maryland via secure telehealth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">What it is</h2>
              <p className="text-slate-700">Evidence-based psychiatric care with careful monitoring, education, and integrated support.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Who it’s for</h2>
              <p className="text-slate-700">Adults seeking help for depression, anxiety, bipolar disorder, ADHD, and related conditions.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Conditions treated</h2>
              <p className="text-slate-700">Depression, anxiety, bipolar disorder, ADHD, insomnia; medication side-effect management and safety monitoring.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">What to expect</h2>
              <p className="text-slate-700">Collaborative care, clear education on risks/benefits, follow-up schedules, and privacy-first telehealth.</p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Location</p>
              <p className="flex items-center gap-2 text-primary font-serif font-bold">
                <MapPin className="w-4 h-4" />
                Baltimore, Maryland
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Ready to begin?</h3>
              <Button className="w-full" onClick={() => setOpenSchedule(true)}>Schedule Secure Visit</Button>
            </div>
          </aside>
        </div>
      </section>

      <Footer />

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
    </div>
  );
};

export default BehavioralHealth;
