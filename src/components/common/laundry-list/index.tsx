import React from "react";
import AnimatedGradientText from "./animated-gradient-text"; // Ensure you have this component or create it
import { cn } from "@/lib/utils";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  items: string[];
  lp?: boolean;
  lang: string;
}

const calculateOpacity = (index: number): number => {
  return 1 - index * 0.09;
};

const LaundryList = async ({ items, lp = false, lang }: Props) => {
  const t = await getTranslations({ locale: lang, namespace: "home" });

  return (
    <div className="flex justify-start">
      <div>
        <div
          className={cn(
            `font-really lg:mb-8 mb-5 `,
            lp
              ? "text-xl md:text-2xl lg:text-4xl"
              : "text-lg md:text-xl lg:text-3xl"
          )}
        >
          <div className="text-black-600">
            {t("laundryList.title.dark")}{" "}
            <span className="text-primary-600">
              {t("laundryList.title.pink")}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 cursor-default">
          {items.map((item, index) => (
            <div key={index} className="group w-85vw">
              <div className="flex items-center">
                <div
                  className={cn(
                    `!leading-tight select-none font-really md:gap-y-6 lg:gap-y-8 font-extrabold text-black-600`,
                    lp
                      ? "text-4xl md:text-5xl lg:text-7xl xl:text-[85px]"
                      : "text-3xl md:text-4xl lg:text-[42px] xl:text-5xl"
                  )}
                >
                  <AnimatedGradientText text={item} />
                  <span style={{ opacity: calculateOpacity(index) }}>
                    {item}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaundryList;
