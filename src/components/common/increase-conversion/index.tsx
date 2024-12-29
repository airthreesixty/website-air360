"use client";

import React from "react";
import MochiFlyingReverse from "/public/vectors/mochi-flying-reverse.svg";
import ButtonCta from "@/components/ui/button-cta";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const IncreaseConversion = () => {
  const t = useTranslations("home");
  return (
    <div className="m-auto text-center md:px-12 lg:px-20">
      <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
        <MochiFlyingReverse className="relative m-auto w-35" />
      </div>
      <div className="relative -mt-12">
        <h2 className="mb-8 font-really text-4xl font-bold text-black-600 mx-auto select-none sm:text-6xl lg:text-7xl xl:text-8xl">
          <span>{t("increaseConversion.title.top")}</span>
          <br />
          <span className="relative px-2 overflow-visible m-0 leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-primary-600/70 to-primary-700/80">
            {t("increaseConversion.title.bottom")}
          </span>
        </h2>
        <div className="flex justify-center">
          <Link href="/request-demo">
            <ButtonCta>{t("increaseConversion.cta2")}</ButtonCta>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IncreaseConversion;
