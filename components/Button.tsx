import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  const baseStyles = `
    bg-white text-black px-8 py-3 rounded-md font-medium
    hover:bg-gray-100 transition-all duration-300
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-white/50
    cursor-pointer
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`inline-block ${baseStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};