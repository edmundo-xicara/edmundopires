import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Servicos = () => {
  const { t } = useLanguage();

  const servicos = [
    { num: "01", title: t("servicos.consult.title"), description: t("servicos.consult.desc") },
    { num: "02", title: t("servicos.script.title"), description: t("servicos.script.desc") },
    { num: "03", title: t("servicos.research.title"), description: t("servicos.research.desc") },
    { num: "04", title: t("servicos.images.title"), description: t("servicos.images.desc") },
    { num: "05", title: t("servicos.kit.title"), description: t("servicos.kit.desc") },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">

          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="font-heading text-[clamp(40px,6vw,80px)] font-medium mb-6">
                {t("servicos.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("servicos.intro")}
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-border">
            {servicos.map((servico, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="flex flex-col md:flex-row md:items-start gap-6 py-10 border-b border-border">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground flex-shrink-0 md:w-10 mt-0.5">
                    {servico.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-medium mb-4">
                      {servico.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {servico.description}
                    </p>
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
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-medium mb-6">
              {t("servicos.cta.title")}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("servicos.cta.desc")}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary-foreground/40 text-primary-foreground font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-250 hover:bg-primary-foreground hover:text-primary"
            >
              {t("servicos.cta.button")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Servicos;
