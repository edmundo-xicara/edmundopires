import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const CaseNobel = () => {
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
              <h1 className="text-4xl md:text-5xl mb-4">Entrevistas de especialistas para Prêmio Nobel 2025</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Entrevistas exclusivas com especialistas para cada categoria do Nobel de 2025.
              </p>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contexto</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  Em 2025, o TinocandoTV produziu um vídeo especial explicando os vencedores do Prêmio Nobel daquele ano. Para aprofundar o conteúdo, convidamos especialistas de diferentes áreas para comentar cada categoria do prêmio.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Participaram do projeto uma geneticista, um químico, um físico e um economista, além de especialistas que ajudaram a contextualizar o Prêmio Nobel da Paz, considerando sua natureza multilateral. Para essa categoria, contamos com a colaboração de professores de geografia e geopolítica, um especialista em relações internacionais e dois historiadores, cada um contribuindo com análises complementares sobre o prêmio daquele ano.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Meu papel como produtor e entrevistador</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  Fui responsável por buscar e entrar em contato com a maior parte dos especialistas convidados, além de estruturar as perguntas e conduzir as entrevistas com cada um deles. Todo o material foi registrado no{" "}
                  <a
                    href="https://www.youtube.com/@cortesTTVoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    canal de cortes do TinocandoTV
                  </a>
                  , um projeto novo dentro do canal, do qual também sou responsável.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Após a realização das entrevistas, selecionei e filtrei os momentos-chave de cada conversa para construir um roteiro coeso, combinando as explicações dos especialistas com trechos explicativos próprios, falados pelo Tinôco no vídeo e apresentados de forma mais clara, direta e acessível ao público.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Processo</h2>
                <ul className="text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
                  <li>Identificação e contato com especialistas de cada área</li>
                  <li>Estudo prévio sobre os temas e categorias do prêmio</li>
                  <li>Desenvolvimento das perguntas para as entrevistas</li>
                  <li>Realização das entrevistas</li>
                  <li>Seleção e filtragem dos momentos-chave para a construção do roteiro</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Resultado</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  O projeto resultou em um vídeo com mais de uma hora de duração, no qual explicamos a trajetória de Alfred Nobel, criador do prêmio, e apresentamos as categorias do Nobel de 2025, seus vencedores e as principais contribuições de cada um para suas respectivas áreas.
                </p>
              </ScrollReveal>

              {/* Thumbnail do vídeo */}
              <ScrollReveal>
                <a
                  href="https://www.youtube.com/watch?v=j_BSyCFzxuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg relative group"
                >
                  <img
                    src="https://img.youtube.com/vi/j_BSyCFzxuM/maxresdefault.jpg"
                    alt="Vídeo Prêmio Nobel 2025"
                    className="w-full h-auto object-cover transition-all duration-250 group-hover:brightness-50 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <span className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                      Confira o vídeo no Youtube
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseNobel;
