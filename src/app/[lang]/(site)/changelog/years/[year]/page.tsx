import { getAllChangelogs } from "@/lib/query-content";
import { MainLayout } from "../../layout/main-layout";
import ClientMonths from "./components/client-months";

interface IImagePreviewMeta {
  imageUrl: string;
  slug: string;
  publishedAt: string;
  weeklyViewPage: number;
  monthlyViewPage: number;
}

interface IAggregatedChangelogs {
  [key: string]: IImagePreviewMeta[];
}

interface PageProps {
  params: {
    year: string;
    lang: string;
  };
}

interface Props {
  params: { lang: string };
}

const ITEMS_PER_PAGE = 4;

export async function generateMetadata({ params }: PageProps) {
  return {
    title: `Changelog ${params.year}`,
  };
}

export async function generateStaticParams({ params }: Props) {
  const changelogs = getAllChangelogs(params.lang);
  const yearsSet = new Set<number>();

  changelogs.forEach((changelog) => {
    const date = new Date(changelog.publishedAt);
    yearsSet.add(date.getFullYear());
  });

  return Array.from(yearsSet).map((year) => ({
    year: year.toString(),
  }));
}

// メインのページコンポーネント
export default async function Page({ params }: PageProps) {
  const changelogs = getAllChangelogs(params.lang);

  const meta = changelogs.map((changelog) => ({
    slug: changelog.slug,
    publishedAt: changelog.publishedAt,
    title: changelog.title,
    headerImage: changelog.headerImage,
  }));

  meta.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  // 月ごとのchangelogの集約
  const monthChangelogsMap: IAggregatedChangelogs = meta.reduce(
    (acc, item, index) => {
      const date = new Date(item.publishedAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;

      if (year.toString() !== params.year) return acc;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push({
        imageUrl: item.headerImage,
        slug: item.slug,
        publishedAt: item.publishedAt,
        weeklyViewPage: Math.floor(index / ITEMS_PER_PAGE),
        monthlyViewPage: 0,
      });

      return acc;
    },
    {} as IAggregatedChangelogs
  );

  return (
    <MainLayout infiniteScrollingView="year">
      <ClientMonths
        initialMonthChangelogsMap={monthChangelogsMap}
        year={params.year}
      />
    </MainLayout>
  );
}
