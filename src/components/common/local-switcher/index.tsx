import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";
import "./styles.css";
import Link from "next/link";

export default function LocaleSwitcher({
  footer = false,
}: {
  footer?: boolean;
}) {
  const t = useTranslations("main.LocaleSwitcher");
  const locale = useLocale();
  const otherLang = routing.locales.filter((l) => locale !== l)?.[0] || locale;

  if (footer) {
    return (
      <Link href={`/${otherLang}`}>{t("locale", { locale: otherLang })}</Link>
    );
  }

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      otherLang={otherLang}
      label={t("label")}
    />
  );
}
