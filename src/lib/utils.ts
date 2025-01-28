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

/**
 * Gets the default array of responsive values that's mainly used in section containers.
 *
 * @example <Container maxW="landingMax" px={defaultPx(32)} />
 * @param desktopValue value for desktop sizes
 * @returns array of responsive values
 */
export const defaultPx = (
  desktopValue: number | string | (string | number)[]
) => {
  let newValues = [];
  if (typeof desktopValue === "string" || typeof desktopValue === "number") {
    newValues = [desktopValue];
  } else {
    newValues = desktopValue;
  }

  return [4, 4, 12, 12, ...newValues];
};
