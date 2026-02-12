import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-teal-glow blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/70 text-sm">
              Effective Date: January 1, 2024 — Last Updated: January 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
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
                >
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pi) => (
                      <p key={pi} className="text-muted-foreground leading-relaxed text-sm">
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
