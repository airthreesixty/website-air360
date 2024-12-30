import IncreaseConversion from "./common/increase-conversion";
import BlogInnerCard from "./mdx/blog-inner-card";

interface BlogInnerCardProps {
  title?: string;
  src?: string;
  slug: string;
  lang?: string;
}

export function IncreaseConversionWrapper() {
  return <IncreaseConversion />;
}

export const BlogInnerCardWrapper = ({
  title,
  src,
  slug,
  lang,
}: BlogInnerCardProps) => {
  return <BlogInnerCard title={title} src={src} slug={slug} lang={lang} />;
};
