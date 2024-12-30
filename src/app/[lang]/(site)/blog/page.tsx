import { Metadata, NextPage } from "next";
import ListLayout from "@/components/blog/list-layout";

import { mdxMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/query-content";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "blog" });
  const meta = {
    description: t("blog-index.description"),
    title: t("blog-index.title"),
    ogTitle: `Air360 - ${t("blog-index.title")}`,
    image: "/heroIllustration.webp",
  };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang } }) => {
  const posts = getAllPosts(lang);

  return <ListLayout posts={posts} />;
};

export default Page;
