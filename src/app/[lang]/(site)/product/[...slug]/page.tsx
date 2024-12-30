import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Metadata, NextPage } from "next";
import { getProductBySlug } from "@/lib/query-content";
import { mdxMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { components } from "@/components/mdx";
import { ParsedUrlQuery } from "querystring";
import { allProducts } from "contentlayer/generated";

interface Params extends ParsedUrlQuery {
  slug: string[];
  lang: string;
}

interface Props {
  params: Params;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug.split("/"),
  }));
}

export async function generateMetadata({
  params: { lang, slug: slugs },
}: Props): Promise<Metadata> {
  const content = getProductBySlug(slugs, lang)!;
  if (!content) return notFound();

  const { title, image, description, ogTitle } = content;
  const meta = { title, image, description, ogTitle };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang, slug: slugs } }) => {
  const content = getProductBySlug(slugs, lang);
  const MDXContent = useMDXComponent(content?.body.code ?? "");

  return (
    <div>
      <article className="mx-auto format format-sm sm:format-base lg:format-lg format-blue">
        <MDXContent components={components} />
      </article>
    </div>
  );
};
export default Page;
