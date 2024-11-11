import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FilterModal = ({ selectedOption, onClose, onSave }) => {
  const [filterOptions, setFilterOptions] = useState([
    { label: '(Blanks)', checked: false },
    { label: 'gold bag', checked: true },
    { label: 'gold coin', checked: true },
    { label: 'silver coin', checked: false },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectAll = () => {
    setFilterOptions(filterOptions.map(option => ({ ...option, checked: true })));
  };

  const handleClear = () => {
    setFilterOptions(filterOptions.map(option => ({ ...option, checked: false })));
  };

  const handleCheckboxChange = (index) => {
    const newFilterOptions = [...filterOptions];
    newFilterOptions[index].checked = !newFilterOptions[index].checked;
    setFilterOptions(newFilterOptions);
  };

  const filteredOptions = filterOptions.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-5">
        <h2 className="text-2xl font-bold mb-4">Filters:</h2>
        <div className="flex justify-between mb-4">
          <button onClick={handleSelectAll} className="text-blue-600 text-sm">
            Select all {filterOptions.length}
          </button>
          <button onClick={handleClear} className="text-blue-600 text-sm">
            Clear
          </button>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {filteredOptions.map((option, index) => (
          <div key={option.label} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={option.label}
              checked={option.checked}
              onChange={() => handleCheckboxChange(index)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={option.label} className="ml-2 text-sm">
              {option.label}
            </label>
          </div>
        ))}
        <div className="flex justify-end mt-6 space-x-2">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;