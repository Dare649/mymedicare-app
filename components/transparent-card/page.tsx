import React from 'react';

interface TransparentCardProps {
  children: React.ReactNode;
  className?: string;
}

const TransparentCard: React.FC<TransparentCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-4xl text-white ${className}`}>
      {children}
    </div>
  );
};

export default TransparentCard;
