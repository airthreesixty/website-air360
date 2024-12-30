import React from "react";
import HeroSection from "./components/hero-section";
import Achievement from "./components/achievement";
import HeroSliderCompanies from "./components/slider-hero-compagnies";
import Testimonials from "@/components/common/testimonial";
// import LaundryList from "@/components/common/laundry-list";
import MainVideo from "./components/main-video";
import Problems from "./components/problems";
import Solutions from "./components/solutions";
import CtaNew from "@/components/common/cta-new";
import { Slide, SlideFeature } from "@/components/mdx";
import Manifesto from "@/components/common/manifesto";
import { getTranslations } from "@/i18n/getTranslations";

interface HomeProps {
  lang: string;
}

const Home: React.FC<HomeProps> = async ({ lang }) => {
  const t = await getTranslations({ locale: lang, namespace: "home.slides" });

  return (
    <div>
      <section className="relative container pt-15 mb-10 md:pt-20 lg:mb-20">
        <HeroSection lang={lang} />
      </section>
      <section className="bg-slider-hero max-w-[650px] mx-auto overflow-hidden">
        <HeroSliderCompanies />
      </section>
      <section className="pt-20 pb-10 container-lp md:pt-30 lg:pb-15">
        <Testimonials lang={lang} />
      </section>
      <section className="container-lp py-20">
        <Problems lang={lang} />
      </section>
      <section className="container-lp py-20">
        <Solutions lang={lang} />
      </section>
      <section className="container-lp py-10 lg:py-15">
        <Achievement lang={lang} />
      </section>
      <section className="container-lp py-10 lg:py-15">
        <SlideFeature lp title={t("title")} lang={lang}>
          <Slide
            title={t("slide-1.title")}
            src="/images/home/slides/on-page-analytics.png"
            shadow={false}
          >
            {t("slide-1.description")}
          </Slide>
          <Slide
            title={t("slide-2.title")}
            src="/images/home/slides/session-replays.png"
            shadow={false}
          >
            {t("slide-2.description")}
          </Slide>
          <Slide
            title={t("slide-3.title")}
            src="/images/home/slides/funnel.png"
            shadow={false}
          >
            {t("slide-3.description")}
          </Slide>
          <Slide
            title={t("slide-4.title")}
            src="/images/home/slides/user-journey.png"
            shadow={false}
          >
            {t("slide-4.description")}
          </Slide>
        </SlideFeature>
      </section>
      <section className="container-lp md:pb-10">
        <MainVideo />
      </section>
      <section className="container-lp pt-20 md:pb-10">
        <Manifesto />
      </section>
      <section className="mt-10 mb-32">
        <CtaNew />
      </section>
    </div>
  );
};

export default Home;
