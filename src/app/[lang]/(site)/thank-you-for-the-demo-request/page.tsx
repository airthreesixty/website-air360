import ThankYouPageLayout from '@/components/layout/thank-you-page-layout';
import { useTranslations } from 'next-intl';
import MochiFlying from '/public/vectors/mochi-flying.svg';

import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { mdxMetadata } from '@/lib/metadata';

interface Props {
  params: { lang: string };
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('thank-you');
  const meta = {
    description: t('demo-request.description'),
    title: t('demo-request.title'),
    ogTitle: `Air360 - ${t('demo-request.title')}`
  };
  return mdxMetadata(meta);
}

const Page: React.FC<Props> = ({ params: { lang } }) => {
  const t = useTranslations('thank-you');
  return (
    <ThankYouPageLayout lang={lang}>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='page-thank-you__title'>
          <span className='inline-block'>{t('title')}</span>
        </h1>
        <MochiFlying className='mt-12 mb-10' />
        <p className='page-thank-you__description'>{t('p1')}</p>
        <p className='page-thank-you__description pt-5'>{t('p2')}</p>
      </div>
    </ThankYouPageLayout>
  );
};

export default Page;
