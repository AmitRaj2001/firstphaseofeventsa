import React from "react";

const PinInput = ({ value, onChange, label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="flex space-x-2">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value[index] || ""}
          onChange={(e) => onChange(index, e.target.value)}
          className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
        />
      ))}
    </div>
  </div>
);

export default PinInput;
