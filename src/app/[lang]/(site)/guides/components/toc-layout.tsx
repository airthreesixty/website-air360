import Toc from './table-of-content';
import { Frontmatter } from './model';
import Header from './header';

export interface Props<Frontmatter> {
  meta: Frontmatter;
  children?: React.ReactNode;
}

export default function TocLayout<T extends Frontmatter>({ children, meta }: Props<T>) {
  return (
    <>
      <div className='pt-5 pb-6 md:pb-5 lg:py-10'>
        <Header meta={meta} />
      </div>
      <div className='md:grid md:grid-cols-10 md:gap-x-8'>
        <div className='hidden md:col-span-3 md:block md:mt-12'>
          <Toc data={children} />
        </div>
        <div className='prose nuxt-content md:col-span-7'>{children}</div>
      </div>
    </>
  );
}
