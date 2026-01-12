import { Search, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Pesquisa que sustenta produção",
    description:
      "Da pergunta inicial à bibliografia, recorte temático, cronologia, personagens, controvérsias historiográficas e checagem.",
  },
  {
    icon: FileText,
    title: "Produção editorial",
    description:
      "Transformo temas complexos em produtos audiovisuais claros, envolventes e historicamente seguros, atuando diretamente na construção do roteiro e do produto final.",
  },
  {
    icon: Settings,
    title: "Gestão e processo",
    description:
      "Organizo pipeline de produção, checklists, revisão cruzada e handoff com edição, reduzindo retrabalho e aumentando previsibilidade.",
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
            Pesquisa, produção e gestão integradas para elevar a qualidade do seu conteúdo histórico-cultural.
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
