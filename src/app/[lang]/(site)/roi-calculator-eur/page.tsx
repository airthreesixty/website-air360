import { Metadata, NextPage } from 'next';
import ROICalculator from './components/form';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { mdxMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('roi-calc');
  const meta = {
    description: t('description'),
    title: t('title'),
    ogTitle: `Air360 - ${t('title')}`
  };
  return mdxMetadata(meta);
}

const Page: NextPage = () => {
  const t = useTranslations('roi-calc');

  return (
    <div className='container flex justify-center'>
      <div className='py-20 max-w-[600px]'>
        <h1 className='text-black-600 font-bold text-2xl mb-6 md:text-3xl lg:text-4xl'>{t('header')}</h1>
        <ROICalculator />
      </div>
    </div>
  );
};

export default Page;
