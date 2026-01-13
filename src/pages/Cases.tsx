import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const allCases = [
  {
    slug: "grecia-antiga",
    title: "Documentário Grécia Antiga",
    client: "TinocandoTV",
    category: "Documentário",
    description:
      "O maior documentário já produzido pelo canal. Atuei na ampliação do rigor histórico do projeto, complementando o roteiro e conduzindo cerca de 70% da pesquisa de imagens do vídeo final.",
  },
  {
    slug: "copa-do-mundo-2024",
    title: "Campanha Copa do Mundo 2024",
    client: "Globo Esporte",
    category: "Making Of Institucional",
    description:
      "Responsável por toda a captação do making of institucional durante gravações no Rio de Janeiro, com olhar narrativo para bastidores e produção profissional.",
  },
  {
    slug: "shogun-disney",
    title: "Parceria Disney+ — Shōgun",
    client: "Disney+",
    category: "Parceria Publicitária",
    description:
      "Gestão da pesquisa histórica, revisão editorial e participação direta na escrita do roteiro publicitário.",
  },
];

const Cases = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl mb-6">Cases</h1>
            <p className="text-xl text-muted-foreground">
              Projetos que demonstram a integração entre pesquisa histórica rigorosa, produção editorial e gestão de processos.
            </p>
          </div>

          <div className="space-y-8">
            {allCases.map((caseItem, index) => (
              <Link
                key={index}
                to={`/cases/${caseItem.slug}`}
                className="card-editorial block group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-sm text-accent font-medium uppercase tracking-wider">
                        {caseItem.client}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {caseItem.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {caseItem.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-medium shrink-0">
                    Ver case
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
