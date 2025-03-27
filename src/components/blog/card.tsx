"use client";

import { Blog } from "contentlayer/generated";
import { Link, Pathnames } from "@/i18n/routing";
import Tags from "@/components/mdx/tags";
import ReadingMeta from "@/components/mdx/reading-meta";
import ExportedImage from "next-image-export-optimizer";

interface BlogCardProps {
  post: Blog;
}
export default function BlogCard({ post }: BlogCardProps) {
  const { readingTime, published, writerName, writerImg } = post;
  const meta = { readingTime, published, writerName, writerImg };
  const url = `/blog/${post.slug}` as Pathnames;

  return (
    <Link href={url} className="block">
      <article className="relative p-4 bg-white h-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow">
        <ExportedImage
          src={post.image}
          alt={post.title}
          className="mb-5 rounded-lg !h-50 !w-full object-cover"
          width={500}
          height={300}
          placeholder="empty"
        />
        <Tags tags={post.tags} noLink />

        <h2 className="mt-2 mb-15 text-xl font-bold tracking-tight text-black-600">
          {post.title}
        </h2>

        <div className="flex items-center space-x-4 absolute bottom-2">
          <ReadingMeta {...meta} type={"card"} />
        </div>
      </article>
    </Link>
  );
}
