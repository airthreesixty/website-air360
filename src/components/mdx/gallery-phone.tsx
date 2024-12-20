import { cn } from '@/lib/utils';
import React from 'react';
import { PropsWithChildren } from 'react';
import Title from './title';
import Description from './description';
import Shape from '/public/vectors/shape-blue-pink.svg';
import Image from 'next/image';

interface MessageProps extends PropsWithChildren {
  position: string;
}

const GalleryPhone: React.FC<PropsWithChildren> = ({ children }) => {
  let title: string | null = null;
  let description: string | null = null;
  let messages: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Messages') {
      messages = child;
    } else if (displayName === 'Title') {
      title = child.props.children;
    } else if (displayName === 'Description') {
      description = child.props.children;
    }
  });

  return (
    <section className='md:pt-10 pt-10 overflow-hidden'>
      <div className='container  md:flex md:items-center md:gap-20'>
        <div className='relative z-index-1 prose prose-lg'>
          {title && <Title as='h2'>{title}</Title>}
          {description && <Description className='max-w-[500px]'>{description}</Description>}
        </div>
        <div className='relative max-w-[400px] lg:max-w-[500px] mx-auto  md:mt-5 '>
          <Image src='/promotion/1.png' alt='phone' width={500} height={788} className='relative z-30' />
          {messages}
          <Shape className='absolute top-0 left-15 -translate-x-32 translate-y-32 z-20 w-[500px] lg:w-[700px]' />
        </div>
      </div>
    </section>
  );
};

const Messages = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

Messages.displayName = 'Messages';

const Message = ({ children, position }: MessageProps) => {
  const className = position === 'left' ? 'top-18 -left-3 md:-left-28 lg:-left-31 ' : 'top-[42%] right-5 md:right-25 lg:right-35 ';
  return (
    <div className={cn('absolute text-xs md:text-sm lg:text-base text-black-600 max-w-[120px] z-40', className)}>
      <div className='bg-white w-40 md:w-60 lg:w-75 p-4 md:p-6 shadow-gray rounded-full'>{children}</div>
    </div>
  );
};

Message.displayName = 'Message';

export { Messages, Message, GalleryPhone };
