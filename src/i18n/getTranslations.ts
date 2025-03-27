import { createTranslator } from "next-intl";

interface TranslatorOptions {
  locale: string;
  namespace?: string;
}

export const getTranslations = async (config: TranslatorOptions) => {
  const { locale, namespace } = config;

  const messagesModule = {
    ...(await import(`@/messages/${locale}/main.json`)).default,
    ...(await import(`@/messages/${locale}/blog.json`)).default,
    ...(await import(`@/messages/${locale}/contact.json`)).default,
    ...(await import(`@/messages/${locale}/home.json`)).default,
    ...(await import(`@/messages/${locale}/request-demo.json`)).default,
    ...(await import(`@/messages/${locale}/roi-calc.json`)).default,
    ...(await import(`@/messages/${locale}/security-compliance.json`)).default,
    ...(await import(`@/messages/${locale}/thank-you.json`)).default,
    ...(await import(`@/messages/${locale}/changelog.json`)).default,
  };

  const translator = createTranslator({
    locale,
    messages: messagesModule,
    namespace,
  });

  return translator;
};
