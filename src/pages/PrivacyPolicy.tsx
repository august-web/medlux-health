import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect personal information that you voluntarily provide to us when you express interest in obtaining information about our services, such as your name, email address, and phone number.",
      "We do not collect protected health information (PHI) through this website. All medical information is handled through our HIPAA-compliant clinical platforms.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, provide customer support, and communicate with you about our services.",
      "We may use your contact information to send you updates about our services, but you may opt out at any time.",
      "We do not sell, rent, or share your personal information with third parties for their marketing purposes.",
    ],
  },
  {
    title: "HIPAA Compliance",
    content: [
      "DeluxMed Health Group, LLC is fully committed to protecting the privacy and security of your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA).",
      "All clinical interactions, medical records, and protected health information (PHI) are handled exclusively through our HIPAA-compliant telehealth platforms with enterprise-grade encryption.",
      "Our Notice of Privacy Practices is available upon request and will be provided to all patients prior to their first visit.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmissions are encrypted using industry-standard SSL/TLS protocols. Our clinical platforms use end-to-end encryption for all telehealth communications.",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "This website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic.",
      "You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or services, such as our secure patient portal and telehealth platforms. We are not responsible for the privacy practices of these external sites.",
      "We encourage you to review the privacy policies of any third-party services you access through our website.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to, correction of, or deletion of your personal information at any time by contacting us.",
      "If you are a patient, you have additional rights under HIPAA regarding your protected health information, including the right to access, amend, and receive an accounting of disclosures.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at care@deluxmed.com or call (240) 780-8930.",
    ],
  },
];

const PrivacyPolicy = () => {
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
              Legal Commitment
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">
              Privacy <span className="text-secondary italic">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              Effective Date: January 1, 2024 — Last Updated: January 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-glow/5 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-16 text-center"
            >
              At DeluxMed Health Group, LLC, your privacy is our priority. This Privacy Policy
              explains how we collect, use, and protect your personal information when you
              visit our website.
            </motion.p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-8 rounded-3xl border border-white/40 hover:translate-y-[-8px] transition-all duration-300 group"
                >
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pi) => (
                      <p key={pi} className="text-slate-600 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
