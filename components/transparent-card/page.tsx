import React from 'react';

const TransparentCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20  shadow-lg rounded-4xl text-white">
      {children}
    </div>
  );
};

export default TransparentCard;
