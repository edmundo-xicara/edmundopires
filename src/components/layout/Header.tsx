import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/sobre", label: t("nav.about") },
    { href: "/servicos", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/contato", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-sm border-b border-border">
      <nav className="container-wide px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-[60px] gap-6">

          {/* Brand placeholder — keeps flex spacing */}
          <div className="flex-shrink-0 w-8" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link${location.pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("nav.menu")}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] py-3 border-b border-border transition-colors duration-250 ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
