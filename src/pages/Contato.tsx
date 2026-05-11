import { Layout } from "@/components/layout/Layout";
import { Mail, Linkedin, ArrowRight, Phone, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contato = () => {
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
    <Layout>
      <section className="section-padding min-h-[80vh] flex items-center">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left text */}
            <ScrollReveal>
              <div>
                <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium mb-6">
                  {t("contato.title")}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  {t("contato.desc")}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t("contato.responseTime")}
                </p>
              </div>
            </ScrollReveal>

            {/* Contact cards */}
            <div className="space-y-4">
              <ScrollReveal delay={0} direction="left">
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-5 w-full text-left p-6 border border-border bg-card transition-all duration-250 hover:border-[hsl(var(--border-strong))] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-background flex-shrink-0 transition-colors duration-250 group-hover:border-accent group-hover:text-accent">
                    {emailCopied ? <Check size={20} /> : <Mail size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {t("contato.email")}
                    </p>
                    <p className="text-base">
                      {emailCopied ? t("contato.copied") : "edmundopires@outlook.com"}
                    </p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250 flex-shrink-0" size={18} />
                </button>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="left">
                <button
                  onClick={copyPhone}
                  className="group flex items-center gap-5 w-full text-left p-6 border border-border bg-card transition-all duration-250 hover:border-[hsl(var(--border-strong))] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-background flex-shrink-0 transition-colors duration-250 group-hover:border-accent group-hover:text-accent">
                    {phoneCopied ? <Check size={20} /> : <Phone size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {t("contato.phone")}
                    </p>
                    <p className="text-base">
                      {phoneCopied ? t("contato.phoneCopied") : "(31) 99333-1644"}
                    </p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250 flex-shrink-0" size={18} />
                </button>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="left">
                <a
                  href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 w-full p-6 border border-border bg-card transition-all duration-250 hover:border-[hsl(var(--border-strong))] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-background flex-shrink-0 transition-colors duration-250 group-hover:border-accent group-hover:text-accent">
                    <Linkedin size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {t("contato.linkedin")}
                    </p>
                    <p className="text-base">{t("contato.linkedinDesc")}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250 flex-shrink-0" size={18} />
                </a>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
