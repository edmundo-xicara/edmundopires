import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileText, Film, Building, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Servicos = () => {
  const { t } = useLanguage();

  const servicos = [
    { icon: Building, title: t("servicos.consult.title"), description: t("servicos.consult.desc") },
    { icon: Search, title: t("servicos.research.title"), description: t("servicos.research.desc") },
    { icon: FileText, title: t("servicos.script.title"), description: t("servicos.script.desc") },
    { icon: Briefcase, title: t("servicos.kit.title"), description: t("servicos.kit.desc") },
    { icon: Film, title: t("servicos.images.title"), description: t("servicos.images.desc") },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">{t("servicos.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("servicos.intro")}
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {servicos.map((servico, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="card-editorial flex flex-col md:flex-row md:items-start gap-6">
                  <div className="icon-box inline-flex items-center justify-center w-14 h-14 rounded bg-accent/10 text-accent flex-shrink-0">
                    <servico.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{servico.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">{servico.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <ScrollReveal>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              {t("servicos.cta.title")}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              {t("servicos.cta.desc")}
            </p>
            <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide transition-all duration-250 hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0 active:transition-[100ms]">
              {t("servicos.cta.button")}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Servicos;
