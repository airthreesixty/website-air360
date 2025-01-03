import { getTranslations } from "@/i18n/getTranslations";
import ExportedImage from "next-image-export-optimizer";

interface Props {
  lang: string;
}

const SecureData = async ({ lang }: Props) => {
  const t = await getTranslations({
    locale: lang,
    namespace: "security-compliance",
  });
  return (
    <div id="handling-protection" className="container py-10 lg:py-15">
      <div className="md:flex md:justify-between">
        <div className="self-center">
          <h2 className="title2 mb-5 mt-2 md:text-left">
            {t("secure-data.title")}
          </h2>
          <span className="font-bold text-primary-600">
            {t("secure-data.subtext")}
          </span>
          <p className="text-gray-500 lg:text-lg xl:text-xl max-w-[500px]">
            {t("secure-data.description")}
          </p>
        </div>
        <ExportedImage
          src="/images/security/database.jpeg"
          alt="database"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default SecureData;
