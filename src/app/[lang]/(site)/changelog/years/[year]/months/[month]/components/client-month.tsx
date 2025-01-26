"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { MdxLayout } from "@/components/layout/mdx-layout";
import { usePathname } from "next/navigation";

interface Changelog {
  slug: string;
  publishedAt: string;
  title: string;
  headerImage: string;
}

interface ClientMonthViewProps {
  changelogs: Changelog[];
  year: string;
  month: string;
}

export function ClientMonth({ changelogs, year, month }: ClientMonthViewProps) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const ArticleComponents = useMemo(() => {
    return changelogs.map((changelog) => ({
      Component: dynamic(
        () => import(`@/content/${lang}/changelog/${changelog.slug}.mdx`)
      ),
      slug: changelog.slug,
    }));
  }, [changelogs]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    const targetElementId = hash.slice(hash.indexOf("#") + 1);

    if (!targetElementId || targetElementId === changelogs[0]?.slug) return;

    const scrollToElement = () => {
      const element = document.getElementById(targetElementId);
      const firstElement = document.querySelector(".timeline-item");

      if (element === firstElement) return;

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    setTimeout(scrollToElement, 1000);
  }, [changelogs]);

  if (changelogs.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">
          No changelogs found for {month}/{year}
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {ArticleComponents.map(({ Component, slug }) => {
        const changelog = changelogs.find(
          (changelog) => changelog.slug === slug
        );

        if (!changelog) {
          return null;
        }

        const meta = {
          slug: changelog.slug,
          publishedAt: changelog.publishedAt,
          title: changelog.title,
          headerImage: changelog.headerImage,
        };
        return (
          <MdxLayout meta={meta} key={slug}>
            <Component key={slug} />
          </MdxLayout>
        );
      })}
    </div>
  );
}
