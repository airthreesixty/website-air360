import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import GalleryForm from './gallery-form';
import { withCurrentUrl } from '@/components/with-current-url';
import Subtext from './subtext';
import Description from './description';
import Title from './title';
import { Video } from '@/components/ui/video';
// import MochiCart from '/public/vectors/mochi-cart.svg';

interface Props extends PropsWithChildren {
  FormTitle: string;
  src: string;
  videoSrc?: string;
  variant?: 'primary' | 'secondary';
  baseUrl?: string;
  pathName?: string;
  slug?: string;
  lang?: string;
}

const GalleryHero: React.FC<Props> = ({ src, FormTitle, children, variant = 'primary', slug, videoSrc }) => {
  const titles: React.ReactElement[] = [];
  const otherChildren: React.ReactElement[] = [];
  let subtext: string | null = null;
  let description: string | null = null;
  let contentTitle = '';

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === 'Subtext') {
      subtext = child.props.children;
    } else if (displayName === 'Title') {
      titles.push(child);
      contentTitle = child.props.children;
    } else if (displayName === 'Description') {
      description = child.props.children;
    } else {
      otherChildren.push(child);
    }
  });

  return (
    <section className='bg-white py-10 lg:py-14 overflow-hidden'>
      <div className='container'>
        {variant === 'secondary' ? (
          <div className='prose prose-lg'>
            {subtext !== null && <Subtext>{subtext}</Subtext>}
            {titles.map((child, index) => (
              <Title key={index} {...child.props} />
            ))}

            <div className='flex flex-col lg:flex-row items-center gap-12 py-4'>
              <div className='w-full lg:w-2/3 prose'>
                <div className='flex flex-col sm:flex-row items-center gap-1 '>
                  <div className='w-full sm:w-2/3'>
                    {description && <Description className='textp'>{description}</Description>}
                    {otherChildren}
                  </div>
                  <div className='w-full sm:w-1/3'>
                    <Image src={src} alt={titles?.[0]?.props?.children} width={300} height={400} className='my-auto md:h-150 w-full rounded-lg object-cover mb-8' />
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3'>
                <GalleryForm slug={slug || ''} title={FormTitle} contentTitle={contentTitle} />
              </div>
            </div>
          </div>
        ) : (
          <div className='rounded-lg max-w-[1050px] mx-auto p-5 lg:p-10'>
            <div>
              {/* <MochiCart className='w-50 h-50 lg:(w-60 h-60)' /> */}
              <div className='md:text-center'>
                {subtext && <Subtext className='text-primary-600 font-bold'>{subtext}</Subtext>}
                {titles.map((child, index) => (
                  <Title key={index} {...child.props} variant='primary' />
                ))}
                {description && <Description className='textp'>{description}</Description>}
              </div>
              <div className='md:grid md:grid-cols-2 md:items-center gap-4'>
                {/* <div className='relative max-w-[500px] mx-auto mt-10'> */}
                <div className='relative max-w-[380px] md:max-w-[500px] mx-auto mt-10'>
                  {videoSrc ? (
                    <Video poster={src} src={videoSrc} width={340} height={600} className='my-auto md:h-150  rounded-lg object-cover mb-8' />
                  ) : (
                    <Image src={src} alt={titles?.[0]?.props?.children} width={485} height={517} className='mb-8' />
                  )}
                </div>
                <div className='h-130 md:h-140 lg:h-128'>
                  <GalleryForm slug={slug || ''} title={FormTitle} contentTitle={contentTitle} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withCurrentUrl(GalleryHero);
