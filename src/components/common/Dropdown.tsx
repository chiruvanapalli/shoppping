import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps {
  placeholder?: string;
  items: any[];
  onSelect: (value: any) => void;
  className?: string;
  noBorder?: boolean;
  panelWidth?: "trigger" | "auto" | number | string; // NEW
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  className = "",
  placeholder = "Select",
  noBorder,
  panelWidth = "trigger", // Default → width same as dropdown
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState<"bottom" | "top">("bottom");
  const [align, setAlign] = useState<"left" | "right">("left");

  const [panelRealWidth, setPanelRealWidth] = useState<string | undefined>();

  // close on outside click
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

  // smart positioning + width calculation
  useEffect(() => {
    if (!open) return;

    const trigger = dropdownRef.current?.getBoundingClientRect();
    const menu = menuRef.current?.getBoundingClientRect();
    if (!trigger || !menu) return;

    // vertical logic
    const spaceBelow = window.innerHeight - trigger.bottom;
    const spaceAbove = trigger.top;

    if (spaceBelow < menu.height && spaceAbove > menu.height) {
      setPosition("top");
    } else {
      setPosition("bottom");
    }

    // horizontal logic
    const spaceRight = window.innerWidth - trigger.left;
    if (spaceRight < menu.width) {
      setAlign("right");
    } else {
      setAlign("left");
    }

    // set panel width
    if (panelWidth === "trigger") {
      setPanelRealWidth(`${trigger.width}px`);
    } else if (typeof panelWidth === "number") {
      setPanelRealWidth(`${panelWidth}px`);
    } else if (typeof panelWidth === "string") {
      setPanelRealWidth(panelWidth);
    } else {
      setPanelRealWidth(undefined); // auto
    }
  }, [open, panelWidth]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between gap-2 px-3 py-2 bg-white hover:bg-gray-50 w-full ${
          noBorder ? "" : "border border-gray-200 rounded-md"
        }`}
      >
        <span>{value?.name || placeholder}</span>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={menuRef}
          style={{ width: panelRealWidth }}
          className={`
            absolute bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden

            ${position === "bottom" ? "top-full mt-2 animate-slide-down" : ""}
            ${position === "top" ? "bottom-full mb-2 animate-slide-up" : ""}

            ${align === "left" ? "left-0" : "right-0"}
          `}
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setValue(item);
                onSelect(item);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
