"use client";

import { MdxLayout } from "@/components/layout/mdx-layout";
import { getAllChangelogs } from "@/lib/query-content";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";

interface IWeeksProps {
  slugs: string[];
  isInfiniteScrollingView?: boolean;
}

const Weeks = ({ slugs, isInfiniteScrollingView }: IWeeksProps) => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const Articles = React.useMemo(() => {
    return slugs.map((slug) =>
      dynamic(() => import(`@/content/${lang}/changelog/${slug}.mdx`))
    );
  }, [slugs]);

  const changelogs = getAllChangelogs(lang);
  return (
    <>
      {Articles.map((Article, index) => {
        const slug = slugs[index];
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
          <MdxLayout key={slug} meta={meta}>
            <Article
              key={index}
              // @ts-ignore
              index={index}
              hideLayout={true}
              hideHead={true}
              hideAuthors={true}
              isInfiniteScrollingView={isInfiniteScrollingView}
            />
          </MdxLayout>
        );
      })}
    </>
  );
};

export default Weeks;
