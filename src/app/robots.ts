import { getBaseUrl } from '@/lib/metadata';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const host = getBaseUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${host}/sitemap.xml`
  };
}
