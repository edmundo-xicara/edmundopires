import { Film, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

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
    hasLinks: true,
  },
];

export function Credibility() {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl">Experiência profissional</h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="card-editorial flex flex-col md:flex-row md:items-start gap-6">
                <div className="icon-box inline-flex items-center justify-center w-14 h-14 rounded bg-accent/10 text-accent flex-shrink-0">
                  <stat.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label mb-2">{stat.label}</div>
                  {stat.hasLinks ? (
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Ao longo de todos os vídeos que produzi, lidei diretamente o marketing de grandes marcas do mercado, sendo os principais exemplos:{" "}
                      <Link to="/cases/shogun-disney" className="text-accent hover:underline">Disney+</Link>,{" "}
                      <Link to="/cases/copa-do-mundo-2022" className="text-accent hover:underline">Globo Esporte</Link>,{" "}
                      <a href="https://youtu.be/XDOWW7CQmhg?t=243" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Insider</a>,{" "}
                      <a href="https://youtu.be/j_BSyCFzxuM?t=119" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Opera</a>,{" "}
                      <a href="https://youtu.be/ttkt5pdArZY?t=145" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Manual</a>,{" "}
                      <a href="https://youtu.be/lcpzeK1-Ulg?t=76" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Uninassau</a>,{" "}
                      <a href="https://youtu.be/BpuNlQ_x2AA?t=99" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CyberGhost</a>,{" "}
                      <a href="https://youtu.be/97ozWnsSq0A?t=109" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Promova</a>,{" "}
                      entre outros.
                    </p>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed text-justify">{stat.description}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
