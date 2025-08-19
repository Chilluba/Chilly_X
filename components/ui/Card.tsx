
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-brand-bg-800 border-2 border-white/10 p-6 shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 group ${className}`}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
    >
      {children}
    </div>
  );
};

export default Card;
