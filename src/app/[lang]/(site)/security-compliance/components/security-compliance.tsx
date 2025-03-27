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
    <div className="bg-gray-50 rounded-3xl px-4 text-center py-8 lg:py-12">
      <div className="my-8 space-y-14 md:flex md:gap-12 md:space-y-0 md:justify-center md:items-center md:m-0">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:flex md:gap-x-6 md:items-center">
            <div className="inline-flex justify-center shrink-0 items-center mb-6 lg:mb-0 w-24 h-24 rounded-lg bg-primary-100">
              <FontAwesomeIcon
                className="text-primary-600 fa-3x"
                icon={["far", "file-contract"]}
              />
            </div>
            <div className="md:text-left max-w-[350px] mx-auto">
              <h3 className="mb-4 title3 font-bold md:mb-2">
                {t("security.title1")}
              </h3>
              <p className="mb-8 text-black-600 md:mb-2">
                {t("security.description1")}
              </p>
              <a
                href="#enabled-compliance"
                className="text-primary-600 font-bold"
              >
                More
                <FontAwesomeIcon
                  className="pl-1"
                  icon={["fas", "chevron-right"]}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="md:flex md:gap-x-6 md:items-center">
            <div className="inline-flex shrink-0 justify-center items-center mb-6 lg:mb-0 w-24 h-24 bg-blue-200/60 rounded-lg">
              <FontAwesomeIcon
                className="text-blue-400 fa-3x"
                icon={["far", "shield-check"]}
              />
            </div>
            <div className="md:text-left max-w-[350px] mx-auto">
              <h3 className="mb-4 title3 font-bold md:mb-2">
                {t("security.title2")}
              </h3>
              <p className="mb-8 text-black-600 md:mb-2">
                {t("security.description2")}
              </p>
              <a href="#enabled-compliance" className="text-blue-400 font-bold">
                More
                <FontAwesomeIcon
                  className="pl-1"
                  icon={["fas", "chevron-right"]}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
