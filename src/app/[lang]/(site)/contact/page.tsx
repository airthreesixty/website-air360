import { Metadata, NextPage } from 'next';
import Company from '/public/vectors/company.svg';
import Location from '/public/vectors/location.svg';
import ContactForm from './components/form';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { mdxMetadata } from '@/lib/metadata';

interface Props {
  params: { lang: string };
}

export async function generateMetadata({}: Props): Promise<Metadata> {
  const t = await getTranslations('contact');
  const meta = {
    description: t('content'),
    title: t('title'),
    ogTitle: `Air360 - ${t('title')}`
  };
  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params: { lang } }) => {
  const t = useTranslations('contact');

  return (
    <section className='relative bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
          <h1 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white'>{t('title')}</h1>
          <p className='font-light text-gray-600 dark:text-gray-400 sm:text-xl'>{t('subtext')}</p>
        </div>
        <div className='grid grid-cols-1 lg:gap-8 lg:grid-cols-3'>
          <div className='col-span-2 mb-8 lg:mb-0'>
            <ContactForm lang={lang} />
          </div>
          <div className='grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1'>
            <div>
              <div className='flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16'>
                <Company className='w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500' />
              </div>
              <p className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>{t('companyInfo')}</p>
              <p className='text-gray-500 dark:text-gray-400'>{t('companyName')}</p>
            </div>
            <div>
              <div className='flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16'>
                <Location className='w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500' />
              </div>

              <p className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>{t('location')}</p>
              <p className='text-gray-500 dark:text-gray-400'>
                {t.rich('address', {
                  br: () => <br />
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
