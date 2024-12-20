import { Metadata, NextPage } from 'next';
import { getTranslations } from 'next-intl/server';
import { mdxMetadata } from '@/lib/metadata';
import { getAllContenGallery } from '@/lib/query-content';
import Card from './components/card';
import { useTranslations } from 'next-intl';

interface Props {
  params: { lang: string };
}

export async function generateMetadata({}: Props): Promise<Metadata> {
  const t = await getTranslations('gallery');
  const meta = {
    description: t('description'),
    title: t('title'),
    ogTitle: t('ogTitle'),
    image: '/en/content-gallery/five-conversion-blockers.webp'
  };

  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang } }) => {
  const contents = getAllContenGallery(lang);
  const t = useTranslations('gallery');

  // return <ListLayout posts={posts} searchQuery={searchParams?.query} />;
  return (
    <section className='bg-white mx-auto py-10'>
      <div className='container'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center mt-8 lg:mt-10'>{t('title')}</h1>
        <div className='py-8 mx-auto lg:py-16'>
          <div className='grid gap-8 md:grid-cols-3 lg:grid-cols-5'>
            {contents.reverse().map((content) => (
              <Card key={content.slug} title={content.title} imageUrl={content.image} slug={`/content-gallery/${content.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
