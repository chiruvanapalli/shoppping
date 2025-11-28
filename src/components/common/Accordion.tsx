import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
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
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div
      className={`border border-gray-300 rounded-md overflow-hidden ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const contentRef = useRef<HTMLDivElement>(null);

        return (
          <div key={index}>
            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium"
            >
              <span>{item.title}</span>
              <span className="text-xl transition-transform duration-300">
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {/* CONTENT */}
            <div
              ref={contentRef}
              style={{
                height: isOpen
                  ? `${contentRef.current?.scrollHeight}px`
                  : "0px",
              }}
              className={`overflow-hidden transition-all duration-300 bg-white`}
            >
              <div className="px-4 py-3 text-gray-700">{item.content}</div>
            </div>

            {/* DIVIDER (only between items, not last item) */}
            {index < items.length - 1 && (
              <div className="border-t border-gray-200"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
