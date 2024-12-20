import { Metadata, NextPage } from 'next';
import ListLayout from '@/components/blog/list-layout';
import { getTranslations } from 'next-intl/server';
import { mdxMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/query-content';

interface Props {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({}: Props): Promise<Metadata> {
  const t = await getTranslations('blog');
  const meta = {
    description: t('blog-index.description'),
    title: t('blog-index.title'),
    ogTitle: `Air360 - ${t('blog-index.title')}`,
    image: '/heroIllustration.webp'
  };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang }, searchParams }) => {
  const posts = getAllPosts(lang);

  return <ListLayout posts={posts} searchQuery={searchParams?.query} />;
};

export default Page;
