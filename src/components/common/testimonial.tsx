import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getTranslations } from "@/i18n/getTranslations";

const Testimonials = async ({ lang }: { lang: string }) => {
  const t = await getTranslations({ locale: lang, namespace: "home" });

  return (
    <div className="mx-auto">
      <div className="text-center">
        <h2
          className={cn(
            "font-really text-black-600 text-center font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
            lang === "ja" && "md:text-4xl lg:text-5xl xl:text-6xl font-noto"
          )}
        >
          {t("testimonials.title")}
        </h2>
        <p className="mx-auto mt-4 md:text-xl xl:text-3xl text-gray-450 dark:text-gray-300 md:w-3/4 lg:w-3/5 lg:text-2xl">
          {t("testimonials.subtitle")}
        </p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Card className="rounded-3xl bg-white p-8 shadow-card dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
          <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
            <ExportedImage
              className="mr-auto h-12 w-35"
              src="/logos/clubmed.svg"
              loading="lazy"
              alt="microsoft"
              width="140"
              height="48"
            />
            <p className="text-black-600 md:text-lg lg:text-2xl xl:text-3xl">
              "{t("testimonials.clubMed.quote")}"
            </p>
            <div className="flex items-center gap-3">
              <ExportedImage
                className="h-12 w-12 rounded-full"
                src="/headShotClubMed.webp"
                loading="lazy"
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h3 className="text-lg font-semibold leading-none text-black-600">
                  {t("testimonials.clubMed.name")}
                </h3>
                <span className="text-sm text-gray-450">
                  {t("testimonials.clubMed.position")}
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="space-y-6 rounded-3xl bg-white p-8 shadow-card">
          <ExportedImage
            className="h-6 w-auto"
            src="/logos/airCaraibes.svg"
            loading="lazy"
            alt="airbnb"
            width="200"
            height="200"
          />
          <p className="text-black-600 lg:text-xl xl:text-2xl">
            "{t("testimonials.airCaraibes.quote")}"
          </p>
        </Card>

        <Card className="space-y-6 rounded-3xl bg-white p-8 shadow-card">
          <ExportedImage
            className="h-12 w-auto"
            src="/logos/journey-further.png"
            loading="lazy"
            alt="ge"
            width="108"
            height="48"
          />
          <p className="text-black-600 lg:text-xl xl:text-2xl dark:text-gray-300">
            "{t("testimonials.journeyFurther.quote")}"
          </p>
          <div className="flex items-center gap-3 text-left">
            <ExportedImage
              className="h-12 w-12 rounded-full"
              src="/ceo-journey-further.webp"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-semibold leading-none text-black-600">
                {t("testimonials.journeyFurther.name")}
              </h3>
              <span className="text-sm text-gray-450">
                {t("testimonials.journeyFurther.position")}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
