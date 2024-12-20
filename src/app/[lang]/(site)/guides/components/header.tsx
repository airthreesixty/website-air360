import React from 'react';
import { Frontmatter } from './model';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface Props {
  meta: Frontmatter;
  className?: string;
}

const Header: React.FC<Props> = ({ meta, className }: Props) => {
  return (
    <div className={cn('md:grid md:grid-cols-2 md:gap-5', className)}>
      <div className='text-center self-center md:text-left'>
        <div className='font-semibold'>
          <Link href='/guides' className='hover:underline text-black-600'>
            Guides
          </Link>
          <svg
            className='svg-inline--fa fa-caret-right mx-3'
            aria-hidden='true'
            focusable='false'
            data-prefix='far'
            data-icon='caret-right'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 512'
          >
            <path
              className=''
              fill='currentColor'
              d='M201.4 256L112 166.6l0 178.7L201.4 256zm45.3-22.6c12.5 12.5 12.5 32.8 0 45.3l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128z'
            ></path>
          </svg>
          <span className='text-primary-600'>{meta.title}</span>
        </div>
        <h1 className='title1 my-5 font-bold text-black-600'>{meta.title}</h1>
        <div className='text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8'>{meta.description}</div>
      </div>
      <div className='flex items-center'>
        <Image src={meta.image} alt='' width={512} height={512} className='rounded-full' />
      </div>
    </div>
  );
};

export default Header;
