import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    slug: "grecia-antiga",
    title: "Documentário Grécia Antiga",
    client: "TinocandoTV",
    description:
      "O maior documentário já produzido pelo canal. Atuei na ampliação do revisão e ampliação do roteiro, complementando a narrativa do vídeo com uma pesquisa histórica adicional, além de conduzir cerca de 70% da pesquisa de imagens do documentário final.",
  },
  {
    slug: "copa-do-mundo-2024",
    title: "Campanha Copa do Mundo 2024",
    client: "Globo Esporte",
    description:
      "Tive a honra de participar dessa campanha juntamente com o Tinôco, dono do canal. Além de auxiliar em todo o planejamento da campanha dentro do TinocandoTV, fiquei responsável por toda a captação do making of durante as gravações no Rio de Janeiro, tendo a experiência de como funciona os bastidores de uma produção profissional de grande porte como a do Globo Esporte.",
  },
  {
    slug: "shogun-disney",
    title: "Parceria Disney+ — Shōgun",
    client: "Disney+",
    description:
      "Tive a oportunidade de participar ativamente da parceria entre TinocandoTV e Disney+ para a divulgação da séria Shōgun. Fiquei responsável pela pesquisa dos vídeos, tanto como gestor e revisor, quanto como pesquisador. Também revisei historicamente o vídeo final, garantindo a coerência visual com a historiografia conhecida. Além disso, participei ativamente na escrita da inserção publicitária no roteiro final do vídeo.",
  },
];

export function FeaturedCases() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">Cases em destaque</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Principais projetos nos quais trabalhei, servindo como exemplos práticos da qualidade do meu trabalho como gestor, produtor e pesquisador.
            </p>
          </div>
          <Link to="/cases" className="btn-accent">
            Ver todos os cases
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="card-editorial flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-sm text-accent font-medium uppercase tracking-wider mb-3">
                {caseItem.client}
              </span>
              <h3 className="text-xl font-semibold mb-4">{caseItem.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                {caseItem.description}
              </p>
              <Link
                to={`/cases/${caseItem.slug}`}
                className="btn-accent self-start"
              >
                Ver case completo
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
