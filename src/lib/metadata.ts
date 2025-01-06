import { Metadata } from "next";

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
      url: "./",
      images: image ? [{ url: image }] : [],
    },
  };
}

export const getBaseUrl = () => {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    return process.env.NEXT_PUBLIC_BASE_URL || "https://air360.io";
  }
  // Client-side
  return process.env.NEXT_PUBLIC_BASE_LOCAL_URL || window.location.origin;
};
