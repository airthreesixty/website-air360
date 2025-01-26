import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getBaseUrl } from "@/lib/metadata";
import Providers from "./providers";
import { getTranslations } from "@/i18n/getTranslations";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const really = localFont({
  src: "../fonts/ReallySansLargeTrial-Black.woff",
  variable: "--font-really",
  weight: "900",
});

const noto = localFont({
  src: "../fonts/NotoSansJP-SemiBold.ttf",
  variable: "--font-noto",
  weight: "400 900",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateStaticParams() {
  return ["en", "ja"].map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params: { lang },
}: RootLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });
  const baseUrl = getBaseUrl();
  const url = new URL(baseUrl);

  return {
    title: {
      template: "Air360 - %s",
      default: t("title"),
    },
    description: t("description"),
    metadataBase: url,
    alternates: {
      canonical: "./",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: "/card.png",
      url: "./",
    },
  };
}

async function getMessages(locale: string) {
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
  return messagesModule;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const messages = await getMessages(params.lang);

  // remove "antialiased" class from body to match nuxt site version
  return (
    <html lang={params.lang}>
      <body className={`${inter.variable} ${really.variable} ${noto.variable}`}>
        <Providers locale={params.lang} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
