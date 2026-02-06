import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";

const CaseShogun = () => {
  return (
    <Layout>
      <article className="section-padding">
        <div className="container-narrow">
          <Link to="/cases" className="btn-accent mb-8 inline-flex">
            <ArrowLeft size={18} className="mr-2" />
            Voltar para cases
          </Link>

          <ScrollReveal>
            <header className="mb-12">
              <span className="text-sm text-accent font-medium uppercase tracking-wider mb-4 block">
                Disney+ • Parceria Publicitária
              </span>
              <h1 className="text-4xl md:text-5xl mb-6">Parceria Disney+ — Shōgun</h1>
              <p className="text-xl text-muted-foreground text-justify">
                Gestão da pesquisa histórica, revisão do produto final e participação direta na escrita do roteiro publicitário.
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Contexto</h2>
                <p className="text-justify">
                  A parceria com a Disney+ para a série Shōgun exigiu um equilíbrio delicado: produzir 
                  conteúdo que atendesse aos objetivos de marketing da plataforma enquanto mantinha o 
                  rigor histórico que caracteriza o trabalho do TinocandoTV. O desafio era integrar 
                  duas demandas aparentemente conflitantes — promoção e precisão — em uma narrativa coesa.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Meu papel como produtor e pesquisador</h2>
                <p className="text-justify">
                  Durante a campanha, produzimos dois vídeos: <a href="https://www.youtube.com/watch?v=peMqRTi6gT4" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SAMURAIS: os MAIORES GUERREIROS do JAPÃO</a> e <a href="https://www.youtube.com/watch?v=yYWIQOGgllw" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">NINJAS: REALIDADE ou MITO?</a>. No primeiro, atuei como chefe de pesquisa e revisor para garantir a coerência na narrativa e o padrão de qualidade que estamos acostumados no canal. Já no segundo vídeo, atuei diretamente no processo de pesquisa, o que me exigiu uma cuidadosa curadoria de fontes graças à natureza do tema, com uma enorme variedade de informações falsas espalhadas pela internet.
                </p>
                <p className="text-justify mt-4">
                  Além disso, trabalhei na pesquisa de imagens dos dois vídeos e revisei ambos para garantir a coerência histórica da forma como as imagens são mostradas e principalmente os letterings do vídeo, já que trabalhamos com a língua japonesa, traduzindo nomes de equipamentos e armas do Japão Feudal.
                </p>
                <p className="text-justify mt-4">
                  Por fim, participei ativamente no desenvolvimento do roteiro publicitário. Fizemos uma seleção das imagens fornecidas pela Disney+ e conseguimos desenvolver uma integração publicitária de acordo com o briefing fornecido, aprovada pela marca.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Processo</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Pesquisa aprofundada sobre o Japão feudal e o contexto histórico da série</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Identificação de pontos de conexão entre a narrativa histórica e os elementos da série</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Desenvolvimento de roteiro que integra contexto histórico e chamadas promocionais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Revisão editorial para garantir consistência e precisão</span>
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Resultado</h2>
                <p className="text-justify">
                  Foi um projeto de grandes proporções que conseguimos realizar em tempo hábil para a promoção de lançamento da série, demonstrando nossa capacidade como uma equipe bem coordenada de atender demandas comerciais sem abrir mão de qualidade.
                </p>
              </section>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="shogun-disney" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseShogun;
