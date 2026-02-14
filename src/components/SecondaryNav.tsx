import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Stethoscope, Info, User, BookOpen, MapPin, Phone, ChevronDown } from "lucide-react";

const SecondaryNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const servicesRef = useRef<HTMLButtonElement>(null);
  const resourcesRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleKeyDown = (e: React.KeyboardEvent, menuId: string) => {
    if (e.key === "Escape") {
      setOpenMenu(null);
      (menuId === "services" ? servicesRef : resourcesRef)?.current?.focus();
    }
    if (e.key === "ArrowDown") {
      const items = Array.from(
        (e.currentTarget.parentElement?.querySelectorAll<HTMLAnchorElement>("a[role='menuitem']") ?? [])
      );
      items[0]?.focus();
      e.preventDefault();
    }
  };

  return (
    <nav
      className="w-full border-t border-slate-100 bg-white/80 backdrop-blur-lg"
      aria-label="Secondary navigation"
      role="navigation"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-2 md:py-3">
          <button
            className="md:hidden inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
            aria-controls="secondary-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>
          <ul
            id="secondary-menu"
            className={`flex-1 md:flex items-center gap-4 md:gap-6 ${mobileOpen ? "block" : "hidden md:flex"}`}
          >
            <li>
              <Link
                to="/"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive("/") ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                ref={servicesRef}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  openMenu === "services" ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === "services"}
                aria-controls="services-submenu"
                onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
                onKeyDown={(e) => handleKeyDown(e, "services")}
              >
                <Stethoscope className="w-4 h-4" />
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                id="services-submenu"
                role="menu"
                className={`absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg ${
                  openMenu === "services" ? "block" : "hidden"
                }`}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to="/#services" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Virtual Primary Care
                </Link>
                <Link to="/#services" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Behavioral Health
                </Link>
                <Link to="/#integrated-care" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Integrated Care
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive("/about") ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                <Info className="w-4 h-4" />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/provider/doreen"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive("/provider/doreen") ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-current={isActive("/provider/doreen") ? "page" : undefined}
              >
                <User className="w-4 h-4" />
                Provider
              </Link>
            </li>

            <li className="relative">
              <button
                ref={resourcesRef}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  openMenu === "resources" ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === "resources"}
                aria-controls="resources-submenu"
                onClick={() => setOpenMenu(openMenu === "resources" ? null : "resources")}
                onKeyDown={(e) => handleKeyDown(e, "resources")}
              >
                <BookOpen className="w-4 h-4" />
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                id="resources-submenu"
                role="menu"
                className={`absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg ${
                  openMenu === "resources" ? "block" : "hidden"
                }`}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to="/faq/telehealth-security" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Telehealth Security FAQ
                </Link>
                <Link to="/privacy" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Privacy Policy
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-slate-700 hover:bg-slate-50"
              >
                <MapPin className="w-4 h-4" />
                Locations
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive("/contact") ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                }`}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav;
