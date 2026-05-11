import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { t } = useLanguage();

  const copyPhone = () => {
    navigator.clipboard.writeText("31993331644");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("edmundopires@outlook.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="border-t border-[hsl(var(--border-strong))] mt-0">
      <div className="container-wide px-6 md:px-12 lg:px-20 pt-16 pb-8">

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <p className="font-heading text-2xl font-medium tracking-[-0.02em] mb-3">
              Edmundo Pires
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {t("footer.navTitle")}
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/cases" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-250">
                {t("nav.cases")}
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-250">
                {t("nav.about")}
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-250">
                {t("nav.services")}
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-250">
                {t("nav.portfolio")}
              </Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-250">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-250 text-left"
              >
                {emailCopied ? <Check size={14} /> : <Mail size={14} />}
                {emailCopied ? t("footer.copied") : "edmundopires@outlook.com"}
              </button>
              <button
                onClick={copyPhone}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-250 text-left"
              >
                {phoneCopied ? <Check size={14} /> : <Phone size={14} />}
                {phoneCopied ? t("footer.copied") : "(31) 99333-1644"}
              </button>
              <a
                href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-250"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex justify-between items-baseline font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Edmundo Pires</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
