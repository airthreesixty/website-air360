import { IconWithBg } from "@/components/mdx/gallery-blocks";
import { getTranslations } from "@/i18n/getTranslations";
import ExportedImage from "next-image-export-optimizer";

interface Props {
  lang: string;
}

const EnabledCompliance = async ({ lang }: Props) => {
  const t = await getTranslations({
    locale: lang,
    namespace: "security-compliance",
  });
  return (
    <div
      id="enabled-compliance"
      className="gap-8 items-center py-8 lg:py-15 lg:grid lg:grid-cols-2 xl:gap-16"
    >
      <div className="text-gray-500 sm:text-lg">
        <h2 className="title2 mb-5 lg:mb-8">
          {t("enabled-compliance.mainTitle")}
        </h2>
        <div className="py-8 mb-6">
          <div className="flex">
            <div>
              <IconWithBg icon="scale-balanced" />
              <h3 className="mb-2 text-xl md:text-2xl font-bold text-black-600">
                {t("enabled-compliance.title1")}
              </h3>
              <p className="mb-2 text-gray-500">
                {t("enabled-compliance.description1")}
              </p>
            </div>
          </div>
          <div className="flex pt-8">
            <div>
              <IconWithBg icon="building-shield" />
              <h3 className="mb-2 text-xl md:text-2xl font-bold text-black-600">
                {t("enabled-compliance.title2")}
              </h3>
              <p className="mb-2 text-gray-500">
                {t("enabled-compliance.description2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ExportedImage
        alt="GDPR"
        src="/images/security/gdpr-compliance.jpeg"
        height={277}
        width={537}
      />
    </div>
  );
};

export default EnabledCompliance;
