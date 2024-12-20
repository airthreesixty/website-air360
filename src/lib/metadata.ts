import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function mdxMetadata(frontmatter: MdxMetadata): Promise<Metadata> {
  // const headersList = headers();
  // const host = headersList.get('host') || 'localhost';
  // const protocol = headersList.get('x-forwarded-proto') || 'http';
  // const pathName = headersList.get('x-current-path') || '';
  // const url = `${protocol}://${host}${pathName}`;

  const image = frontmatter?.image || undefined;

  return {
    ...frontmatter,
    openGraph: {
      title: frontmatter.ogTitle || frontmatter.title,
      description: frontmatter.description,
      url: './',
      images: image ? [{ url: image }] : []
    }
  };
}

export const getBaseUrl = (full = false) => {
  if (typeof window !== 'undefined') {
    // Client-side
    return process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
  } else {
    // Server-side
    const headersList = headers();
    const host = headersList.get('host') || 'localhost';
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const pathName = full ? headersList.get('x-current-path') || '' : '';
    const baseUrl = `${protocol}://${host}${pathName}`;
    return baseUrl;
  }
};
