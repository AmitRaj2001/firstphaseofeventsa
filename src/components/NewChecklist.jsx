import React, { useState } from 'react';
import { Filter } from 'lucide-react'; // Importing the Filter icon
import FilterModal from './FilterModel';

const Button = ({ children, onClick, className, variant, icon: Icon, iconPosition = 'left' }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center px-1 py-1 text-sm rounded ${
      variant === 'outline'
        ? 'border border-gray-300 hover:bg-gray-100'
        : 'bg-gray-800 text-white hover:bg-gray-700'
    } ${className}`}
  >
    {/* Render Icon (if provided) before or after text based on iconPosition */}
    {Icon && iconPosition === 'left' && <Icon className="mr-2" size={16} />}
    {children}
    {Icon && iconPosition === 'right' && <Icon className="ml-2" size={16} />}
  </button>
);

const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
  />
);

const Select = ({ value, onChange, options, placeholder, className }) => (
  <select
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded px-2 py-1 w-full text-xs ${className}`}
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default function NewChecklist() {
  const [checklistName, setChecklistName] = useState('');
  const [columns, setColumns] = useState(['']);
  const [teams, setTeams] = useState('');
  const [showFilters, setShowFilters] = useState([false]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);

  const handleAddColumn = () => {
    setColumns([...columns, '']);
    setShowFilters([...showFilters, false]);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  };

  const toggleFilterModal = (index) => {
    setActiveColumn(index);
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleSaveFilter = () => {
    setIsFilterModalOpen(false);
    // Logic to save the filter settings
  };

  return (
    <div className="relative flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 max-w-md mx-auto mb-0">
      <div className="flex-1 bg-white p-2 rounded-lg shadow-md mb-1">
        <h2 className="text-2xl font-bold mb-1 text-gray-800">New Checklist</h2>
        <div className="mb-1">
          <label htmlFor="checklistName" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Checklist Name
          </label>
          <Input
            value={checklistName}
            onChange={(e) => setChecklistName(e.target.value)}
            placeholder="Enter checklist name"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center justify-center text-sm font-medium text-gray-700 mb-1 w-6/7 ">Add Columns</label>
          {columns.map((column, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <Select
                value={column}
                onChange={(e) => handleColumnChange(index, e.target.value)}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                placeholder="Select column"
                className="w-6/7"
              />
              <Button
                onClick={() => toggleFilterModal(index)}
                variant="outline"
                icon={Filter} // Use the Filter icon from lucide-react
                iconPosition="left"
                className="w-1/1"
              />
            </div>
          ))}
          <Button onClick={handleAddColumn} variant="outline" className="mt-2">
            Add Column
          </Button>
        </div>
        <div className="mb-4">
          <label htmlFor="addTeams" className="block text-sm font-medium text-gray-700 mb-1">
            Add Teams
          </label>
          <Select
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
            options={[
              { value: 'team1', label: 'Team 1' },
              { value: 'team2', label: 'Team 2' },
              { value: 'team3', label: 'Team 3' },
            ]}
            placeholder="Select team"
          />
        </div>
        <Button className="w-full">Submit</Button>
      </div>

      {isFilterModalOpen && (
        <FilterModal
          selectedOption={columns[activeColumn]}
          onClose={handleCloseFilterModal}
          onSave={handleSaveFilter}
        />
      )}
    </div>
  );
}
