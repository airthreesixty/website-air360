import { notFound } from 'next/navigation';
import TocLayout from '../components/toc-layout';
import { Metadata } from 'next';
import { mdxMetadata } from '@/lib/metadata';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({}: PageProps): Promise<Metadata> {
  const { frontmatter } = await import(`./content.mdx`);
  return mdxMetadata(frontmatter);
}

export default async function Page({}: PageProps) {
  try {
    const { default: Content, frontmatter } = await import(`./content.mdx`);

    return (
      <div className='bg-white flex justify-center'>
        <div className='pt-10 pb-5'>
          <div className='container '>
            <article className='mx-auto format format-sm sm:format-base lg:format-lg format-blue'>
              <TocLayout meta={frontmatter}>
                <Content />
              </TocLayout>
            </article>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
