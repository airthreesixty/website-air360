import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import ReadingMeta from "@/components/mdx/reading-meta";
import { Metadata, NextPage } from "next";
import Tags from "@/components/mdx/tags";
import SocialLinks from "@/components/common/social-links";
import { components } from "@/components/mdx";
import { getPostBySlug } from "@/lib/query-content";
import { mdxMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  const post = getPostBySlug(slug, lang)!;
  if (!post) return notFound();
  const { title, image, metaDesc } = post;
  const meta = { title, image, description: metaDesc };
  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang, slug } }) => {
  const post = getPostBySlug(slug, lang);

  const MDXContent = useMDXComponent(post?.body.code ?? ""); // MDX content is available as "code"

  if (!post) return null;

  const {
    readingTime,
    published,
    writerName,
    writerImg,
    title,
    image,
    ...blogPost
  } = post;
  const pathname = `/blog/${slug}`;
  const meta = { readingTime, published, writerName, writerImg };

  return (
    <article className="mx-auto format format-sm sm:format-base lg:format-lg format-blue">
      <div className="flex items-center justify-between">
        <Tags tags={blogPost.tags} />
        <aside aria-label="Share social media">
          <SocialLinks pathname={pathname} variant="share" />
        </aside>
      </div>
      <header className="my-4 lg:mb-10 not-format">
        <div className="flex items-center justify-between mb-6 not-italic">
          <ReadingMeta {...meta} type={"page"} />
        </div>
        <h1 className="mb-8 text-2xl font-semibold text-black-600 lg:text-4xl">
          {title}
        </h1>
        <ExportedImage
          src={image as string}
          alt={title}
          width={800}
          height={400}
          className="h-90 mb-10 rounded-lg w-full object-cover"
        />
      </header>
      <div className="prose prose-lg">
        <MDXContent components={components} />
      </div>
    </article>
  );
};
export default Page;
