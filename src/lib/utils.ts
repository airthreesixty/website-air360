import { MenuSection } from "@/components/layout/menu/models";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPriceEuro = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export const formatPriceYen = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
};

export const normalizeString = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const flattenAndMergeSlugs = (menuSections: MenuSection[]): string[] => {
  return menuSections.flatMap((section) =>
    section.items.map((item) => item.slug)
  );
};

export async function getMdxContent(
  lang: string,
  path: string,
  defaultLang: string = "en"
) {
  try {
    const content = await import(`@/app/[lang]/(site)/${path}/${lang}.mdx`);
    return {
      Content: content.default,
      frontmatter: content.frontmatter,
    };
  } catch (error) {
    try {
      const fallbackContent = await import(
        `@/app/[lang]/(site)/${path}/${defaultLang}.mdx`
      );
      return {
        Content: fallbackContent.default,
        frontmatter: fallbackContent.frontmatter,
      };
    } catch {
      throw new Error(`MDX content not found for path: ${path}`);
    }
  }
}
