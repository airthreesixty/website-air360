import React from 'react';
import { Link, Pathnames } from '@/i18n/routing';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

interface TagsProps {
  tags: string[];
  noLink?: boolean;
}

const Tags: React.FC<TagsProps> = ({ tags, noLink = false }) => {
  const t = useTranslations('blog');
  return (
    <div>
      {tags.map((tag, index) => {
        if (noLink) {
          return (
            <Badge variant='noLink' key={index}>
              {t(`tag.${tag}`)}
            </Badge>
          );
        }
        const url = `/blog/tag/${tag}` as Pathnames;
        return (
          <Link key={index} href={url}>
            <Badge>{t(`tag.${tag}`)}</Badge>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
