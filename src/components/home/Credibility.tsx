import { Film, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Film,
    number: "80+",
    label: "Vídeos produzidos",
    description: "Participei ativamente na pesquisa, produção e revisão de mais de 80 vídeos no canal do Youtube do TinocandoTV, muitos dos quais ultrapassaram 1 milhão de visualizações. Nesses anos de experiência, pude aprender muito sobre a produção audiovisual dentro de um canal no Youtube, além de ter reunido um grande acervo profissional de pesquisas que cobrem basicamente qualquer período histórico.",
  },
  {
    icon: Users,
    number: "1M → 2.6M",
    label: "Crescimento acompanhado",
    description: "Desde que entrei no canal, acompanhei o crescimento do TinocandoTV desde 1 milhão até 2,6 milhões de inscritos, o que me deu ampla experiência na gestão e produção de um canal de larga escala em crescimento.",
  },
  {
    icon: Award,
    number: "Grandes marcas",
    label: "Parcerias institucionais",
    description: "Ao longo de todos os vídeos que produzi, lidei diretamente o marketing de grandes marcas do mercado, sendo os principais exemplos: DIsney+, Globo Esporte, Canva, Insider, Manual, Opera, Promova, Uninassau, NordVPN, entre outros",
  },
];

export function Credibility() {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl">Experiência profissional</h2>
        </div>
        <div className="flex flex-col gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-editorial flex flex-col md:flex-row md:items-start gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-accent/10 text-accent flex-shrink-0">
                <stat.icon size={28} />
              </div>
              <div className="flex-1">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label mb-2">{stat.label}</div>
                <p className="text-muted-foreground leading-relaxed text-justify">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
