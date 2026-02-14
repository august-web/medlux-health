import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold tracking-tight text-white">
                  DeluxMed
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 -mt-1">
                  Health Group
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-xs">
              Pioneering integrated healthcare through a seamless blend of primary care and behavioral wellness. Compassionate care, delivered anywhere.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer group">
                  <div className="w-4 h-4 bg-white/40 group-hover:bg-primary rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Expertise
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Virtual Primary Care", href: "/#services" },
                { label: "Behavioral Health", href: "/#services" },
                { label: "Integrated Care", href: "/#integrated-care" },
                { label: "Medication Management", href: "/#services" },
                { label: "Chronic Care", href: "/#services" },
                { label: "Wellness & Prevention", href: "/#services" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 text-sm hover:text-secondary hover:translate-x-1 inline-block transition-all">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Organization
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About Our Story", to: "/about" },
                { label: "Telehealth Security FAQ", to: "/faq/telehealth-security" },
                { label: "Provider: Doreen Ackom-Owusu", to: "/provider/doreen" },
                { label: "Privacy Commitment", to: "/privacy" },
                { label: "Terms of Service", to: "#" },
                { label: "Contact Us", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-white/60 text-sm hover:text-secondary hover:translate-x-1 inline-block transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Get in Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">Call Us</p>
                  <a href="tel:+12407808930" className="text-white/80 hover:text-secondary transition-colors text-sm font-medium">(240) 780-8930</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">Email Support</p>
                  <a href="mailto:care@deluxmed.com" className="text-white/80 hover:text-secondary transition-colors text-sm font-medium">care@deluxmed.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <p className="text-white/40 text-xs">
                © {new Date().getFullYear()} DeluxMed Health Group, LLC.
              </p>
              <Link to="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</Link>
              <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">HIPAA Compliance</a>
            </div>
            <div className="text-white/70 text-[11px] md:text-sm text-center md:text-right">
              <div className="font-serif font-bold">DeluxMed Primary & Behavioral Health Services</div>
              <div className="font-medium">Operated by DeluxMed Health Group, LLC</div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>1503 E North Ave, Baltimore, MD 21213</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-1">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+12407808930" className="hover:text-secondary">(240) 780-8930</a>
              </div>
            </div>
            <p className="text-white/30 text-[10px] md:text-xs italic text-center md:text-right max-w-md">
              Disclaimer: This website does not provide medical advice. For immediate medical emergencies, please call 911.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
