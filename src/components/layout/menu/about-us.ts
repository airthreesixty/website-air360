import { MenuSection } from "./models";

export const aboutUs: MenuSection[] = [
  {
    id: 1,
    items: [
      {
        label: "about.title",
        iconColor: "text-purple-600",
        icon: "building",
        slug: "/about",
      },
      {
        label: "manifesto",
        iconColor: "text-purple-600",
        icon: "envelope-open-text",
        slug: "/manifesto",
      },
      // {
      //   label: "our-values",
      //   iconColor: "text-purple-600",
      //   icon: "hands-holding-dollar",
      //   slug: "/values",
      // },
      {
        label: "our-stance",
        iconColor: "text-purple-600",
        icon: "microchip-ai",
        slug: "/ai",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        label: "privacy-policy.title",
        iconColor: "text-purple-600",
        icon: "file-shield",
        slug: "/privacy-policy",
      },
      {
        label: "security.title",
        iconColor: "text-purple-600",
        icon: "shield-check",
        slug: "/product/security-compliance",
      },
    ],
  },
];

export const aboutUsMobile: MenuSection[] = [
  {
    id: 1,
    items: [
      {
        label: "about.title",
        iconColor: "text-purple-600",
        icon: "building",
        slug: "/about",
      },
      {
        label: "manifesto",
        iconColor: "text-purple-600",
        icon: "envelope-open-text",
        slug: "/manifesto",
      },
      {
        label: "our-values",
        iconColor: "text-purple-600",
        icon: "hands-holding-dollar",
        slug: "/values",
      },
      {
        label: "our-stance",
        iconColor: "text-purple-600",
        icon: "microchip-ai",
        slug: "/ai",
      },
      {
        label: "privacy-policy.title",
        iconColor: "text-purple-600",
        icon: "file-shield",
        slug: "/privacy-policy",
      },
      {
        label: "security.title",
        iconColor: "text-purple-600",
        icon: "shield-check",
        slug: "/product/security-compliance",
      },
    ],
  },
];
