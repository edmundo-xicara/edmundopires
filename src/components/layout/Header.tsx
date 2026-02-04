import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinksData = [
  { href: "/", labelKey: "nav.home" },
  { href: "/cases", labelKey: "nav.cases" },
  { href: "/sobre", labelKey: "nav.about" },
  { href: "/servicos", labelKey: "nav.services" },
  { href: "/portfolio", labelKey: "nav.portfolio" },
  { href: "/contato", labelKey: "nav.contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-xl font-semibold text-foreground">
            Edmundo Pires
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinksData.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link text-sm ${
                  location.pathname === link.href ? "text-foreground" : ""
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinksData.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
