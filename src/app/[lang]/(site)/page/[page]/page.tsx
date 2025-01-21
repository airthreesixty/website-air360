import { useMemo } from "react";
import { IPageProps } from "../../changelog/components/change-log-page";
import { MainLayout } from "../../changelog/layout/main-layout";
// import { getArticleSlugs } from "lib/get-articles-slugs";
// import IndexPage from "../index";
import { getAllChangelogs } from "@/lib/query-content";
import IndexPage from "../../changelog/page";

const ITEMS_PER_PAGE = 4;

export async function generateStaticParams() {
  // ページの数だけパラメータを生成
  const slugs = getAllChangelogs("en").map((changelog) => ({
    slug: changelog.slug,
  }));
  const changelogLength = Math.floor(slugs.length / ITEMS_PER_PAGE);
  const numbers = Array.from({ length: changelogLength + 1 }, (_, i) => ({
    page: i.toString(),
    lang: "en",
  }));
  return numbers;
  //   return ["en", "ja"].map((lang) => ({
  //     lang,
  //   }));
}

const Page = IndexPage;

export default Page;
