interface MdxMetadata {
  title: string;
  ogTitle?: string;
  description: string;
  image?: string;
}

// declare module '*.mdx' {
//   const MDXComponent: (props: unknown) => JSX.Element;
//   export default MDXComponent;

//   export const metadata: ArticleMetadata;
// }
declare module '*.mdx' {
  import { MDXProps } from 'mdx/types';
  const MDXComponent: (props: MDXProps) => JSX.Element;
  const frontMatter: { [key: string]: unknown };
  export { frontmatter };
  export default MDXComponent;
}
