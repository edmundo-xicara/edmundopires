import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

interface OtherCasesProps {
  currentSlug: string;
}

export function OtherCases({ currentSlug }: OtherCasesProps) {
  const { t } = useLanguage();

  const allCases = [
    { slug: "nobel-2025", titleKey: "case.nobel.shortTitle" },
    { slug: "grecia-antiga", titleKey: "case.grecia.title" },
    { slug: "olimpiadas-2024", titleKey: "case.olimpiadas.shortTitle" },
    { slug: "shogun-disney", titleKey: "case.shogun.title" },
    { slug: "revista-instagram", titleKey: "case.revista.title" },
  ];

  const otherCases = allCases.filter((c) => c.slug !== currentSlug);

  return (
    <ScrollReveal>
      <div className="mt-16 pt-12 border-t border-border">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
          {t("casesPage.others")}
        </h3>
        <div className="border-t border-border">
          {otherCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="group flex items-center justify-between py-4 border-b border-border transition-colors duration-250 hover:text-accent"
            >
              <span className="font-heading text-lg font-medium group-hover:text-accent transition-colors duration-250">
                {t(caseItem.titleKey)}
              </span>
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-250 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
