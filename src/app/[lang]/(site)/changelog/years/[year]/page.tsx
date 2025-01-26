import { Suspense } from "react";
import { getAllChangelogs } from "@/lib/query-content";
import { MainLayout } from "../../layout/main-layout";
import ClientMonths from "./components/client-months";
import LoadingDots from "@/components/common/LoadingDots";

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

const ITEMS_PER_PAGE = 4;

export async function generateMetadata({ params }: PageProps) {
  return {
    title: `Changelog ${params.year}`,
  };
}

export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 41 }, (_, i) =>
    (currentYear - 20 + i).toString()
  );

  return years.map((year) => ({
    year,
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
    <Suspense fallback={<LoadingDots className="w-6" numDots={3} />}>
      <MainLayout infiniteScrollingView="year">
        <ClientMonths
          initialMonthChangelogsMap={monthChangelogsMap}
          year={params.year}
        />
      </MainLayout>
    </Suspense>
  );
}
