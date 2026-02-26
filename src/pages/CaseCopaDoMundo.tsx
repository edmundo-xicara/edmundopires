import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OtherCases } from "@/components/OtherCases";

const CaseCopaDoMundo = () => {
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
                Globo Esporte • Making Of Institucional
              </span>
              <h1 className="text-4xl md:text-5xl mb-6">Campanha Olimpíadas de 2024</h1>
              <p className="text-xl text-muted-foreground text-justify">
                Captação do making of e bastidores das gravações no Rio de Janeiro.
              </p>
            </header>
          </ScrollReveal>

          <div className="accent-line mb-12" />

          <div className="editorial-prose space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Contexto</h2>
                <p className="text-justify">
                  Durante a campanha das Olimpíadas de 2024, o Globo Esporte convidou o Tinôco, dono do canal, para realizar{" "}
                  <a 
                    href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40geglobo%2Fvideo%2F7398979892722830597%3Fq%3Dtinocandotv%2520globo%2520esporte%2520torcedor%26t%3D1768226170070&lang=en&enter_method=mandatory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    uma série de gravações no Rio de Janeiro
                  </a>{" "}
                  para produção de conteúdo institucional.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Meu papel como produtor</h2>
                <p className="text-justify">
                  Minha demanda dentro da equipe TinocandoTV foi auxiliar o Tinôco na revisão do roteiro de gravação e documentar os bastidores dessas gravações, tendo a oportunidade de ver de perto a complexidade de uma equipe de produção de grande porte como a do Globo Esporte.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Processo</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Planejamento da cobertura com foco em momentos-chave da produção</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Captação com olhar narrativo, priorizando bastidores e interações espontâneas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-justify">Documentação visual que contextualiza a escala e profissionalismo da operação</span>
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Resultado</h2>
                <p className="text-justify">
                  O material capturado serviu como base para peças de comunicação interna do TinocandoTV, 
                  servindo como um registro fiel para o nosso público dessa campanha tão importante para 
                  a história do canal.
                </p>
              </section>
            </ScrollReveal>
          </div>

          <OtherCases currentSlug="olimpiadas-2024" />
        </div>
      </article>
    </Layout>
  );
};

export default CaseCopaDoMundo;
