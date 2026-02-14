import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import NavDropdown from "@/components/NavDropdown";
import SecondaryNav from "@/components/SecondaryNav";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Primary Care", href: "/services/primary-care" },
  { label: "Behavioral Health", href: "/services/behavioral-health" },
  { label: "Telehealth", href: "/telehealth" },
  { label: "Provider", href: "/provider/doreen" },
  { label: "Resources", href: "/faq/telehealth-security" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On inner pages, always show scrolled style
  const showScrolledStyle = isScrolled || !isHome;

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showScrolledStyle
          ? "bg-white/80 backdrop-blur-lg shadow-soft border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className={`text-xl font-serif font-bold tracking-tight transition-colors duration-300 ${showScrolledStyle ? "text-primary" : "text-white"}`}>
                DeluxMed
              </span>
              <span className={`block text-[10px] font-bold uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${showScrolledStyle ? "text-slate-500" : "text-white/70"}`}>
                Health Group
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-semibold tracking-wide hover:text-secondary transition-colors duration-300 ${
                  showScrolledStyle ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Button
              size="lg"
              className={`rounded-full px-8 font-bold transition-all duration-300 ${
                showScrolledStyle
                  ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                  : "bg-white text-primary hover:bg-secondary hover:text-primary shadow-xl"
              }`}
            >
              Patient Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={showScrolledStyle ? "text-primary" : "text-white"} />
            ) : (
              <Menu className={showScrolledStyle ? "text-primary" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">About</p>
                <div className="space-y-2">
                  <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-foreground hover:text-primary transition-colors">
                    Our Story
                  </Link>
                  <Link to="/provider/doreen" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-foreground hover:text-primary transition-colors">
                    Provider: Doreen Ackom-Owusu
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Resources</p>
                <div className="space-y-2">
                  <Link to="/faq/telehealth-security" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-foreground hover:text-primary transition-colors">
                    Telehealth Security FAQ
                  </Link>
                  <Link to="/privacy" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <Button variant="default" size="lg" className="w-full mt-4">
                Book via Secure Platform
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <div className={showScrolledStyle ? "" : "hidden"}>
      <SecondaryNav />
    </div>
    </>
  );
};

export default Navbar;
