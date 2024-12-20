'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, Pathnames } from '@/i18n/routing';
import './styles.css';
import Lines from './lines';
import { cn } from '@/lib/utils';

interface ButtonProps {
  text: string;
  href: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ text, href }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null); // Reference for the SVG container

  useEffect(() => {
    const svgElement = svgRef.current;

    if (svgElement) {
      const handleAnimationEnd = () => {
        setIsAnimating(false);
      };

      svgElement.addEventListener('animationend', handleAnimationEnd);

      return () => {
        svgElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  const handlePointerEnter = () => {
    console.log('handlePointerEnter');

    setIsAnimating(true); // Add the 'start' class when the button is hovered
  };

  return (
    <Button className={cn('flex justify-center bg-white mt-8 md:w-2/3 text-primary-600 button-transparent cta-button-effect', isAnimating ? 'start' : '')} asChild>
      <Link href={href as Pathnames} onPointerEnter={handlePointerEnter}>
        {text}
        <div className='lines' ref={svgRef}>
          <Lines />
        </div>
      </Link>
    </Button>
  );
};

export default ButtonPrimary;
