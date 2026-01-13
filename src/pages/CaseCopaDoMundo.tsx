import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseCopaDoMundo = () => {
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
              Globo Esporte • Making Of Institucional
            </span>
            <h1 className="text-4xl md:text-5xl mb-6">Campanha Copa do Mundo 2024</h1>
            <p className="text-xl text-muted-foreground">
              Captação do making of institucional durante gravações no Rio de Janeiro, com olhar narrativo para bastidores.
            </p>
          </header>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contexto</h2>
              <p>
                Durante a campanha da Copa do Mundo 2024, o Globo Esporte realizou uma série de gravações 
                no Rio de Janeiro para produção de conteúdo institucional. Minha demanda dentro da equipe 
                TinocandoTV era documentar os bastidores dessas gravações com uma abordagem que fosse além 
                do registro técnico, capturando a narrativa por trás da produção.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Meu papel como produtor</h2>
              <p>
                Fui responsável por toda a captação do making of institucional. Isso incluiu não apenas 
                o registro técnico das gravações, mas principalmente a construção de uma narrativa visual 
                que comunicasse a energia e a complexidade envolvidas na produção de conteúdo esportivo 
                de alto nível.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processo</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Planejamento da cobertura com foco em momentos-chave da produção</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Captação com olhar narrativo, priorizando bastidores e interações espontâneas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Documentação visual que contextualiza a escala e profissionalismo da operação</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Entrega de material organizado e catalogado para uso institucional</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Resultado</h2>
              <p>
                O material capturado serviu como base para peças de comunicação interna do TinocandoTV, 
                servindo como um registro fiel para o nosso público dessa campanha tão importante para 
                a história do canal.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-lg font-semibold mb-6">Outros cases</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cases/grecia-antiga" className="btn-secondary flex-1 justify-center">
                Documentário Grécia Antiga
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

export default CaseCopaDoMundo;
