import { getAllChangelogs } from "@/lib/query-content";
import ChangelogPage from "./components/change-log-page";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { IAggregatedChangelogs, IImagePreviewMeta } from "@/lib/models/view";
import { Metadata } from "next";
import { getTranslations } from "@/i18n/getTranslations";
import { mdxMetadata } from "@/lib/metadata";

interface Props {
  params: { page?: string; lang: string };
}

const ITEMS_PER_PAGE = 4;

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "changelog" });
  const meta = {
    description: t("description"),
    title: t("title"),
    ogTitle: `Air360 - ${t("title")}`,
    image: "/heroIllustration.webp",
  };

  return mdxMetadata(meta);
}

export default async function Page({ params }: Props) {
  const page = parseInt(params.page ?? "0", 10);

  const slugs = getAllChangelogs(params.lang).map((changelog) => ({
    slug: changelog.slug,
  }));

  const meta: MdxMeta[] = getAllChangelogs(params.lang).map((changelog) => ({
    slug: changelog.slug,
    publishedAt: changelog.publishedAt,
    title: changelog.title,
    headerImage: changelog.headerImage,
  }));

  meta.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const recents = meta.slice(start, end).map((item) => item.slug);

  // aggregate images for monthly changelogs
  const monthChangelogsMap: IAggregatedChangelogs = meta.reduce(
    (acc: { [key: string]: IImagePreviewMeta[] }, item, index) => {
      const date = new Date(item.publishedAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push({
        imageUrl: item.headerImage,
        slug: item.slug,
        publishedAt: item.publishedAt,
        weeklyViewPage: Math.floor(index / ITEMS_PER_PAGE),
      } as IImagePreviewMeta);
      return acc;
    },
    {}
  );

  const recentMonthChangelogsMap: IAggregatedChangelogs = Object.keys(
    monthChangelogsMap
  )
    .slice(start, end)
    .reduce((acc: IAggregatedChangelogs, key: string) => {
      acc[key] = monthChangelogsMap[key];
      return acc;
    }, {});

  const yearsChangelogsMap: IAggregatedChangelogs = meta.reduce(
    (acc: { [key: string]: IImagePreviewMeta[] }, item, index) => {
      const date = new Date(item.publishedAt);
      const year = date.getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push({
        imageUrl: item.headerImage,
        slug: item.slug,
        publishedAt: item.publishedAt,
        weeklyViewPage: Math.floor(index / ITEMS_PER_PAGE),
        monthlyViewPage: Math.floor(
          (Object.keys(monthChangelogsMap)
            .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
            .indexOf(`${year}-${date.getMonth() + 1}`) +
            1) /
            ITEMS_PER_PAGE
        ),
      } as IImagePreviewMeta);
      return acc;
    },
    {}
  );

  const recentYearsChangelogsMap: IAggregatedChangelogs = Object.keys(
    yearsChangelogsMap
  )
    .slice(start, end)
    .reduce((acc: IAggregatedChangelogs, key: string) => {
      acc[key] = yearsChangelogsMap[key];
      return acc;
    }, {});

  return (
    <ChangelogPage
      slugs={recents}
      changelogsMap={{
        months: recentMonthChangelogsMap,
        years: recentYearsChangelogsMap,
      }}
      totalItems={{
        weeks: slugs.length,
        months: Object.keys(monthChangelogsMap).length,
        years: Object.keys(yearsChangelogsMap).length,
      }}
    />
  );
}
