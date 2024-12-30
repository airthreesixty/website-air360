import React, { Suspense } from "react";
import { Metadata, NextPage } from "next";
import ListLayout from "@/components/blog/list-layout";
import { getAllPostByTag } from "@/lib/query-content";

import { mdxMetadata } from "@/lib/metadata";
import { TAGS } from "@/lib/constants";
import { getTranslations } from "@/i18n/getTranslations";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  return TAGS.map((tag) => ({
    slug: tag,
  }));
}

export async function generateMetadata({
  params: { slug, lang },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "blog" });
  const titleKey = `tag.${slug}`;
  const ogTitle = `Air360 - ${t(titleKey)}`;

  const meta = {
    description: t("blog-index.description"),
    title: t(titleKey),
    ogTitle,
  };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang, slug } }) => {
  const posts = getAllPostByTag(slug, lang);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListLayout posts={posts} />
    </Suspense>
  );
};

export default Page;
