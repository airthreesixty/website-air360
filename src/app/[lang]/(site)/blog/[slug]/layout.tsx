import RelatedArticles from "@/components/blog/related-articles";
import CtaNew from "@/components/common/cta-new";
import { getPostBySlug } from "@/lib/query-content";
import { allBlogs } from "contentlayer/generated";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  params: { lang: string; slug: string };
}>;

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Layout({
  children,
  params: { lang, slug },
}: Props) {
  const post = getPostBySlug(slug, lang);

  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="pt-10 pb-5">
          <div className="container !max-w-[800px] lg:flex lg:justify-between gap-8">
            <div>{children}</div>
          </div>
        </div>
      </div>
      <CtaNew />
      {post?.tags && (
        <RelatedArticles lang={lang} tags={post.tags} currentSlug={slug} />
      )}
    </>
  );
}
