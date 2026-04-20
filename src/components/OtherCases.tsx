import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <h3 className="text-lg font-semibold mb-6">{t("casesPage.others")}</h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {otherCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="btn-secondary flex-1 justify-center min-w-[200px]"
            >
              {t(caseItem.titleKey)}
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
