import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const competencias = [
  "Pesquisa histórica e checagem de conteúdo",
  "Chefia de pesquisa e revisão editorial",
  "Gestão de projetos e pipeline de produção",
  "Planejamento editorial e organização de formatos",
  "Pesquisa e curadoria de imagens",
  "Desenvolvimento de Mídia Kits",
];

const Sobre = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-8">Sobre mim</h1>
              
              <div className="editorial-prose text-justify">
                <p>
                  Sou produtor, chefe de pesquisa e gestor de conteúdo no TinocandoTV.
                </p>
                <p>
                  Meu principal trabalho dentro do canal é o de <em>Youtube Manager</em>, isso significa que atuo basicamente como o coordenador do TinocandoTV, organizando todos os projetos do canal.
                </p>
                <p>
                  Sou eu quem organizo, juntamente com o Tinôco, o calendário completo do canal, decidindo os vídeos que serão postados nos próximos meses e as pessoas responsáveis por cada um. Ou seja, fico responsável por organizar qual vídeo será postado em qual data e quem irá trabalhar nele, desde a pesquisa até a edição final.
                </p>
                <p>
                  E essa é uma palavra chave aqui: "pesquisa". Isso porque, como chefe de pesquisa do canal, sou eu quem fica responsável por coordenar a equipe de pesquisa do TinocandoTV, orientando sobre o cada tema e revisando a pesquisa final para garantir a entrega de uma pesquisa correta, coerente e, acima de tudo, otimizada para servir de base para a escrita do roteiro, que fica a cargo do Tinôco.
                </p>
                <p>
                  Depois disso, participo da revisão de cada roteiro juntamente com os especialistas do canal e sou eu também quem desenvolve a pesquisa de imagens de cada vídeo, selecionando as pinturas, mapas e representações visuais que serão usadas pelos editores no vídeo final.
                </p>
                <p>
                  E para finalizar, depois da edição, reviso cada um dos vídeos para garantir que as imagens e, principalmente, mapas selecionados foram apresentados no vídeo de forma historicamente correta.
                </p>
                <p>
                  Agora já na hora da postagem, como produtor, sou eu quem organiza todos os detalhes que rodeiam os vídeos, como os nomes dos membros do canal e dos apoiadores que aparecem no final de todo vídeo, ou também os nomes da Ficha Técnica, garantindo que cada integrante da equipe receba o devido reconhecimento.
                </p>
                <p>
                  Dito isso, pode-se dizer que sou um grande "faz-tudo" de um canal no Youtube e é justamente por isso que reuni uma ampla experiência trabalhando em um canal não só de grande porte, mas também em crescimento.
                </p>
              </div>

              <div className="mt-12">
                <Link to="/contato" className="btn-primary">
                  Entrar em contato
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-card border border-border p-8 lg:p-12">
              <h2 className="text-2xl font-semibold mb-8">Competências</h2>
              <ul className="space-y-4">
                {competencias.map((competencia, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-lg">{competencia}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
