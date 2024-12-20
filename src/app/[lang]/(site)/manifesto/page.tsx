import React from 'react';
import enContent, { frontmatter as enFrontmatter } from './en.mdx';
import jaContent, { frontmatter as jaFrontmatter } from './ja.mdx';
import { notFound } from 'next/navigation';
import LetterTemplateLayout from '@/components/mdx/letter-template-layout';
import type { Metadata } from 'next';
import { mdxMetadata } from '@/lib/metadata';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params: { lang } }: PageProps): Promise<Metadata> {
  const { frontmatter } = await import(`./${lang}.mdx`);
  return mdxMetadata(frontmatter);
}

const Page: React.FC<PageProps> = async ({ params: { lang } }) => {
  try {
    const Content = lang === 'en' ? enContent : jaContent;
    const metadata = lang === 'en' ? enFrontmatter : jaFrontmatter;
    return (
      <LetterTemplateLayout title={metadata.title} childClassName='prose-lg'>
        <Content />
      </LetterTemplateLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
