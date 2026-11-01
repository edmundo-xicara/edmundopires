import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { BrandMark } from "@/components/brand/BrandMark";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/lab", label: t("nav.lab") },
    { href: "/contato", label: t("nav.contact") },
  ];

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <nav className="container-wide px-5 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 gap-6">
          <Link to="/" aria-label="byedstudio" data-header-logo className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <BrandMark />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className={`nav-link${isActive(link.href) ? " active" : ""}`}>
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <button
              className="p-1.5 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("nav.menu")}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-8 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 text-4xl font-extrabold tracking-[-0.03em] ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
                style={{ fontVariationSettings: '"wdth" 118' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
