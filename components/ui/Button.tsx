
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-heading tracking-wider uppercase px-8 py-3 text-sm transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-bg-900';

  const variantClasses = {
    primary: 'bg-brand-primary-500 text-white hover:bg-brand-primary-700 focus:ring-brand-primary-500',
    secondary: 'bg-brand-accent text-brand-bg-900 hover:bg-opacity-80 focus:ring-brand-accent',
    outline: 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg-900 focus:ring-brand-accent',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
