import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="bg-black text-lemon-yellow py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {Array(10).fill('DOORS ARE OPEN').map((text, index) => (
          <span key={index} className="mx-4 text-sm font-medium tracking-wider">
            {text} //
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
