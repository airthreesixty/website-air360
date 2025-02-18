import ThankYouPageLayout from "@/components/layout/thank-you-page-layout";
import MochiFlying from "/public/vectors/mochi-flying.svg";

import React from "react";
import { Metadata } from "next";
import { mdxMetadata } from "@/lib/metadata";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "thank-you" });
  const meta = {
    description: t("demo-request.description"),
    title: t("demo-request.title"),
    ogTitle: `Air360 - ${t("demo-request.title")}`,
  };
  return mdxMetadata(meta);
}

const Page: React.FC<Props> = async ({ params: { lang } }) => {
  const t = await getTranslations({ locale: lang, namespace: "thank-you" });
  return (
    <ThankYouPageLayout lang={lang}>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="page-thank-you__title">
          <span className="inline-block">{t("title")}</span>
        </h1>
        <MochiFlying className="mt-12 mb-10 size-28" />
        <p className="page-thank-you__description">{t("p1")}</p>
        <p className="page-thank-you__description pt-5">{t("p2")}</p>
      </div>
    </ThankYouPageLayout>
  );
};

export default Page;
