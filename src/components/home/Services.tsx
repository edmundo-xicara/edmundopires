import { Search, FileText, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Settings, title: t("services.item1.title"), description: t("services.item1.desc") },
    { icon: Search, title: t("services.item2.title"), description: t("services.item2.desc") },
    { icon: FileText, title: t("services.item3.title"), description: t("services.item3.desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify">
              {t("services.intro")}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="card-editorial flex flex-col md:flex-row md:items-start gap-6">
                <div className="icon-box inline-flex items-center justify-center w-14 h-14 rounded bg-primary text-primary-foreground flex-shrink-0">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
