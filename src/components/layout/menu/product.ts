import { MenuSection } from "./models";

export const product: MenuSection[] = [
  {
    title: "subMenu.features",
    id: 1,
    items: [
      {
        label: "subMenu.website-analysis",
        iconColor: "text-primary-600",
        icon: "laptop",
        slug: "/product/website-analysis",
        description: "website-analysis.title",
      },
      {
        label: "subMenu.app-analysis",
        iconColor: "text-primary-600",
        icon: "mobile",
        slug: "/product/app-analysis",
        description: "app-analysis.title",
      },
    ],
  },
  {
    title: "subMenu.capabilities",
    id: 2,

    items: [
      {
        label: "subMenu.data-collection",
        iconColor: "text-orange-600",
        icon: "album-collection",
        slug: "/product/capabilities/data-collection",
        description: "data-collection.title",
      },
      {
        label: "subMenu.events-segments",
        iconColor: "text-orange-600",
        icon: "calendar-circle-user",
        slug: "/product/capabilities/events-segments",
        description: "events-segments.title",
      },
      {
        label: "subMenu.data-analysis",
        iconColor: "text-orange-600",
        icon: "magnifying-glass-chart",
        slug: "/product/capabilities/data-analysis",
        description: "data-analysis.title",
      },
      {
        label: "subMenu.data-activation",
        iconColor: "text-orange-600",
        icon: "chart-network",
        slug: "/product/capabilities/data-activation",
        description: "data-activation.title",
      },
    ],
  },
  {
    title: "subMenu.other",
    id: 3,

    items: [
      {
        label: "subMenu.security-compliance",
        iconColor: "text-blue-600",
        icon: "file-contract",
        slug: "/product/security-compliance",
        description: "security-compliance.title",
      },
      {
        label: "subMenu.data-integrations",
        iconColor: "text-blue-600",
        icon: "sliders",
        slug: "/product/data-integrations",
        description: "data-integrations.title",
      },
    ],
  },
];
