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
