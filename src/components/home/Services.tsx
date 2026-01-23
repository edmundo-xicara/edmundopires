import { Search, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Gestão de projetos e calendário editorial",
    description:
      "Planejo e organizo todos os projetos do canal, definindo prioridades, prazos e dependências. Como um dos gestores, coordeno a comunicação entre diferentes equipes para manter o bom funcionamento do TinocandoTV, integrando todas as áreas de produção, desde ideia, pesquisa e roteiro até revisão, roteirização de imagens e edição. Além disso, gerencio também o calendário do canal, ajudando a organizar e planejar os próximos vídeos que serão postados e próximas ideias na fila de produção.",
  },
  {
    icon: Search,
    title: "Chefia de pesquisa e revisão de conteúdo",
    description:
      "Além de produzir pesquisas direcionadas para a roteirização de vídeos dentro de um canal do Youtube, também coordeno a equipe de pesquisadores do TinocandoTV, onde estabeleço padrões de qualidade e reviso todo o material antes da roteirização, assegurando credibilidade, clareza e coerência narrativa. Afinal, há um abismo entre uma pesquisa acadêmica e uma pesquisa escrita para uma produção audiovisual, funcionando como um \"pré-roteiro\".",
  },
  {
    icon: FileText,
    title: "Pesquisa e curadoria de imagens para vídeos",
    description:
      "Depois do roteiro e antes da edição do vídeo, realizo a pesquisa e seleção de imagens que irão entrar no produto final e sustentar a narrativa visual dos vídeos. Isso requer desde uma seleção cuidadosa de pinturas e imagens históricas, até o estudo de mapas e mudanças de fronteira de acordo com cada período, sem falar também nos casos nos quais estudo o tema para descrever para o editor uma representação visual coerente para um conceito abstrato ou impossível de visualizar, muito comum em vídeos de ciência ou filosofia.",
  },
];

export function Services() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">O que eu faço</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify">
            Sou chefe de pesquisa, produtor e um dos gestores do TinocandoTV. Organizo todos os projetos e calendário do canal, lidero a equipe de pesquisa, reviso todo o material antes da roteirização e realizo a pesquisa de imagens de todos os vídeos, garantindo que o canal consiga manter um ritmo incessante de vídeos dentro de um alto padrão de qualidade.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-editorial flex flex-col md:flex-row md:items-start gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-primary text-primary-foreground flex-shrink-0">
                <service.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
