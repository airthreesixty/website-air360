"use client";

import ButtonCta from "@/components/ui/button-cta";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HeroSectionProps {
  lang: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center md:mb-5 lg:mb-10">
        <div className="relative inline-block">
          <h1
            className={cn(
              "mb-2 font-black font-really text-[42px] tracking-wide text-gradient select-none md:text-7xl lg:text-8xl xl:text-9xl text-center lg:mb-4",
              lang === "ja" && "text-[38px] md:text-6xl lg:text-7xl xl:text-8xl"
            )}
          >
            <span className="block leading-20">{t("hero.title.top")}</span>
            {lang === "ja" && (
              <span className="leading-20">{t("hero.title.bottom")}</span>
            )}
          </h1>
          <p className="text-gray-450 text-lg font-really text-center md:text-2xl lg:text-3xl xl:text-4xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex justify-center mt-4 lg:mt-6">
            <Link href="/request-demo">
              <ButtonCta lg icon>
                {t("increaseConversion.cta2")}
              </ButtonCta>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
