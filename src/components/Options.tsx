import React, { useState, useRef, useEffect } from 'react';

interface OptionsProps {
  width: string;
  type: 'status' | 'priority';
  onSelect?: (value: string) => void;
}

const statusOptions = ['In-progress', 'Completed', 'Blocked', 'Need to start'];
const priorityOptions = ['High', 'Medium', 'Low'];

const Options: React.FC<OptionsProps> = ({ width, type, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const options = type === 'status' ? statusOptions : priorityOptions;

  const handleOptionClick = (option: string) => {
    setSelected(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTextColor = (option: string) => {
    switch (option) {
      case 'High':
      case 'Blocked':
        return 'text-red-600';
      case 'Medium':
      case 'In-progress':
        return 'text-blue-600';
      case 'Low':
      case 'Completed':
        return 'text-green-600';
      case 'Need to start':
        return 'text-yellow-700';
      default:
        return 'text-black';
    }
  };

  return (
    <div
      className="relative h-full border-r-2 border-[#eeeeee]"
      style={{ width }}
      ref={ref}
    >
      <div
        className="h-full flex items-center px-1 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`truncate text-sm w-full font-semibold ${getTextColor(selected)}`}>
          {selected || `Select ${type}`}
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-200 shadow rounded w-full">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`px-2 py-1 hover:bg-gray-100 text-sm cursor-pointer truncate font-semibold ${getTextColor(opt)}`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Options;
