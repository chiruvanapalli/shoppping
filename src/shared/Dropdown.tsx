import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps {
  placeholder?: string;
  label?: string; // Button text
  items: any[]; // List of items
  onSelect: (value: string) => void; // When item is selected
  className?: string; // Style overrides (optional)
  noBorder?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  onSelect,
  className = "",
  placeholder,
  noBorder,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<any>();

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  console.log("value", value);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Label Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 ${
          noBorder ? "" : "border border-gray-200 rounded-md"
        }`}
      >
        {value?.name || placeholder}
        <span
          className={`text-sm transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => {
                onSelect?.(item);
                setValue(item);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {item?.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
