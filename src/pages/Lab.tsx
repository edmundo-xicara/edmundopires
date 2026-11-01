import { Layout } from "@/components/layout/Layout";
import { labProjects } from "@/data/lab";
import { useLanguage } from "@/contexts/LanguageContext";

const Lab = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-14 md:mb-20">
            <h1 className="display-wide text-[clamp(64px,12vw,184px)] mb-8">{t("lab.title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("lab.intro")}</p>
          </div>

          <div className="grid gap-4">
            {labProjects.map((p) => (
              <article
                key={p.title.pt}
                className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-12 rounded-2xl bg-foreground text-background p-7 md:p-10"
              >
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-background/70">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${p.status === "live" ? "bg-signal-cyan" : "border-2 border-signal-cyan"}`}
                      aria-hidden
                    />
                    {t(p.status === "live" ? "lab.status.live" : "lab.status.wip")}, {p.year}
                  </p>
                  <h2 className="mt-4 text-[clamp(32px,4vw,52px)]">{p.title[language]}</h2>
                  {p.stack.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-full bg-background/10 px-3 py-1 text-sm font-medium">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <dl className="grid gap-6 text-[17px] leading-relaxed">
                  <div>
                    <dt className="font-bold text-signal-cyan">{t("lab.problem")}</dt>
                    <dd className="mt-1 text-background/80">{p.problem[language]}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-signal-cyan">{t("lab.built")}</dt>
                    <dd className="mt-1 text-background/80">{p.built[language]}</dd>
                  </div>
                  {p.result && (
                    <div>
                      <dt className="font-bold text-signal-cyan">{t("lab.result")}</dt>
                      <dd className="mt-1 text-background/80">{p.result[language]}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-10 text-muted-foreground">{t("lab.more")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Lab;
