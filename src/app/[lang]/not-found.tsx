"use client";

import { Button } from "@/components/ui/button";
import { pathname } from "next-extra/pathname";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("main");
  const pathName = pathname();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container py-8 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="flex justify-center w-24 lg:w-44 relative m-auto">
            <Image
              src={`/favicon.webp`}
              alt="Mochi"
              fill
              className="!w-auto !relative"
            />
          </div>
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {t("errorStatusCode")}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {t("errorStatusMessage")}: {pathName}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {t("error-message")}
          </p>
          <Link href={"/"}>
            <Button>{t("home")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
