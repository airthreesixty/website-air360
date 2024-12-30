"use client";

import { Link, Pathnames } from "@/i18n/routing";
import React from "react";
import MdxImage from "./mdx-image";
import { getPostBySlug } from "@/lib/query-content";
import { useLocale } from "next-intl";

interface Props {
  title?: string;
  src?: string;
  slug: string;
  lang?: string;
}

const BlogInnerCard: React.FC<Props> = ({
  title,
  src,
  slug,
  lang: language,
}) => {
  const locale = useLocale();
  const lang = language || locale;

  let postTitle = title;
  let postSrc = src;

  if (!title || !src) {
    const post = getPostBySlug(slug, lang);
    if (!post) return null;
    postTitle = postTitle || post.title;
    postSrc = postSrc || post.image;
  }
  const href = `/blog/${slug}` as Pathnames;

  return (
    <Link href={href} className="border-2 grid grid-cols-3 hover:opacity-70">
      {postSrc && (
        <div className="col-span-1 h-full md:h-35">
          <MdxImage
            src={postSrc}
            className="h-full w-full object-cover my-0"
            alt="title"
            width={250}
            height={140}
          />
        </div>
      )}
      <div className="col-span-2 p-3 my-auto">
        <span className="text-black-600 text-sm md:text-lg self-center">
          {postTitle}
        </span>
      </div>
    </Link>
  );
};

export default BlogInnerCard;
