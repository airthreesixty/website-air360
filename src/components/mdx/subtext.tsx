import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

const Subtext = ({ children, className }: Props) => {
  return <p className={cn('text-sm text-gray-500', className)}>{children}</p>;
};
Subtext.displayName = 'Subtext';

export default Subtext;
