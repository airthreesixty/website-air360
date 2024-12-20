// components/LoadingDots.tsx

import React from 'react';
import LoadingSvg from './LoadingDotsSvg'; // Path to your SVG component file

interface LoadingProps {
  color?: string;
  numDots?: number;
  className?: string;
}

const LoadingDots: React.FC<LoadingProps> = ({ color = '#E74B91', numDots = 3, className = '' }) => {
  return (
    <div>
      <LoadingSvg className={`vl-parent ${className}`} numDots={numDots} fill={color} />
    </div>
  );
};

export default LoadingDots;
