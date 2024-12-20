import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  number: number;
  color?: string;
  isSelected: boolean;
  onToggleNumber: (number: number) => void;
}

const ToggleNumber: React.FC<Props> = ({ number, color, isSelected, onToggleNumber }) => {
  return (
    <Button
      onMouseOver={() => onToggleNumber(number)}
      id={`tab${number}`}
      aria-controls={`panel${number}`}
      className='tab h-14 w-14 md:h-15 md:w-15 lg:h-18 lg:w-18 rounded-lg flex justify-center items-center cursor-pointer bg-white'
      // onClick={() => onToggleNumber(number)}
    >
      <div className={cn(`text-white font-bold text-3xl lg:text-4xl `, isSelected ? color : 'text-gray-300')}>{number}</div>
    </Button>
  );
};

export default ToggleNumber;
