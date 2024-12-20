import { Link } from '@/i18n/routing';
import { mdxMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('main');

  const meta = {
    title: t('guides.title'),
    description: t('guides.desc'),
    ogTitle: `Air360 - ${t('guides.title')}`,
    image: '/en/guides/cro-for-beginners/hero.png'
  };
  return mdxMetadata(meta);
}

export default function Page() {
  return (
    <div className='container py-10'>
      <div className='md:grid md:grid-cols-2 md:gap-15 md:items-center'>
        <Link href='/guides/cro-for-beginners' className='hover:opacity-85 transition'>
          <Image src='/en/guides/cro-for-beginners/hero.png' width={512} height={512} className='rounded-full' alt='CRO 101 for beginners' />
        </Link>
        <div className='mt-5 md:mt-0'>
          <span className='text-primary-600 font-bold'>Guides</span>
          <Link href='/guides/cro-for-beginners'>
            <h1 className='title1 mb-5 mt-2 hover:underline'>CRO 101 for beginners</h1>
          </Link>
          <p className='textp'>Learn the fundamentals of conversion rate optimization (CRO), its advantages, and how it differs from other marketing techniques to increase revenue.</p>
        </div>
      </div>
      <div className='mt-10'>
        <div>
          <h2 className='title2 mb-10'> Latest guides </h2>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='col-span-1'>
              <Link href='/guides/cro-glossary'>
                <div>
                  <Image src='/en/guides/glossary/hero.png' width={445} height={280} alt='CRO 101 for beginners' className='h-70 w-full rounded-8xl object-cover hover:opacity-85 transition-opacity' />
                </div>
                <h3 className='font-bold mt-5 text-2xl hover:underline'>CRO Glossary</h3>
                <p className='textp mt-2'>Learn key terms and concepts in conversion rate optimization to implement effective CRO strategies and improve your website's conversion rate.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
