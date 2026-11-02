import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { BrandMark } from "@/components/brand/BrandMark";
import "@/styles/nav.css";

const EMAIL = "edmundopires@outlook.com";
const PHONE = "(31) 99333-1644";
const LINKEDIN = "https://www.linkedin.com/in/edmundo-pires-12ab89237/";

// Every page mounts its own header. Starting from the last page's size lets the capsule animate back to full
// width when a navigation scrolls to the top, instead of popping.
let lastSmall = false;

/** A capsule link: on hover the color floods up from the bottom and the label rolls over to black. */
function CapLink({ to, label, on, onClick }: { to: string; label: string; on?: boolean; onClick?: () => void }) {
  return (
    <Link to={to} className={`cap-link${on ? " on" : ""}`} aria-current={on ? "page" : undefined} onClick={onClick}>
      <span className="roll">
        <span>{label}</span>
        <span aria-hidden>{label}</span>
      </span>
    </Link>
  );
}

/**
 * The navbar: a dark capsule floating over the page, shrinking once you scroll. On phones it keeps the logo,
 * the language toggle and a menu button that opens the links full screen.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [small, setSmall] = useState(lastSmall);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/lab", label: t("nav.lab") },
  ];
  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname === href || location.pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => {
      lastSmall = window.scrollY > 80;
      setSmall(lastSmall);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // the menu closes on navigation and with Esc
  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* keeps the page clear of the floating capsule */}
      <div className="h-16" aria-hidden />

      <header className={`cap${small ? " small" : ""}${menuOpen ? " menu-open" : ""}`}>
        <Link to="/" aria-label="byedstudio" data-header-logo className="flex items-center">
          <BrandMark />
        </Link>

        <nav className="cap-links" aria-label="Principal">
          {navLinks.map((l) => (
            <CapLink key={l.href} to={l.href} label={l.label} on={isActive(l.href)} />
          ))}
        </nav>

        <span className="cap-cta">
          <CapLink to="/contato" label={t("nav.talk")} on={isActive("/contato")} />
          <span className="arrow" aria-hidden>
            <svg viewBox="4 4 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </span>
        </span>

        <LanguageToggle />

        <button
          type="button"
          className="cap-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("nav.menu")}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span className="lines">
            <i />
            <i />
          </span>
        </button>
      </header>

      <div id="site-menu" className={`site-menu${menuOpen ? " on" : ""}`} aria-hidden={!menuOpen}>
        <ol>
          {[...navLinks, { href: "/contato", label: t("nav.contact") }].map((l, i) => (
            <li key={l.href}>
              <Link to={l.href} className={isActive(l.href) ? "on" : ""} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                {l.label}
              </Link>
            </li>
          ))}
        </ol>
        <div className="foot">
          <span>{EMAIL}</span>
          <span>{PHONE}</span>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </>
  );
}
