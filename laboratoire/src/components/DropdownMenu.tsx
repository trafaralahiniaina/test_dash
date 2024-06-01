'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: number) => {
    alert(`This is action ${action}`);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="btn btn-link rounded-0 text-white shadow-none p-0 dropdown-toggle"
        id="dropdown-chart1"
        aria-label="Toggle dropdown"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon className="w-4" icon={faEllipsisVertical} />
        <FontAwesomeIcon className="w-4 ms-2" icon={faChevronDown} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 dropdown-menu">
          <div className="py-2">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item"
              onClick={() => handleActionClick(1)}
            >
              Action
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item"
              onClick={() => handleActionClick(2)}
            >
              Another action
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item"
              onClick={() => handleActionClick(3)}
            >
              Something else
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;