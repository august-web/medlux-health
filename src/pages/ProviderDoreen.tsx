import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, GraduationCap, Stethoscope } from "lucide-react";

const ProviderDoreen = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "DeluxMed Primary & Behavioral Health Services",
    "legalName": "DeluxMed Health Group, LLC",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1503 E North Ave",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "postalCode": "21213",
      "addressCountry": "US"
    },
    "telephone": "(240) 780-8930",
    "url": "https://www.deluxmed.com"
  };

  const providerSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProfessional",
    "name": "Doreen Ackom-Owusu",
    "honorificSuffix": "DNP(c), MSN, MPH, FNP-BC, PMHNP-BC",
    "medicalSpecialty": ["Primary Care", "Behavioral Health", "Psychiatric Nursing"],
    "affiliation": {
      "@type": "Organization",
      "name": "DeluxMed Health Group, LLC"
    },
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "DeluxMed Primary & Behavioral Health Services"
    },
    "telephone": "(240) 780-8930",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1503 E North Ave",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "postalCode": "21213",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.google.com/maps?cid=DeluxMed",
      "https://www.healthgrades.com",
      "https://www.linkedin.com"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-primary relative overflow-hidden">
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
              Provider Authority
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">
              Doreen Ackom-Owusu
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              DNP(c), MSN, MPH, FNP-BC, PMHNP-BC — Nurse Practitioner specializing in integrated primary and behavioral healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-8">
                <GraduationCap className="w-4 h-4 text-secondary" />
                Credentials
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] border border-slate-100 hover:border-secondary/20 transition-all duration-300">
                <ul className="space-y-4 text-slate-700 leading-relaxed">
                  <li>Doctor of Nursing Practice (Candidate)</li>
                  <li>Master of Science in Nursing (MSN)</li>
                  <li>Master of Public Health (MPH)</li>
                  <li>Family Nurse Practitioner – Board Certified (FNP-BC)</li>
                  <li>Psychiatric-Mental Health Nurse Practitioner – Board Certified (PMHNP-BC)</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-glow/10 border border-teal-glow/20 text-teal-glow text-sm font-bold mb-8">
                <Stethoscope className="w-4 h-4" />
                Clinical Interests
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] border border-slate-100 hover:border-secondary/20 transition-all duration-300">
                <ul className="space-y-4 text-slate-700 leading-relaxed">
                  <li>Chronic disease management (diabetes, hypertension, COPD)</li>
                  <li>Psychiatric medication management and monitoring</li>
                  <li>Trauma-informed, culturally responsive care</li>
                  <li>Telehealth security and patient privacy protections</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/40">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Organization</p>
              <p className="text-primary font-serif font-bold text-xl">DeluxMed Primary & Behavioral Health Services</p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/40">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Address</p>
              <p className="text-primary font-serif font-bold text-xl">1503 E North Ave, Baltimore, MD 21213</p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/40">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</p>
              <p className="text-primary font-serif font-bold text-xl">(240) 780-8930</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerSchema) }} />
    </div>
  );
};

export default ProviderDoreen;
