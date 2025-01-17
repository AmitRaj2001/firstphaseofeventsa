// src/components/Button.js
import React from 'react';

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = variant === 'default' 
    ? "bg-black text-white hover:bg-gray-600 focus:ring-blue-500" 
    : "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
