import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-serif font-bold tracking-tight" style={{ color: 'hsl(40, 33%, 95%)' }}>
                  DeluxMed
                </span>
                <span className="block text-[10px] uppercase tracking-widest -mt-1" style={{ color: 'hsl(40, 20%, 60%)' }}>
                  Health Group LLC
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(220, 15%, 55%)' }}>
              Integrated primary care and behavioral health. Compassionate, modern healthcare — from anywhere.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'hsl(40, 33%, 90%)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {["Primary Care", "Behavioral Health", "Telehealth Visits", "Medication Management", "Chronic Care", "Wellness Programs"].map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-sm transition-colors hover:text-primary" style={{ color: 'hsl(220, 15%, 55%)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'hsl(40, 33%, 90%)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Mission", to: "/about" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm transition-colors hover:text-primary" style={{ color: 'hsl(220, 15%, 55%)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'hsl(40, 33%, 90%)' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm" style={{ color: 'hsl(220, 15%, 55%)' }}>
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+12407808930" className="hover:text-primary transition-colors">(240) 780-8930</a>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: 'hsl(220, 15%, 55%)' }}>
                <Mail className="w-4 h-4 text-primary" />
                care@deluxmed.com
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: 'hsl(220, 15%, 55%)' }}>
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>1503 E North Ave<br />Baltimore, MD 21213</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8" style={{ borderColor: 'hsl(220, 20%, 22%)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: 'hsl(220, 15%, 45%)' }}>
              © {new Date().getFullYear()} DeluxMed Health Group, LLC. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: 'hsl(220, 15%, 45%)' }}>
              This website does not provide medical advice. For emergencies, call 911.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
