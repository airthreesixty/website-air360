import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Title = ({ children, className, variant = 'secondary', ...props }: Props) => {
  const Comp = props?.as ? props.as : 'h1';
  const variantClass = variant === 'secondary' ? '' : 'title1 not-prose mt-5 mb-8';
  return <Comp className={cn(variantClass, className)}>{children}</Comp>;
};
Title.displayName = 'Title';

export default Title;
