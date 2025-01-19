import {
  allBlogs,
  allChangelogs,
  allContentGalleries,
  allProducts,
  allUseCases,
} from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getPostBySlug = (slug: string, lang: string) => {
  return allBlogs.find((p) => {
    return p.slug === slug && p.locale === lang;
  });
};

export const getAllPostByTag = (tag: string, lang: string) => {
  return allBlogs.filter((p) => {
    return p.tags.includes(tag) && p.locale === lang;
  });
};

export const getAllPosts = (lang: string) => {
  return allBlogs
    .filter((post) => post.locale === lang)
    .sort((a, b) => compareDesc(new Date(a.published), new Date(b.published)));
};

export const getAllContenGallery = (lang: string) => {
  return allContentGalleries
    .filter((post) => post.locale === lang)
    .sort((a, b) => compareDesc(new Date(a.published), new Date(b.published)));
};

export const getContenGalleryBySlug = (slug: string, lang: string) => {
  return allContentGalleries.find((p) => {
    return p.slug === slug && p.locale === lang;
  });
};

export const getAllProducts = (lang: string) => {
  return allProducts.filter((post) => post.locale === lang);
};
export const getProductBySlug = (slugs: string[], lang: string) => {
  const slug = slugs.join("/") || "";
  const url = `${lang}/product/${slug}`;

  return allProducts.find((p) => {
    return p.url === url;
  });
};

export const getAllUsesCases = (lang: string) => {
  return allUseCases.filter((post) => post.locale === lang);
};

export const getUsesCaseBySlug = (slugs: string[], lang: string) => {
  const slug = slugs.join("/") || "";
  const url = `${lang}/use-cases/${slug}`;

  return allUseCases.find((p) => {
    return p.url === url;
  });
};

export const getAllChangelogs = (lang: string) => {
  return allChangelogs.filter((changelog) => changelog.locale === lang);
};

export const getChangelogBySlug = (slugs: string[], lang: string) => {
  const slug = slugs.join("/") || "";
  const url = `${lang}/changelog/${slug}`;

  return allChangelogs.find((p) => {
    return p.url === url;
  });
};
