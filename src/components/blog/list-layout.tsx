import { Blog } from 'contentlayer/generated';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import BlogCard from '@/components/blog/card';
import TagsFilter from './tags-filter';
import SearchBar from './search-bar';
import { normalizeString } from '@/lib/utils';

interface Props {
  posts: Blog[];
  searchQuery?: string | string[] | undefined;
}

const ListLayout: NextPage<Props> = ({ posts, searchQuery }) => {
  const t = useTranslations('blog');
  const list = searchQuery ? posts.filter((post) => normalizeString(post.title).includes(normalizeString(searchQuery as string))) : posts;

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container py-8 lg:py-16'>
        <div className='mx-auto max-w-screen-[1400px] text-center mb-8 lg:mb-16'>
          <h1 className='mb-4 text-2xl tracking-tight font-extrabold text-black-600 lg:text-4xl dark:text-white'>Air360 {t('blog-index.title')}</h1>
          <h2 className='font-light mb-1 text-gray-450 md:text-xl'>{t('how-to-increase-conversion')}</h2>
          <TagsFilter />
          <SearchBar />
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {list.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListLayout;
