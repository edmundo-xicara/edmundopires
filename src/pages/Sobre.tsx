import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Sobre = () => {
  const { t } = useLanguage();

  const competencias = [
    t("about.skill1"),
    t("about.skill2"),
    t("about.skill3"),
    t("about.skill4"),
    t("about.skill5"),
    t("about.skill6"),
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-24 items-start">

            {/* Main text */}
            <div>
              <ScrollReveal>
                <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium mb-10">
                  {t("about.title")}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>{t("about.p1")}</p>
                  <p>
                    {t("about.p2Pre")} <em className="not-italic text-foreground font-medium">{t("about.p2Em")}</em>{t("about.p2Post")}
                  </p>
                  <p>{t("about.p3")}</p>
                  <p>{t("about.p4")}</p>
                  <p>{t("about.p5")}</p>
                  <p>{t("about.p6")}</p>
                  <p>{t("about.p7")}</p>
                  <p>{t("about.p8")}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div className="mt-12">
                  <Link to="/contato" className="btn-primary">
                    {t("about.contactBtn")}
                    <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Skills sidebar */}
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-card border border-border p-8 lg:p-10">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
                  {t("about.skillsTitle")}
                </h2>
                <ul className="space-y-0">
                  {competencias.map((competencia, index) => (
                    <li key={index} className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-accent flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-snug">{competencia}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
