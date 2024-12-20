'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import Icon from '@/components/common/icons';

interface CopyLinkProps {
  url: string;
}

const CopyLink: React.FC<CopyLinkProps> = ({ url }) => {
  const copylink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
  };

  return (
    <Button variant='ghost' size={'sm'} className='text-primary-600 hover:text-primary-700 hover:bg-gray-100 cursor-pointer' onClick={copylink}>
      <Icon name='link' prefix='fas' className='fa-xl' />
    </Button>
  );
};

export default CopyLink;
