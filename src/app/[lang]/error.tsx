'use client';

import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('main.Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title={t('title')}>
      <div className='container py-15 mb-10 md:py-20  '>
        <div className='text-center'>
          {t.rich('description', {
            p: (chunks) => <p className='mt-4'>{chunks}</p>,
            retry: (chunks) => (
              <Button variant={'link'} className='px-0 underline underline-offset-2' onClick={reset} type='button'>
                {chunks}
              </Button>
            )
          })}
        </div>
      </div>
    </PageLayout>
  );
}
