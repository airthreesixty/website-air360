import React from 'react';

const Lines: React.FC = () => {
  const generateSVGs = (count: number) => {
    const svgs = [];
    for (let i = 0; i < count; i++) {
      svgs.push(
        <svg key={i} viewBox='0 0 333 48'>
          <rect x='0' y='0' width='100%' height='100%' rx='8' ry='8' pathLength='10'></rect>
        </svg>
      );
    }
    return svgs;
  };

  const svgCount = 8;
  const svgs = generateSVGs(svgCount);

  return (
    <>
      <div>{svgs}</div>
      <div>{svgs}</div>
    </>
  );
};

export default Lines;
