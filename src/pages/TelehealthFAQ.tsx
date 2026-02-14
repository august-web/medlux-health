import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "How is my telehealth data protected?",
    a: "All sessions are encrypted in transit using TLS and at rest using industry-standard encryption. Access is restricted to authorized clinical staff.",
  },
  {
    q: "Do you use HIPAA-compliant platforms?",
    a: "Yes. Our telehealth and patient portal partners maintain HIPAA compliance and provide BAAs, audit logs, and role-based access controls.",
  },
  {
    q: "Will the website collect my medical information?",
    a: "No. This website is informational-only and does not collect PHI. All clinical workflows occur on partner platforms with appropriate safeguards.",
  },
  {
    q: "What certifications do your platforms have?",
    a: "Our partners maintain security certifications such as SOC 2 and HITRUST as applicable. We continuously review their compliance documentation.",
  },
  {
    q: "What are my privacy rights?",
    a: "Patients have rights under HIPAA to access, amend, and receive an accounting of disclosures. Contact us to exercise these rights.",
  },
];

const TelehealthFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              Telehealth Security FAQ
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">
              Your Privacy, Protected
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              Clear answers about encryption, platform compliance, and patient privacy protections.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((f) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-3xl border border-white/40"
              >
                <h2 className="text-xl font-serif font-bold text-primary mb-3">{f.q}</h2>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
};

export default TelehealthFAQ;
