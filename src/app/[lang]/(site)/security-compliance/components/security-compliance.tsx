import { getTranslations } from "@/i18n/getTranslations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  lang: string;
}

const Security = async ({ lang }: Props) => {
  const t = await getTranslations({
    locale: lang,
    namespace: "security-compliance",
  });

  return (
    <div className="bg-gray-50 rounded-3xl px-4 text-center py-8 lg:py-15">
      <h2 className="mb-4 title2 font-bold">{t("security.mainTitle")}</h2>
      <div className="mt-8 lg:mt-16 mb-8 space-y-14 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100">
              <FontAwesomeIcon
                className="text-primary-600 fa-3x"
                icon={["far", "file-contract"]}
              />
            </div>
            <h3 className="mb-4 title3 font-really font-bold">
              {t("security.title1")}
            </h3>
            <p className="mb-8 textp">{t("security.description1")}</p>
          </div>
          <a href="#enabled-compliance" className="text-primary-600 font-bold">
            More
            <FontAwesomeIcon className="pl-1" icon={["fas", "chevron-right"]} />
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex justify-center items-center mb-6 w-24 h-24 bg-blue-100 rounded-lg">
              <FontAwesomeIcon
                className="text-blue-400 fa-3x"
                icon={["far", "shield-check"]}
              />
            </div>
            <h3 className="mb-4 title3 font-really font-bold">
              {t("security.title2")}
            </h3>
            <p className="mb-8 textp">{t("security.description2")}</p>
          </div>
          <a href="#enabled-compliance" className="text-blue-400 font-bold">
            More
            <FontAwesomeIcon className="pl-1" icon={["fas", "chevron-right"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Security;
