import React, { PropsWithChildren } from 'react';
import GradientWave from '/public/vectors/gradient-wave.svg';
import { cn } from '@/lib/utils';

type Props = PropsWithChildren<{
  title?: string;
  childClassName?: string;
}>;
export default function LetterTemplateLayout({ children, title, childClassName }: Props) {
  return (
    <div className='container py-10 md:py-15 lg:py-20'>
      {title && (
        <h1 className='title1 text-center mb-8 lg:mb-20'>
          {title}
          <div className='flex justify-center mt-2'>
            <GradientWave />
          </div>
        </h1>
      )}
      <div className={cn(`prose max-w-[800px] mx-auto`, childClassName)}>{children}</div>
    </div>
  );
}
