import { Search, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Gestão de projetos e calendário editorial",
    description:
      "Planejo e organizo os projetos do canal, definindo prioridades, prazos e dependências para garantir consistência de publicações, previsibilidade de entregas e melhor uso do tempo da equipe.",
  },
  {
    icon: Search,
    title: "Chefia de pesquisa e revisão de conteúdo",
    description:
      "Coordeno a equipe de pesquisadores, estabeleço padrões de qualidade e reviso todo o material histórico antes da roteirização, assegurando rigor, clareza e segurança editorial.",
  },
  {
    icon: FileText,
    title: "Pesquisa e curadoria de imagens para vídeos",
    description:
      "Realizo a pesquisa e seleção de imagens que sustentam a narrativa visual dos vídeos, garantindo coerência histórica, qualidade estética e alinhamento com o roteiro e a edição.",
  },
];

export function Services() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">O que eu entrego</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pesquisa, produção e gestão integradas para elevar a qualidade do seu conteúdo, seja ele qual for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-editorial animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-primary text-primary-foreground mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
