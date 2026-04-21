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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="accent-line mb-6" />
                <h1 className="text-4xl md:text-5xl mb-6">{t("contato.title")}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {t("contato.desc")}
                </p>
                <p className="text-muted-foreground">
                  {t("contato.responseTime")}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0} direction="left">
                <a
                  href="mailto:edmundopires@outlook.com"
                  className="card-editorial flex items-center gap-6 group"
                >
                  <div className="icon-box inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-250">
                    <Mail size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{t("contato.email")}</h3>
                    <p className="text-muted-foreground">edmundopires@outlook.com</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" size={20} />
                </a>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="left">
                <button
                  onClick={copyPhone}
                  className="card-editorial flex items-center gap-6 group w-full text-left cursor-pointer"
                >
                  <div className="icon-box inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-250">
                    {phoneCopied ? <Check size={28} /> : <Phone size={28} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{t("contato.phone")}</h3>
                    <p className="text-muted-foreground">
                      {phoneCopied ? t("contato.phoneCopied") : "(31) 99333-1644"}
                    </p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" size={20} />
                </button>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="left">
                <a
                  href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-editorial flex items-center gap-6 group"
                >
                  <div className="icon-box inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-250">
                    <Linkedin size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{t("contato.linkedin")}</h3>
                    <p className="text-muted-foreground">{t("contato.linkedinDesc")}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" size={20} />
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
