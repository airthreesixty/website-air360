import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button } from '@/components/ui/button';

interface ItemBlockProps {
  title: string;
  children?: React.ReactNode;
  onToggle?: () => void;
}

const ItemBlock: React.FC<ItemBlockProps> = ({ title, children, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    // Emit event if needed
    onToggle && onToggle();
  };

  return (
    <li>
      <Button variant={'ghost'} aria-expanded={isOpen} className='w-full py-3 px-0 font-bold text-black-600 text-xl flex items-center justify-between' onClick={toggle}>
        {title}
        <FontAwesomeIcon className={`fa-lg transform transition-all text-primary-600 ${isOpen ? 'rotate-180' : ''}`} icon={['far', 'angle-down'] as IconProp} />
        <span className='sr-only'>Open {title}</span>
      </Button>
      <div>{children}</div>
    </li>
  );
};

export default ItemBlock;
