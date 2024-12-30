import React from "react";
import BlogCard from "@/components/blog/card";
import { allBlogs } from "contentlayer/generated";
import { getTranslations } from "@/i18n/getTranslations";

interface RelatedArticlesProps {
  lang: string;
  tags: string[];
  currentSlug: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = async ({
  lang,
  tags,
  currentSlug,
}) => {
  const t = await getTranslations({ locale: lang, namespace: "blog" });

  const posts = allBlogs
    .filter(
      (post) =>
        post.locale === lang && // Locale match
        post.tags.some((tag) => tags.includes(tag)) && // At least one matching tag
        post.published && // Has a published date
        post.slug !== currentSlug // Different slug
    )
    .slice(0, 3); // Limit the list to 3 posts

  if (posts.length === 0) return null;

  return (
    <aside
      aria-label={t("related-articles")}
      className="py-8 lg:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          {t("related-articles")}
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RelatedArticles;
