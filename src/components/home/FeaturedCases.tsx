import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const cases = [
  {
    slug: "grecia-antiga",
    title: "Documentário Grécia Antiga",
    client: "TinocandoTV",
    description:
      "O maior documentário já produzido pelo canal. Atuei na ampliação do revisão e ampliação do roteiro, complementando a narrativa do vídeo com uma pesquisa histórica adicional, além de conduzir cerca de 70% da pesquisa de imagens do documentário final.",
  },
  {
    slug: "copa-do-mundo-2022",
    title: "Campanha Copa do Mundo 2022",
    client: "Globo Esporte",
    description:
      "Tive a honra de participar dessa campanha juntamente com o Tinôco, dono do canal. Além de auxiliar em todo o planejamento da campanha dentro do TinocandoTV, fiquei responsável por toda a captação do making of durante as gravações no Rio de Janeiro, tendo a experiência de como funciona os bastidores de uma produção profissional de grande porte como a do Globo Esporte.",
  },
  {
    slug: "nobel-2025",
    title: "Entrevistas de especialistas para Prêmio Nobel 2025",
    client: "TinocandoTV",
    description:
      "Em 2025, o TinocandoTV produziu um vídeo especial explicando os vencedores do Prêmio Nobel daquele ano. Fui responsável por buscar e entrar em contato com a maior parte dos especialistas convidados, além de estruturar as perguntas e conduzir as entrevistas com cada um deles.",
  },
];

export function FeaturedCases() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl mb-4">Cases em destaque</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/cases" className="btn-accent">
              Ver todos os cases
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((caseItem, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="card-editorial flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <span className="text-sm text-accent font-medium uppercase tracking-wider mb-3 block">
                    {caseItem.client}
                  </span>
                  <h3 className="text-xl font-semibold mb-4">{caseItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    {caseItem.description}
                  </p>
                </div>
                <Link
                  to={`/cases/${caseItem.slug}`}
                  className="btn-accent self-start shrink-0"
                >
                  Ver case completo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
