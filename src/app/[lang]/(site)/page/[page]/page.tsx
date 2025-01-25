import { getAllChangelogs } from "@/lib/query-content";
import IndexPage from "../../changelog/page";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

interface ParamsProps {
  page: string;
  lang: string;
}

const ITEMS_PER_PAGE = 4;

export async function generateStaticParams() {
  let allParams: ParamsProps[] = [];

  for (const lang of SUPPORTED_LANGUAGES) {
    const slugs = getAllChangelogs(lang).map((changelog) => ({
      slug: changelog.slug,
    }));
    const changelogLength = Math.floor(slugs.length / ITEMS_PER_PAGE);
    const numbers = Array.from({ length: changelogLength + 1 }, (_, i) => ({
      page: i.toString(),
      lang: lang,
    }));

    allParams = allParams.concat(numbers);
  }

  return allParams;
}

const Page = IndexPage;

export default Page;
