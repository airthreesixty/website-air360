import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locales = "en" | "ja";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locales)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/main.json`)).default,
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/request-demo.json`)).default,
      ...(await import(`../messages/${locale}/thank-you.json`)).default,
      ...(await import(`../messages/${locale}/contact.json`)).default,
      ...(await import(`../messages/${locale}/roi-calc.json`)).default,
      ...(await import(`../messages/${locale}/blog.json`)).default,
      ...(await import(`../messages/${locale}/security-compliance.json`))
        .default,
    },
    timeZone: "Pacific/Noumea",
    // messages: (
    //   await (locale === 'en'
    //     ? // When using Turbopack, this will enable HMR for `en`
    //       import('../../messages/en.json')
    //     : import(`../../messages/${locale}.json`))
    // ).default
  };
});
