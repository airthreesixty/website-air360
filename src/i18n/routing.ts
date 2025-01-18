//https://github.com/IngEoGeoBuk/next-intl-splitting-multiple-files
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  // localePrefix: 'as-needed',
  pathnames: {
    "/": "/",
    "/en": "/en",
    "/ja": "/ja",
    "/docs": "/docs",
    "/request-demo": "/request-demo",
    "/ai": "/ai",
    "/manifesto": "/manifesto",
    "/about": "/about",
    "/privacy-policy": "/privacy-policy",
    "/blog": "/blog",
    "/content-gallery": "/content-gallery",
    "/guides": "/guides",
    "/guides/cro-for-beginners": "/guides/cro-for-beginners",
    "/guides/cro-glossary": "/guides/cro-glossary",
    "/values": "/values",
    "/where-is-your-data": "/where-is-your-data",
    "/contact": "/contact",
    "/roi-calculator-eur": "/roi-calculator-eur",
    "/product/website-analysis": "/product/website-analysis",
    "/product/app-analysis": "/product/app-analysis",
    "/product/capabilities/data-collection":
      "/product/capabilities/data-collection",
    "/product/capabilities/events-segments":
      "/product/capabilities/events-segments",
    "/product/capabilities/data-analysis":
      "/product/capabilities/data-analysis",
    "/product/capabilities/data-activation":
      "/product/capabilities/data-activation",
    "/product/security-compliance": "/product/security-compliance",
    "/product/data-integrations": "/product/data-integrations",
    "/use-cases/e-commerce": "/use-cases/e-commerce",
    "/use-cases/hotels": "/use-cases/hotels",
    "/use-cases/luxury-brands": "/use-cases/luxury-brands",
    "/use-cases/airlines": "/use-cases/airlines",
    "/use-cases/gaming": "/use-cases/gaming",
    "/use-cases/banks-and-insurance": "/use-cases/banks-and-insurance",
    "/use-cases/multi-brand-companies": "/use-cases/multi-brand-companies",
    "/use-cases/sport-team": "/use-cases/sport-team",
    "/thank-you-for-the-demo-request": "/thank-you-for-the-demo-request",
    "/pathnames": {
      en: "/test",
      ja: "/testja",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
