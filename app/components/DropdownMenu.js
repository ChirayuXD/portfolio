// components/DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event) => {
    const selected = options.find(option => option.value === event.target.value);
    setSelectedOption(selected);
    onSelect(selected);
  };

  return (
    <div className="relative">
      <select
        value={selectedOption.value}
        onChange={handleSelect}
        className="appearance-none bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
      </div>
    </div>
  );
};

export default DropdownMenu;
