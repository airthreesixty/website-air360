import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getBaseUrl } from "@/lib/metadata";
import Providers from "./providers";
import { getTranslations } from "@/i18n/getTranslations";
import Script from "next/script";

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
        {/* Air360 script */}
        {/* {process.env.NEXT_PUBLIC_PLATFORM === "prod" && ( */}
        <Script id="air360-script">
          {`window.Air360 = window.Air360||[],Air360.init=Air360.init||function(e){window.Air360.appid=e;var a=document.createElement("script");a.type="module",a.async=!0,a.src="https://cdn.air360tracker.net/cl/air360.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){Air360.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","clearEventProperties","identify","removeEventProperty","setUserProperties","track","trackError","trackPurchase","trackConversion","optInUserTracking","optOutUserTracking","virtualPageview"],c=0;c<p.length;c++)Air360[p[c]]=o(p[c])};Air360.init("izxdj2ihcqxarhox");`}
        </Script>
        {/* )} */}
        <Providers locale={params.lang} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
