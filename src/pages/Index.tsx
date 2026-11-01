import { Layout } from "@/components/layout/Layout";
import { IntroLoader, useIntroGate } from "@/components/home/IntroLoader";
import { Hero } from "@/components/home/Hero";
import { Worlds } from "@/components/home/Worlds";
import { Background } from "@/components/home/Background";
import { FeaturedCases } from "@/components/home/FeaturedCases";
import "@/styles/home.css";

const Index = () => {
  const playIntro = useIntroGate();
  return (
    <Layout>
      {playIntro && <IntroLoader />}
      <Hero />
      <Worlds />
      <Background />
      <FeaturedCases />
    </Layout>
  );
};

export default Index;
