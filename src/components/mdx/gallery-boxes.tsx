import { cn } from '@/lib/utils';
import React from 'react';
import { PropsWithChildren } from 'react';
import Title from './title';
import Description from './description';
import Icon from '@/components/common/icons';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import Wave from '/public/vectors/wave.svg';
import { Button } from '@/components/ui/button';

interface BoxeProps extends PropsWithChildren {
  className?: string;
  icon?: IconName | null;
  cta?: string;
  ctaLink?: string;
}

interface BoxesProps extends PropsWithChildren {
  className?: string;
}

interface Props extends PropsWithChildren {
  variant?: 'primary' | 'secondary';
  slug?: string;
  lang?: string;
  wave?: boolean;
}

const GalleryBoxes: React.FC<Props> = ({ children, wave }) => {
  let title: string | null = null;
  let description: string | null = null;
  let boxes: React.ReactElement | null = null;
  let boxesCount = 0;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Boxes') {
      boxes = child.props.children;
      React.Children.forEach(child.props.children, () => {
        boxesCount++;
      });
    } else if (displayName === 'Title') {
      title = child.props.children;
    } else if (displayName === 'Description') {
      description = child.props.children;
    }
  });

  return (
    <section className='overflow-hidden'>
      {wave && <Wave className='md:-mt-15' />}

      <div className='bg-gray-50 py-10 md:py-14 xl:py-20'>
        <div className={cn('container xl:grid xl:gap-5', textGridClasses(boxesCount))}>
          <div className='col-span-2 prose prose-lg'>
            {title && <Title as='h2'>{title}</Title>}
            {description && <Description>{description}</Description>}
          </div>
          {boxes && <Boxes className={cn('grid gap-8', boxesGridClasses(boxesCount))}>{boxes}</Boxes>}
        </div>
      </div>
    </section>
  );
};

const Boxes = ({ children, className }: BoxesProps) => {
  const boxes: React.ReactElement[] = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Boxes') {
      React.Children.forEach(child.props.children, (box) => {
        boxes.push(box);
      });
    }
  });
  return <div className={cn('', className)}>{children}</div>;
};

Boxes.displayName = 'Boxes';

const Box = ({ children, className, icon = null, cta, ctaLink }: BoxeProps) => {
  let title: string | null = null;
  let description: string | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Title') {
      title = child.props.children;
    } else if (displayName === 'Description') {
      description = child.props.children;
    }
  });

  const iconWrapperClass = 'relative h-full p-5 pb-14 lg:pb-17 2xl:pb-20 ';
  const ctaWrapperClass = cta ? 'container mx-auto' : '';
  const ctaBlockClass = 'my-18 !px-5 !py-10';
  const titleAs = cta ? 'h2' : 'h3';
  const titleClass = cta ? 'title2 mb-8 md:mb-0 md:col-span-2' : 'text-lg';
  const titleWrapperClass = cta ? 'md:grid md:grid-cols-3 md:items-center' : 'flex text-center md:justify-center';

  return (
    <div className={ctaWrapperClass}>
      <div className={cn('p-5 rounded-lg shadow-primary-600 shadow-primary h-full', cta && ctaBlockClass, icon && iconWrapperClass, className)}>
        <div className={cn(' items-center justify-start  mb-2 ', titleWrapperClass)}>
          {!icon && !cta && <Icon name='circle-check' className='fa-xl text-primary-600 mr-3' />}
          {title && (
            <Title as={titleAs} className={cn('text-black-600 font-bold  not-prose', titleClass)}>
              {title}
            </Title>
          )}
          {cta && (
            <div className='justify-self-end'>
              <Button asChild>{ctaLink ? <a href={ctaLink}>{cta}</a> : cta}</Button>
            </div>
          )}
        </div>

        {description && <Description className='text-gray-500 text-left md:text-center not-prose'>{description}</Description>}

        {icon && <Icon name={icon} className='fa-4xl mr-3 2xl:text-6xl absolute bottom-2 lg:text-5xl right-[50%] svg-inline--fa text-4xl text-primary-600 transform translate-x-[50%]' />}
      </div>
    </div>
  );
};

Box.displayName = 'Box';

const boxesGridClasses = (boxesCount: number) => {
  let classBoxes = '';
  switch (boxesCount) {
    case 2:
      classBoxes = 'md:grid-cols-2 xl:col-span-2';
      break;
    case 3:
      classBoxes = 'md:grid-cols-3 xl:col-span-3';
      break;
    case 4:
      classBoxes = 'md:grid-cols-4 xl:col-span-4';
      break;
  }
  return classBoxes;
};
const textGridClasses = (boxesCount: number) => {
  let classBoxes = '';
  switch (boxesCount) {
    case 2:
      classBoxes = `xl:grid-cols-4`;
      break;
    case 3:
      classBoxes = `xl:grid-cols-5`;
      break;
    case 4:
      classBoxes = `xl:grid-cols-6`;
      break;
  }
  return classBoxes;
};

export { Boxes, Box, GalleryBoxes };
