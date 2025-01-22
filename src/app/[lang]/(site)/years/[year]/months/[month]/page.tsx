import { Suspense } from "react";
import dayjs from "dayjs";
import { MainLayout } from "@/app/[lang]/(site)/changelog/layout/main-layout";
// import { getArticleSlugs } from "@/lib/get-articles-slugs";
import { ClientMonth } from "./components/client-month";
import { getAllChangelogs } from "@/lib/query-content";

interface PageProps {
  params: {
    month: string;
    year: string;
    locale: string;
  };
}

// 静的ページの生成パラメータ
export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 41 }, (_, i) =>
    (currentYear - 20 + i).toString()
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    i < 9 ? `0${i + 1}` : `${i + 1}`
  );

  // 全ての年月の組み合わせを生成
  return years.flatMap((year) =>
    months.map((month) => ({
      year,
      month,
      locale: "en", // 必要に応じて他のロケールを追加
    }))
  );
}

// メタデータの生成
export async function generateMetadata({ params }: PageProps) {
  const { year, month } = params;
  const formattedDate = dayjs(`${year}-${month}-01`).format("MMMM YYYY");

  return {
    title: `Changelog - ${formattedDate}`,
    description: `Monthly changelog for ${formattedDate}`,
  };
}

// サーバーサイドでのデータ取得と初期処理
async function getMonthChangelogs(year: string, month: string) {
  const changelogs = getAllChangelogs("en");

  const filteredMeta = changelogs
    .map((changelog) => ({
      slug: changelog.slug,
      publishedAt: changelog.publishedAt,
      title: changelog.title,
      headerImage: changelog.headerImage,
    }))
    .filter((item) => {
      const publishedAt = dayjs(item.publishedAt);
      return (
        publishedAt.format("YYYY") === year &&
        publishedAt.format("MM") === month
      );
    });

  return filteredMeta.map((item) => ({
    slug: item.slug,
    publishedAt: item.publishedAt,
    title: item.title,
    headerImage: item.headerImage,
  }));
}

// メインのページコンポーネント（サーバーサイド）
export default async function Page({ params }: PageProps) {
  const { year, month } = params;
  const changelogs = await getMonthChangelogs(year, month);

  return (
    <MainLayout infiniteScrollingView="month">
      <Suspense fallback={<div>Loading articles...</div>}>
        <ClientMonth changelogs={changelogs} year={year} month={month} />
      </Suspense>
    </MainLayout>
  );
}
