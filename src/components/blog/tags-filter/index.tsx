"use client";

import { Link, Pathnames } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./styles.css";
import { TAGS } from "@/lib/constants";

interface Props {
  tagList?: string[];
}
const defaultList = TAGS;

const TagsFilter: React.FC<Props> = ({ tagList = defaultList }) => {
  const t = useTranslations("blog");
  return (
    <nav aria-label="Tags">
      <Link href="/blog" className="tag__link">
        All
      </Link>
      {tagList.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${tag}` as Pathnames}
          className="tag__link"
        >
          {t(`tag.${tag}`)}
        </Link>
      ))}
    </nav>
  );
};

export default TagsFilter;
