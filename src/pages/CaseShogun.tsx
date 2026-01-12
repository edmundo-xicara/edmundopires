import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseShogun = () => {
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
              Disney+ • Parceria Publicitária
            </span>
            <h1 className="text-4xl md:text-5xl mb-6">Parceria Disney+ — Shōgun</h1>
            <p className="text-xl text-muted-foreground">
              Gestão da pesquisa histórica e participação direta na escrita do roteiro publicitário, 
              integrando rigor histórico e objetivos de marketing.
            </p>
          </header>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contexto</h2>
              <p>
                A parceria com a Disney+ para a série Shōgun exigiu um equilíbrio delicado: produzir 
                conteúdo que atendesse aos objetivos de marketing da plataforma enquanto mantinha o 
                rigor histórico que caracteriza o trabalho do TinocandoTV. O desafio era integrar 
                duas demandas aparentemente conflitantes — promoção e precisão — em uma narrativa coesa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Meu papel como produtor</h2>
              <p>
                Atuei na gestão da pesquisa histórica sobre o período retratado na série, na revisão 
                editorial do conteúdo produzido e participei diretamente da escrita do roteiro publicitário. 
                Meu trabalho foi garantir que os elementos promocionais estivessem ancorados em contexto 
                histórico sólido, agregando valor ao conteúdo sem comprometer os objetivos comerciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processo</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Pesquisa aprofundada sobre o Japão feudal e o contexto histórico da série</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Identificação de pontos de conexão entre a narrativa histórica e os elementos da série</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Desenvolvimento de roteiro que integra contexto histórico e chamadas promocionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Revisão editorial para garantir consistência e precisão</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Resultado</h2>
              <p>
                O projeto demonstrou que é possível atender demandas comerciais sem abrir mão de 
                qualidade editorial. A parceria foi bem-sucedida tanto do ponto de vista de engajamento 
                quanto de percepção de marca, estabelecendo um modelo para futuras colaborações entre 
                criadores de conteúdo e grandes plataformas de streaming.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-lg font-semibold mb-6">Outros cases</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cases/grecia-antiga" className="btn-secondary flex-1 justify-center">
                Documentário Grécia Antiga
              </Link>
              <Link to="/cases/copa-do-mundo-2024" className="btn-secondary flex-1 justify-center">
                Copa do Mundo 2024
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseShogun;
