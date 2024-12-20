import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';
import './styles.css';
import BlogCard from '@/components/blog/card';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

interface Props extends PropsWithChildren {
  lang: string;
}

export default function ThankYouPageLayout({ children, lang }: Props) {
  const t = useTranslations('thank-you');

  const posts = allBlogs
    .sort((a, b) => compareDesc(new Date(a.published), new Date(b.published)))
    .filter((post) => post.locale === lang)
    .slice(0, 3);

  return (
    <div className='page-thank-you container mx-auto pb-12'>
      <div className='pt-6 md:pt-12'>{children}</div>
      <div className='mt-35'>
        <h2 className='mb-8 text-2xl font-bold text-black-600 text-center'>{t('warning')}</h2>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
