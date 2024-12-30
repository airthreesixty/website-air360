import CompanyLogos from "@/components/common/compagny-logos";
import Logo from "@/components/common/logo";
import React from "react";
import RequestDemoForm from "./components/form";
import { Metadata, NextPage } from "next";
import { mdxMetadata } from "@/lib/metadata";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "request-demo" });
  const meta = {
    description: t("content"),
    title: t("title"),
    ogTitle: `Air360 - ${t("title")}`,
  };
  return mdxMetadata(meta);
}

const DemoRequestPage: NextPage<Props> = async ({ params: { lang } }) => {
  const t = await getTranslations({ locale: lang, namespace: "request-demo" });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-1400 px-4 py-8 mx-auto lg:grid lg:gap-20 lg:py-16 lg:grid-cols-12">
        <div className="flex-col justify-between hidden mr-auto lg:flex lg:col-span-6 xl:mb-0">
          <div className="lg:mb-6">
            <div className="inline-flex items-center mb-6 text-2xl font-semibold text-gray-900 lg:mb-10 dark:text-white">
              <Logo isDark />
            </div>
            <h1 className="mb-3 font-semibold text-gradient text-xl md:text-2xl lg:text-3xl">
              {t("title1")}
            </h1>
            <h2 className="mb-4 text-gray-500 lg:text-lg">{t("subtitle1")}</h2>
            <div className="flex">
              <div>
                <p className="mb-2 text-black-600 font-bold">
                  {t("description1")}
                </p>
              </div>
            </div>
            <div className="flex pt-4">
              <div>
                <p className="mb-2 text-black-600 font-bold">
                  {t("description2")}
                </p>
              </div>
            </div>
            <div className="flex pt-4">
              <div>
                <p className="mb-2 text-black-600 font-bold">
                  {t("description3")}
                </p>
              </div>
            </div>
          </div>
          <CompanyLogos
            grid-cols-sm="grid-cols-2"
            grid-cols-md="grid-cols-3"
            grid-cols-lg="grid-cols-3"
            padding-bottom="pb-1"
          />
        </div>
        <div className="mb-6 text-center lg:hidden">
          <div className="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white">
            <Logo isDark />
          </div>
        </div>
        <div className="w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0 lg:col-span-6">
          <RequestDemoForm lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default DemoRequestPage;
