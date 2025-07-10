import React from 'react';

const LoadingIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-6xl md:text-8xl font-black text-green-400 animate-infinity-glow">
        &#8734;
      </div>
    </div>
  );
};

export default LoadingIcon; 