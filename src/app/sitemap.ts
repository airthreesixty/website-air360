import type { MetadataRoute } from 'next';
import { product } from '@/components/layout/menu/product';
import { useCases } from '@/components/layout/menu/use-cases';
import { flattenAndMergeSlugs } from '@/lib/utils';
import { getAllContenGallery, getAllPosts } from '@/lib/query-content';
import { TAGS } from '@/lib/constants';
import { getBaseUrl } from '@/lib/metadata';

const defaultLocale = 'en' as const;
const locales = ['en', 'ja'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const host = getBaseUrl();
  const slugs = ['/request-demo', '/contact', '/roi-calculator-eur', '/blog', '/content-gallery', '/guides', '/values', '/about', '/privacy-policy'];

  const blog = getAllPosts(defaultLocale).map((post) => post.url.replace(`${defaultLocale}/blog`, '/blog'));
  const tags = TAGS.map((tag) => `/blog/tag/${tag}`);
  const contentGallery = getAllContenGallery(defaultLocale).map((post) => post.url.replace(`${defaultLocale}/content-gallery`, '/content-gallery'));

  const slugsMerged = [...flattenAndMergeSlugs(product), ...flattenAndMergeSlugs(useCases), ...slugs, ...blog, ...tags, ...contentGallery];
  const pages = slugsMerged.map((slug) => getEntry(host, slug));

  return [getEntry(host, '/'), ...pages];
}

function getEntry(host: string, pathname: string) {
  return {
    url: getUrl(host, pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(host, pathname, locale)]))
    }
  };
}

function getUrl(host: string, pathname: string, locale: string) {
  return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
