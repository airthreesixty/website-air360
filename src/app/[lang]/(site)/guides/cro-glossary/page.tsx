import { notFound } from 'next/navigation';
import './styles.css';
import GlossaryLayout from '../components/glossary-layout';
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
      <div className='bg-white'>
        <div className='pt-10 pb-5'>
          <article className='mx-auto format format-sm sm:format-base lg:format-lg format-blue'>
            <GlossaryLayout meta={frontmatter}>
              <Content />
            </GlossaryLayout>
          </article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
