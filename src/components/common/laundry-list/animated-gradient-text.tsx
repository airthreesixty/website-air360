import React from 'react';
import './animated-gradient-text.css';

interface Props {
  text: string;
}

const AnimatedGradientText: React.FC<Props> = ({ text }) => {
  return (
    <div className='relative z-50 opacity-0 group-hover:opacity-100 transition duration-350'>
      <div className='text text1'>{text}</div>
      <div className='text text2'>{text}</div>
      <div className='text text3'>{text}</div>
    </div>
  );
};

export default AnimatedGradientText;
