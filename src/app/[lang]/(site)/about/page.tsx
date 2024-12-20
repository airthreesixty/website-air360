import React from 'react';
import enContent from './en.mdx';
import jaContent from './ja.mdx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LetterTemplateLayout from '@/components/mdx/letter-template-layout';
import './styles.css';
import { mdxMetadata } from '@/lib/metadata';

interface PageProps {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { frontmatter } = await import(`./${params.lang}.mdx`);
  return mdxMetadata(frontmatter);
}

const Page: React.FC<PageProps> = async ({ params: { lang } }) => {
  try {
    const Content = lang === 'en' ? enContent : jaContent;
    return (
      <LetterTemplateLayout childClassName='!max-w-full'>
        <Content />
      </LetterTemplateLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
