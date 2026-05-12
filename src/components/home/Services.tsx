import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    { num: "01", title: t("services.item1.title"), description: t("services.item1.desc") },
    { num: "02", title: t("services.item2.title"), description: t("services.item2.desc") },
    { num: "03", title: t("services.item3.title"), description: t("services.item3.desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">

        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] font-medium max-w-2xl mb-6">
                {t("services.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-[60ch]">
                {t("services.intro")}
              </p>
            </div>
            <Link to="/servicos" className="btn-ghost flex-shrink-0">
              {t("services.btn")}
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="border-t border-border">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="flex flex-col md:flex-row md:items-start gap-6 py-10 border-b border-border">
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground flex-shrink-0 md:w-10 mt-0.5">
                  {service.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-medium mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
