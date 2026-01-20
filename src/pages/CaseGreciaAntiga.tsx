import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseGreciaAntiga = () => {
  return (
    <Layout>
      <article className="section-padding">
        <div className="container-narrow">
          <Link to="/cases" className="btn-accent mb-8 inline-flex">
            <ArrowLeft size={18} className="mr-2" />
            Voltar para cases
          </Link>

          <header className="mb-12">
            <span className="text-sm text-accent font-medium uppercase tracking-wider mb-4 block">
              TinocandoTV • Documentário
            </span>
            <h1 className="text-4xl md:text-5xl mb-6">Documentário Grécia Antiga</h1>
            <p className="text-xl text-muted-foreground text-justify">
              O maior documentário já produzido pelo canal.
            </p>
          </header>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contexto</h2>
              <p className="text-justify">
                O documentário sobre a Grécia Antiga representou o projeto mais ambicioso do TinocandoTV até então. O objetivo era criar um conteúdo de longa duração que elevasse o padrão de engajamento e a qualidade visual de produção num nível sem precedentes no canal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Meu papel como produtor e pesquisador</h2>
              <p className="text-justify">
                Atuei diretamente na ampliação da narrativa, complementando o roteiro inicial com uma pesquisa aprofundada sobre o período. Além de ter sido responsável por conduzir cerca de 70% da pesquisa de imagens do vídeo final, garantindo que cada elemento visual estivesse alinhado com a precisão histórica exigida pelo tema. O maior desafio foi, sem dúvidas, o trabalho nos mapas. Fiz uma extensa pesquisa sobre as diversas mudanças territoriais ocorridas ao longo de toda a história narrada no vídeo para orientar o ilustrador e editores na criação de mapas historicamente precisos e coerentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processo</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-justify">Revisão e complementação do roteiro com foco em precisão historiográfica</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-justify">Curadoria extensiva de fontes visuais (obras de arte, reconstruções, mapas históricos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-justify">Checagem cruzada de informações com fontes acadêmicas primárias</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-justify">Organização do material para facilitar o trabalho de edição</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Resultado</h2>
              <p className="text-justify">
                O documentário consolidou-se como referência de conteúdo histórico de longa duração no YouTube brasileiro, 
                demonstrando que é possível manter engajamento com produção rigorosa. O projeto estabeleceu um novo 
                padrão de qualidade para o canal e serviu como modelo para produções subsequentes.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-lg font-semibold mb-6">Outros cases</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cases/copa-do-mundo-2022" className="btn-secondary flex-1 justify-center">
                Copa do Mundo 2022
              </Link>
              <Link to="/cases/shogun-disney" className="btn-secondary flex-1 justify-center">
                Parceria Disney+ — Shōgun
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseGreciaAntiga;