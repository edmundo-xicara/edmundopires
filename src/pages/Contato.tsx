import { Layout } from "@/components/layout/Layout";
import { Mail, Linkedin, ArrowRight, Phone } from "lucide-react";

const Contato = () => {
  return (
    <Layout>
      <section className="section-padding min-h-[80vh] flex items-center">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl mb-6">Vamos conversar</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Se você trabalha com conteúdo complexo e precisa organizar pesquisa, produção e qualidade — entre em contato.
              </p>
              <p className="text-muted-foreground">
                Respondo a todas as mensagens em até 48 horas úteis.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:edmundopires@outlook.com"
                className="card-editorial flex items-center gap-6 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                  <Mail size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">edmundopires@outlook.com</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
              </a>

              <a
                href="https://w.app/4bpne2"
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial flex items-center gap-6 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                  <Phone size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Whatsapp</h3>
                  <p className="text-muted-foreground">(31) 99333-1644</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial flex items-center gap-6 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                  <Linkedin size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <p className="text-muted-foreground">Conecte-se comigo</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
