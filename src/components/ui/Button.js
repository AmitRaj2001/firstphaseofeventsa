import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    link: 'text-blue-600 hover:text-blue-700 underline',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}