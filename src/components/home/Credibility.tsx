import { Film, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Film,
    number: "80+",
    label: "Vídeos produzidos",
    description: "Pesquisa, produção, revisão e produto final",
  },
  {
    icon: Users,
    number: "1M → 2.6M",
    label: "Crescimento acompanhado",
    description: "De 1 milhão para 2,6 milhões de inscritos",
  },
  {
    icon: Award,
    number: "Grandes marcas",
    label: "Parcerias institucionais",
    description: "Documentários longos e campanhas com grandes marcas",
  },
];

export function Credibility() {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center md:text-left animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-accent/10 text-accent mb-4">
                <stat.icon size={24} />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="text-muted-foreground mt-3">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
