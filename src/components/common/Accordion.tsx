import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean; // false = only 1 open
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (allowMultiple) {
      // Multi-open mode
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      // Single-open mode
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={`${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const contentRef = useRef<HTMLDivElement>(null);

        return (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition font-medium"
            >
              <span>{item.title}</span>

              <span className="text-xl transition-transform duration-300">
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {/* Body with animation */}
            <div
              ref={contentRef}
              style={
                {
                  height: isOpen
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0px",
                  "--content-height": `${contentRef.current?.scrollHeight}px`,
                } as any
              }
              className={`overflow-hidden bg-white px-4 
                ${isOpen ? "accordion-open" : "accordion-close"}
              `}
            >
              <div className="py-3 text-gray-700">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
