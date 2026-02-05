import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import revista1 from "@/assets/revista-1.png";
import revista2 from "@/assets/revista-2.png";
import revista3 from "@/assets/revista-3.png";
import revista4 from "@/assets/revista-4.png";
import revista5 from "@/assets/revista-5.png";
import revista6 from "@/assets/revista-6.png";

const revistas = [
  { src: revista1, alt: "Revista 1" },
  { src: revista2, alt: "Revista 2" },
  { src: revista3, alt: "Revista 3" },
  { src: revista4, alt: "Revista 4" },
  { src: revista5, alt: "Revista 5" },
  { src: revista6, alt: "Revista 6" },
];

const CaseRevistaInstagram = () => {
  return (
    <Layout>
      <article className="section-padding">
        <div className="container-wide">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-250 mb-8"
          >
            <ArrowLeft size={18} />
            Voltar para cases
          </Link>

          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-4">Revista digital - Instagram</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Revistas diárias no Instagram.
              </p>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contexto</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Durante um período específico, eu e o Tinôco decidimos testar um projeto novo no Instagram do TinocandoTV: a criação de revistas digitais com notícias socioculturais e, em alguns casos, políticas. Parte dessas revistas foi publicada gratuitamente no Instagram, enquanto outras ficaram disponíveis exclusivamente para assinantes, dentro de um sistema de membros. O objetivo era experimentar um formato editorial diferente, mais aprofundado e visualmente organizado, adaptado ao consumo rápido da plataforma.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Meu papel como designer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  Fui responsável pela criação da maior parte das revistas privadas destinadas aos assinantes, atuando desde a definição da estrutura de cada edição, incluindo escrita dos textos e número de slides, até o design completo das páginas no Figma.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Ao longo do projeto, buscamos manter um padrão visual consistente, com layouts leves e uso recorrente de pinturas ou imagens históricas texturizadas, sempre escolhidas para dialogar com o conteúdo e reforçar o tema abordado em cada revista.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Processo</h2>
                <ul className="text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
                  <li>Definição do tema e recorte editorial</li>
                  <li>Estruturação da revista (número de slides e textos)</li>
                  <li>Pesquisa e seleção de imagens</li>
                  <li>Desenvolvimento do design página a página</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Resultado</h2>
              </ScrollReveal>
            </div>

            {/* Grid de imagens com hover */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {revistas.map((revista, index) => (
                <ScrollReveal key={index} delay={index * 60} direction="none">
                  <a
                    href="https://www.instagram.com/tinocandotv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden rounded-lg block"
                  >
                    <img
                      src={revista.src}
                      alt={revista.alt}
                      className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                      <span className="text-white text-lg md:text-xl font-semibold text-center px-4">
                        Confira no Instagram
                      </span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseRevistaInstagram;
