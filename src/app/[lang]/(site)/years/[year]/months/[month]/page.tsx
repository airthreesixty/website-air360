import dayjs from "dayjs";
import { MainLayout } from "@/app/[lang]/(site)/changelog/layout/main-layout";
import { ClientMonth } from "./components/client-month";
import { getAllChangelogs } from "@/lib/query-content";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

interface PageProps {
  params: {
    month: string;
    year: string;
    lang: string;
  };
}

export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 41 }, (_, i) =>
    (currentYear - 20 + i).toString()
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    i < 9 ? `0${i + 1}` : `${i + 1}`
  );

  return SUPPORTED_LANGUAGES.flatMap((locale) =>
    years.flatMap((year) =>
      months.map((month) => ({
        year,
        month,
        locale,
      }))
    )
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { year, month } = params;
  const formattedDate = dayjs(`${year}-${month}-01`).format("MMMM YYYY");

  return {
    title: `Changelog - ${formattedDate}`,
    description: `Monthly changelog for ${formattedDate}`,
  };
}

async function getMonthChangelogs(year: string, month: string, lang: string) {
  const changelogs = getAllChangelogs(lang);

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

export default async function Page({ params }: PageProps) {
  const { year, month } = params;
  const changelogs = await getMonthChangelogs(year, month, params.lang);

  return (
    <MainLayout infiniteScrollingView="month">
      <ClientMonth changelogs={changelogs} year={year} month={month} />
    </MainLayout>
  );
}
