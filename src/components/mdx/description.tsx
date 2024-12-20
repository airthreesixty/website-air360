import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}
const Description = ({ children, className }: Props) => {
  return <div className={cn('mt-4 space-y-4', className)}>{children}</div>;
};

Description.displayName = 'Description';

export default Description;
