import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const allCases = [
  {
    slug: "nobel-2025",
    title: "Entrevistas de especialistas para Prêmio Nobel 2025",
    client: "TinocandoTV",
    category: "Produção e Entrevistas",
    description:
      "Em 2025, o TinocandoTV produziu um vídeo especial explicando os vencedores do Prêmio Nobel daquele ano. Fui responsável por buscar e entrar em contato com a maior parte dos especialistas convidados, além de estruturar as perguntas e conduzir as entrevistas com cada um deles.",
  },
  {
    slug: "grecia-antiga",
    title: "Documentário Grécia Antiga",
    client: "TinocandoTV",
    category: "Documentário",
    description:
      "O maior documentário já produzido pelo canal. Atuei na ampliação do roteiro, complementando a narrativa do vídeo com uma pesquisa histórica adicional, além de conduzir cerca de 70% da pesquisa de imagens do documentário final.",
  },
  {
    slug: "copa-do-mundo-2022",
    title: "Campanha Copa do Mundo 2022",
    client: "Globo Esporte",
    category: "Making Of Institucional",
    description:
      "Tive a honra de participar dessa campanha juntamente com o Tinôco, dono do canal. Além de auxiliar em todo o planejamento da campanha dentro do TinocandoTV, fiquei responsável por toda a captação do making of durante as gravações no Rio de Janeiro, tendo a experiência de como funciona os bastidores de uma produção profissional de grande porte como a do Globo Esporte.",
  },
  {
    slug: "shogun-disney",
    title: "Parceria Disney+ — Shōgun",
    client: "Disney+",
    category: "Parceria Publicitária",
    description:
      "Tive a oportunidade de participar ativamente da parceria entre TinocandoTV e Disney+ para a divulgação da séria Shōgun. Fiquei responsável pela pesquisa dos vídeos, tanto como gestor e revisor, quanto como pesquisador. Também revisei historicamente o vídeo final, garantindo a coerência visual com a historiografia conhecida. Além disso, participei ativamente na escrita da inserção publicitária no roteiro final do vídeo.",
  },
  {
    slug: "revista-instagram",
    title: "Revista digital - Instagram",
    client: "TinocandoTV",
    category: "Design Editorial",
    description:
      "Durante um período específico, eu e o Tinôco decidimos testar um projeto novo no Instagram do TinocandoTV: a criação de revistas digitais com notícias socioculturais e, em alguns casos, políticas. Fui responsável pela criação da maior parte das revistas privadas destinadas aos assinantes.",
  },
];

const Cases = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">Cases</h1>
              <p className="text-xl text-muted-foreground text-justify">
                Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {allCases.map((caseItem, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <Link
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
                      <h2 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-250">
                        {caseItem.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {caseItem.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium shrink-0">
                      Ver case
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-250" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
