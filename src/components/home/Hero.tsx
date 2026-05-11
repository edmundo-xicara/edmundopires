import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const roles = ["Youtube Manager", "Pesquisador", "Roteirista", "Produtor"];

  return (
    <section className="section-padding flex items-center">
      <div className="container-narrow w-full text-center">

        <ScrollReveal delay={0}>
          <div className="eyebrow justify-center mb-6">
            {roles.join(" · ")}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <h1 className="font-heading text-[clamp(64px,10vw,120px)] font-medium mb-6 leading-[1.0]">
            Edmundo Pires
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 mx-auto text-center">
            {t("hero.description")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/cases" className="btn-primary">
              {t("hero.cta.cases")}
              <ArrowRight className="ml-2" size={14} />
            </Link>
            <Link to="/contato" className="btn-ghost">
              {t("hero.cta.contact")}
              <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
