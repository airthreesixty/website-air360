//https://chris.lu/web_development/tutorials/next-js-static-mdx-blog/optimizing-using-next-link
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href: string | undefined;
}>;

export default function CustomLink(props: Props) {
  const href = props.href;
  if (!href) return null;
  const isInternalLink = href && href.startsWith('/');
  const isMailto = href && href.startsWith('mailto:');

  if (isInternalLink) {
    return <Link href={href}>{props.children}</Link>;
  }

  return <a target='_blank' {...props} rel={isMailto ? 'noopener noreferrer' : undefined} />;
}
