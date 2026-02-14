import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Video, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const Telehealth = () => {
  const [openPortal, setOpenPortal] = useState(false);
  const PORTAL_URL = "https://secure.deluxmed.com/portal";
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              <Video className="w-3.5 h-3.5" />
              Telehealth
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Secure Telehealth Care</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              HIPAA-aware virtual care with encryption, access controls, and patient privacy protections. Serving Baltimore and across Maryland.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">How it works</h2>
              <p className="text-slate-700">Appointments are conducted via compliant platforms; no PHI is collected on this website.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Security standards</h2>
              <p className="text-slate-700">TLS encryption, access controls, audit logs, and business associate agreements with platform partners.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">What to expect</h2>
              <p className="text-slate-700">Private sessions, clear guidance, and follow-up plans. See our FAQ for details on privacy protections.</p>
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
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Access your portal</h3>
              <Button className="w-full" onClick={() => setOpenPortal(true)}>Access Secure Portal</Button>
              <div className="mt-4 text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                HIPAA-compliant platforms ensure privacy
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />

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
    </div>
  );
};

export default Telehealth;
