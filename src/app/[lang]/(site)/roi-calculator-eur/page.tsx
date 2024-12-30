import { Metadata } from "next";
import ROICalculator from "./components/form";
import { mdxMetadata } from "@/lib/metadata";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "roi-calc" });
  const meta = {
    description: t("description"),
    title: t("title"),
    ogTitle: `Air360 - ${t("title")}`,
  };
  return mdxMetadata(meta);
}

const Page = async ({ params: { lang } }: Props) => {
  const t = await getTranslations({ locale: lang, namespace: "roi-calc" });

  return (
    <div className="container flex justify-center">
      <div className="py-20 max-w-[600px]">
        <h1 className="text-black-600 font-bold text-2xl mb-6 md:text-3xl lg:text-4xl">
          {t("header")}
        </h1>
        <ROICalculator />
      </div>
    </div>
  );
};

export default Page;
