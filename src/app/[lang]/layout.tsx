import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { getTranslations } from 'next-intl/server';
import { getBaseUrl } from '@/lib/metadata';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

const really = localFont({
  src: '../fonts/ReallySansLargeTrial-Black.woff',
  variable: '--font-really',
  weight: '900'
});

const noto = localFont({
  src: '../fonts/NotoSansJP-SemiBold.ttf',
  variable: '--font-noto',
  weight: '400 900'
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateMetadata({ params: { lang } }: RootLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'Metadata' });
  const baseUrl = getBaseUrl();
  const url = new URL(baseUrl);

  return {
    title: {
      template: 'Air360 - %s',
      default: t('title')
    },
    description: t('description'),
    metadataBase: url,
    alternates: {
      canonical: './'
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: '/card.png',
      url: './'
    }
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = useMessages();

  // remove "antialiased" class from body to match nuxt site version
  return (
    <html lang={params.lang}>
      <body className={`${inter.variable} ${really.variable} ${noto.variable}`}>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
