import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <ScrollReveal>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Edmundo Pires</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-4 text-primary-foreground/60">
                {t("footer.navTitle")}
              </h4>
              <div className="flex flex-col gap-3">
                <Link to="/cases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  {t("nav.cases")}
                </Link>
                <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  {t("nav.about")}
                </Link>
                <Link to="/servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  {t("nav.services")}
                </Link>
                <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-250 hover:translate-x-1 inline-block transform">
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-4 text-primary-foreground/60">
                {t("footer.contactTitle")}
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:edmundopires@outlook.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1"
                >
                  <Mail size={18} />
                  edmundopires@outlook.com
                </a>
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1 cursor-pointer"
                >
                  {phoneCopied ? <Check size={18} /> : <Phone size={18} />}
                  {phoneCopied ? t("footer.copied") : "(31) 99333-1644"}
                </button>
                <a
                  href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-250 hover:translate-x-1"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Edmundo Pires. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
