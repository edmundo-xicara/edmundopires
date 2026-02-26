import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const allCases = [
  { slug: "nobel-2025", title: "Prêmio Nobel 2025" },
  { slug: "grecia-antiga", title: "Documentário Grécia Antiga" },
  { slug: "olimpiadas-2024", title: "Olimpíadas de 2024" },
  { slug: "shogun-disney", title: "Parceria Disney+ — Shōgun" },
  { slug: "revista-instagram", title: "Revista digital - Instagram" },
];

interface OtherCasesProps {
  currentSlug: string;
}

export function OtherCases({ currentSlug }: OtherCasesProps) {
  const otherCases = allCases.filter((c) => c.slug !== currentSlug);

  return (
    <ScrollReveal>
      <div className="mt-16 pt-12 border-t border-border">
        <h3 className="text-lg font-semibold mb-6">Outros cases</h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {otherCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="btn-secondary flex-1 justify-center min-w-[200px]"
            >
              {caseItem.title}
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
