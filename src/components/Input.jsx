import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, value, onChange, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;