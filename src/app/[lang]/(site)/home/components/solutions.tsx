import ColoredCards from "./colored-cards";
import { cn } from "@/lib/utils";
import { getTranslations } from "@/i18n/getTranslations";

const Solutions = async ({ lang }: { lang: string }) => {
  const t = await getTranslations({
    locale: lang,
    namespace: "home.solutions",
  });

  const items = [
    {
      title: t("slide-1.title"),
      description: t("slide-1.description"),
      icon: "magnifying-glass-chart",
      bg: "bg-primary-100/50",
      color: "text-primary-600",
    },
    {
      title: t("slide-2.title"),
      description: t("slide-2.description"),
      icon: "tag",
      bg: "bg-orange-100/60",
      color: "text-orange-600",
    },
    {
      title: t("slide-3.title"),
      description: t("slide-3.description"),
      icon: "clock",
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="text-center">
      <span className="font-really font-bold text-black-600">
        {t("subtext")}
      </span>
      <h2
        className={cn(
          "font-really font-bold mt-2 text-black-600 text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
          lang === "ja" && "md:text-4xl lg:text-5xl xl:text-6xl font-noto"
        )}
      >
        {t("title")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4 lg:mt-16">
        <ColoredCards items={items} />
      </div>
    </div>
  );
};

export default Solutions;
