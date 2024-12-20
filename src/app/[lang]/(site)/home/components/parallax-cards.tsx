import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const ParallaxCard = () => {
  const t = useTranslations("home");

  const slideItems = [
    {
      title: t("parallaxCard.slide-1.title"),
      description: t("parallaxCard.slide-1.subtitle"),
      src: "/card.png",
      theme: "primary",
      width: 760,
      height: 428,
    },
    {
      title: t("parallaxCard.slide-2.title"),
      description: t("parallaxCard.slide-2.subtitle"),
      src: "/getStarted.webp",
      theme: "orange",
      width: 416,
      height: 242,
    },
    {
      title: t("parallaxCard.slide-3.title"),
      description: t("parallaxCard.slide-3.subtitle"),
      src: "/card.png",
      theme: "blue",
      width: 760,
      height: 428,
    },
  ];

  const setBacClass = (theme: string, strength: string) => {
    switch (`${theme}-${strength}`) {
      case "primary-100":
        return "bg-primary-100";
      case "orange-100":
        return "bg-orange-100";
      case "blue-100":
        return "bg-blue-100";
      case "primary-600":
        return "bg-primary-600";
      case "orange-600":
        return "bg-orange-600";
      case "blue-600":
        return "bg-blue-600";
      default:
        return "";
    }
  };
  const setTextClass = (theme: string) => {
    switch (theme) {
      case "primary":
        return "text-primary-600";
      case "orange":
        return "text-orange-600";
      case "blue":
        return "text-blue-600";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="text-center">
        <span className="font-really text-black-600">
          {t("parallaxCard.subtext")}
        </span>
        <h2 className="font-really mt-2 mb-10 text-black-600 text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          {t("parallaxCard.title")}
        </h2>
      </div>
      {slideItems.map(
        ({ title, description, src, theme, width, height }, index) => {
          const marginTop = index > 0 && "mt-100";
          return (
            <div key={index} className={cn(`sticky top-30`, marginTop)}>
              <div
                className={cn(
                  `relative min-h-85vh opacity-100 flex justify-center overflow-hidden h-85vh rounded-[80px]`,
                  setBacClass(theme, "100")
                )}
              >
                <div className="flex text-black-600 text-center px-6 font-really flex-col w-full justify-center min-w-[50%] leading-12 gap-2">
                  <div
                    className={cn(
                      `text-4xl lg:text-5xl xl:text-6xl `,
                      setTextClass(theme)
                    )}
                  >
                    {title}
                  </div>
                  <p className="text-xl lg:text-2xl xl:text-3xl tracking-wide">
                    {description}
                  </p>
                </div>
                <div
                  className={cn(
                    `flex flex-col justify-center items-center w-full min-w-[50%] `,
                    setBacClass(theme, "600")
                  )}
                >
                  <div>
                    <Image
                      src={src}
                      alt={title}
                      width={width}
                      height={height}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ParallaxCard;
