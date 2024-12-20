import React from 'react';

interface SubItemsProps {
  title?: string;
  children?: React.ReactNode;
}

const SubItems: React.FC<SubItemsProps> = ({ title, children }) => {
  return (
    <>
      {title && <p className='font-semibold text-black-600 mt-1 mb-2'>{title}</p>}
      <ul className='mb-3'>{children}</ul>
    </>
  );
};

export default SubItems;
