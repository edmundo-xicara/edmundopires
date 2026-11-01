import { Layout } from "@/components/layout/Layout";
import { CaseRow } from "@/components/CaseRow";
import { getCases } from "@/data/cases";
import { useLanguage } from "@/contexts/LanguageContext";

const Cases = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <h1 className="display-wide text-[clamp(64px,12vw,184px)] mb-8">{t("casesPage.title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("casesPage.desc")}</p>
          </div>

          <div>
            {getCases(t).map((item) => (
              <CaseRow key={item.slug} item={item} as="h2" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
