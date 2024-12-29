import React from "react";
import { Metadata, NextPage } from "next";
import ListLayout from "@/components/blog/list-layout";
import { getAllPostByTag } from "@/lib/query-content";
import { getTranslations } from "next-intl/server";
import { mdxMetadata } from "@/lib/metadata";
import { TAGS } from "@/lib/constants";

interface Props {
  params: { lang: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return TAGS.map((tag) => ({
    slug: tag,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const t = await getTranslations("blog");
  const titleKey = `tag.${slug}`;
  const ogTitle = `Air360 - ${t(titleKey)}`;

  const meta = {
    description: t("blog-index.description"),
    title: t(titleKey),
    ogTitle,
  };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang, slug }, searchParams }) => {
  const posts = getAllPostByTag(slug, lang);

  return <ListLayout posts={posts} searchQuery={searchParams?.query} />;
};

export default Page;
