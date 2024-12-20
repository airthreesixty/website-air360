import React, { PropsWithChildren } from 'react';
import Icon, { type IconName } from '@/components/common/icons';
import { cn } from '@/lib/utils';

interface BlockFeatureProps extends PropsWithChildren {
  title: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}

interface FeatureProps extends PropsWithChildren {
  name: string;
  icon: IconName;
}

const BlockFeature: React.FC<BlockFeatureProps> = ({ children, title, maxWidth }) => {
  let blockCount = 0;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Feature') {
      React.Children.forEach(child, () => {
        blockCount++;
      });
    }
  });

  return (
    <section className='container pt-20 pb-10'>
      <div>
        <h2 className={cn('title2 text-center mx-auto', titleMaxWidth(maxWidth))}>{title}</h2>
        <div className={cn('mt-10  gap-y-15 md:mt-14', gridClass(blockCount))}>{children}</div>
      </div>
    </section>
  );
};

BlockFeature.displayName = 'BlockFeature';

const Feature: React.FC<FeatureProps> = ({ children, name, icon }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-15 w-15 bg-primary-100 justify-center items-center flex rounded-xl mb-2'>
        <Icon name={icon} className='fa-2x text-primary-600' />
      </div>
      <h3 className={cn('flex-grow text-black-600 text-center text-xl md:text-xl font-bold', children && 'mb-2')}>{name}</h3>
      {children && <div className='mb-4 textp text-center'>{children}</div>}
    </div>
  );
};

Feature.displayName = 'Feature';

export { BlockFeature, Feature };

const titleMaxWidth = (maxWidth: BlockFeatureProps['maxWidth']) => {
  switch (maxWidth) {
    case 'sm':
      return 'max-w-[300px] lg:max-w-[600px]';
    case 'md':
      return 'max-w-[400px] lg:max-w-[700px]';
    case 'lg':
      return 'max-w-[600px] lg:max-w-[900px]';
    default:
      return 'max-w-[500px] lg:max-w-[800px]';
  }
};

const gridClass = (blockCount: number) => {
  switch (blockCount) {
    case 2:
      return 'md:grid md:grid-cols-2';
    case 3:
      return 'md:grid md:grid-cols-3';
    case 4:
      return 'md:grid md:grid-cols-2';
    case 5:
      return 'md:grid md:grid-cols-5';
    case 6:
      return 'md:grid md:grid-cols-3';
    case 7:
      return 'md:grid md:grid-cols-4';
    case 8:
      return 'grid grid-cols-2 md:grid-cols-4';
    default:
      return '';
  }
};
