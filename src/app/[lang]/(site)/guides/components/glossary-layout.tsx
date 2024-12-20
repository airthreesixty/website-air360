import { Frontmatter } from './model';
import Header from './header';
import Glossary from './glossary';

export interface Props<Frontmatter> {
  meta: Frontmatter;
  children?: React.ReactNode;
}

export default function GlossaryLayout<T extends Frontmatter>({ children, meta }: Props<T>) {
  return (
    <>
      <div className='pt-5 pb-6 md:pb-5 lg:py-10'>
        <Header meta={meta} className='container' />
        <div className='bg-gray-100 mb-5'>
          <Glossary data={children} />
        </div>
        <div className='container'>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
