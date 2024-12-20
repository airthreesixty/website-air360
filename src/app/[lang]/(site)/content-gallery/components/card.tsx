import React from 'react';
import Image from 'next/image';
import { Link, Pathnames } from '@/i18n/routing';

interface CardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, slug }) => {
  return (
    <Link href={slug as Pathnames}>
      <article className='p-4 flex flex-col justify-between bg-white h-full rounded-lg border border-gray-200 shadow-md'>
        <Image alt={title} src={imageUrl} data-nuxt-img='' width={208} height={277} className='mb-5 rounded-lg w-full object-cover' />
        <h2 className='mt-2 mb-2 text-2xl font-bold tracking-tight text-black-600 hover:underline dark:text-white'>{title}</h2>
      </article>
    </Link>
  );
};

export default Card;
