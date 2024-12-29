import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Metadata, NextPage } from "next";
import { getContenGalleryBySlug } from "@/lib/query-content";
import { mdxMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { components } from "@/components/mdx";
import { allContentGalleries } from "contentlayer/generated";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  return allContentGalleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  const post = getContenGalleryBySlug(slug, lang)!;
  if (!post) return notFound();

  const { title, image, description } = post;
  const meta = { title, image, description };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang, slug } }) => {
  const post = getContenGalleryBySlug(slug, lang);
  const MDXContent = useMDXComponent(post?.body.code ?? "", { slug, lang });

  return (
    <div>
      <article className="mx-auto format format-sm sm:format-base lg:format-lg format-blue">
        <MDXContent components={components} />
      </article>
    </div>
  );
};
export default Page;
