"use client";

import React from "react";
import MochiFlying from "/public/vectors/mochi-flying.svg";
import ButtonCta from "@/components/ui/button-cta";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const IncreaseConversion = () => {
  const t = useTranslations("home");
  return (
    <div className="m-auto text-center md:px-12 lg:px-20">
      <div className="relative mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center">
        <MochiFlying className="relative m-auto" />
      </div>
      <div className="relative">
        <h2 className="mb-4 font-really text-4xl font-bold text-black-600 mx-auto select-none sm:text-6xl lg:text-7xl">
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
