"use client";

import React from "react";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import ExportedImage from "next-image-export-optimizer";

const Achievement = ({ lang }: { lang: string }) => {
  const t = useTranslations("home");

  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけトリガーされるようにする
    threshold: 0.1, // 10% 見えたらトリガー
  });

  return (
    <div>
      <h2
        className={cn(
          "font-really font-bold text-black-600 mb-8 text-center text-3xl md:text-5xl lg:mb-15 lg:text-6xl",
          lang === "ja" && "md:text-4xl lg:text-5xl"
        )}
      >
        {t("achievement.title")}
      </h2>
      <div className="grid gap-6">
        <div className="sm:h-80 lg:h-100 rounded-3xl shadow-card bg-white p-8">
          <div className="h-full relative gap-6 sm:flex">
            <div
              className={`relative -mx-6 -mt-6 flex rounded-2xl border p-10 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3`}
            >
              <ExportedImage
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-75 rounded-2xl brightness-105"
                src="/clubmedResort.jpg"
                alt="ClubMed resort"
                width={300}
                height={160}
                loading="lazy"
              />
              <ExportedImage
                className="m-auto z-10 w-auto sm:h-16 lg:h-12"
                src="/logos/clubmed.svg"
                loading="lazy"
                alt="logo"
                width={300}
                height={160}
              />
            </div>
            <div className="h-full mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3 lg:h-full">
              <div className="h-full sm:flex sm:flex-col sm:justify-center lg:p-6">
                <h2
                  className={cn(
                    "text-2xl font-semibold text-black-600 md:text-3xl lg:mb-4",
                    lang === "ja" && "md:text-3xl lg:text-4xl font-noto"
                  )}
                >
                  {t("achievement.subtitle")}
                </h2>
                <p className="mt-2 text-gray-450 md:text-xl lg:text-2xl">
                  {t("achievement.description")}
                </p>
                <div className="w-full pt-8 mx-auto text-center lg:pt-12">
                  <dl className="grid md:max-w-screen-sm gap-8 mr-auto text-black-600 grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <dt className="mb-2 text-2xl md:text-3xl font-extrabold">
                        {/* <span>+97%</span> */}
                        <div ref={ref}>
                          <div style={{ height: 35, width: 100 }}>
                            {inView ? (
                              <span>
                                +
                                <CountUp start={0} end={97} duration={3.5} />%
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="font-light text-black-600 text-sm lg:text-base">
                        {t("achievement.tag-1")}
                      </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <dt className="mb-2 text-2xl md:text-3xl font-extrabold">
                        <div ref={ref}>
                          <div style={{ height: 35, width: 100 }}>
                            {inView ? (
                              <span>
                                +
                                <CountUp start={0} end={48} duration={3.5} />%
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="font-light text-black-600 text-sm lg:text-base">
                        {t("achievement.tag-2")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
