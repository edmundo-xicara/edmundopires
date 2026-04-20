import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <div className="accent-line mb-6" />
                <h1 className="text-4xl md:text-5xl mb-8">{t("about.title")}</h1>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="editorial-prose text-justify">
                  <p>{t("about.p1")}</p>
                  <p>
                    {t("about.p2Pre")} <em>{t("about.p2Em")}</em>{t("about.p2Post")}
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
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" delay={100}>
              <div className="bg-card border border-border p-8 lg:p-12 transition-all duration-250 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-8">{t("about.skillsTitle")}</h2>
                <ul className="space-y-4">
                  {competencias.map((competencia, index) => (
                    <li key={index} className="flex items-start gap-4 group/item">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0 transition-transform duration-250 group-hover/item:scale-110" size={20} />
                      <span className="text-lg">{competencia}</span>
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
