'use client';

import { getHeadings } from '@/lib/get-headings';
import Link from 'next/link';
import * as React from 'react';

export interface Props {
  data: React.ReactNode;
}

export default function Glossary({ data }: Props) {
  const headings = getHeadings(data);

  return (
    <ul className='flex justify-center gap-5 flex-wrap py-3 mt-5 mx-10 font-bold text-lg text-primary-600 lg:text-xl'>
      {headings.map((item) => (
        <li key={item.id}>
          <Link href={`#${item.id}`} className={`router-link-active router-link-exact-active hover:underline`}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
