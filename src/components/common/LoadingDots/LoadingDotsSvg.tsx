// components/LoadingDotsSvg.tsx

import * as React from 'react';

interface LoadingDotsSvgProps extends React.SVGProps<SVGSVGElement> {
  numDots: number;
}

const LoadingDotsSvg: React.FC<LoadingDotsSvgProps> = ({ numDots, ...props }) => {
  // const circleRadius = 15;
  const gapBetweenDots = 45; // Adjust the gap as needed

  // Generate circles based on the number of dots
  const circles = Array.from({ length: numDots }, (_, index) => {
    const cx = 15 + index * gapBetweenDots; // X position of each dot
    const isMiddleDot = index === Math.floor(numDots / 2);

    return (
      <circle key={index} cx={cx} cy='15' r={isMiddleDot ? '9' : '15'} fillOpacity={isMiddleDot ? '0.3' : '1'}>
        <animate
          attributeName='r'
          from={isMiddleDot ? '9' : '15'}
          to={isMiddleDot ? '9' : '15'}
          begin='0s'
          dur='0.8s'
          values={isMiddleDot ? '9;15;9' : '15;9;15'}
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from={isMiddleDot ? '0.5' : '1'}
          to={isMiddleDot ? '0.5' : '1'}
          begin='0s'
          dur='0.8s'
          values={isMiddleDot ? '0.5;1;0.5' : '1;.5;1'}
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
    );
  });

  return (
    <svg viewBox={`0 0 ${numDots * gapBetweenDots} 30`} width={30 * numDots} height='30' xmlns='http://www.w3.org/2000/svg' {...props}>
      {circles}
    </svg>
  );
};

export default LoadingDotsSvg;

/*
// components/LoadingDotsSvg.tsx

import * as React from 'react';

const LoadingDotsSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx='15' cy='15' r='15'>
      <animate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' />
      <animate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1;.5;1' calcMode='linear' repeatCount='indefinite' />
    </circle>
    <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
      <animate attributeName='r' from='9' to='9' begin='0s' dur='0.8s' values='9;15;9' calcMode='linear' repeatCount='indefinite' />
      <animate attributeName='fill-opacity' from='0.5' to='0.5' begin='0s' dur='0.8s' values='.5;1;.5' calcMode='linear' repeatCount='indefinite' />
    </circle>
    <circle cx='105' cy='15' r='15'>
      <animate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' />
      <animate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1;.5;1' calcMode='linear' repeatCount='indefinite' />
    </circle>
  </svg>
);

export default LoadingDotsSvg;


*/
