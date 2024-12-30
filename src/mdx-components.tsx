import type { MDXComponents } from "mdx/types";
import MdxAccordion from "./components/mdx/accordion";
// import React from 'react';
// import Link from '@/components/mdx/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // a: ({ href, children }) => <Link href={href}>{children}</Link>,
    Accordion: MdxAccordion,
    ...components,
  };
}
