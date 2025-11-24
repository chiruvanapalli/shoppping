import React, { useState, useEffect, useRef } from "react";

export interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
}

export default function Tabs({
  tabs,
  defaultValue,
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].value);

  // Refs for tab DOM nodes
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  // Move indicator when active tab changes
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.value === activeTab);
    const activeTabEl = tabRefs.current[activeIndex];
    const indicator = indicatorRef.current;

    if (activeTabEl && indicator) {
      const rect = activeTabEl.getBoundingClientRect();
      const parentRect = activeTabEl.parentElement!.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - parentRect.left}px`;
    }
  }, [activeTab, tabs]);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="relative border-b overflow-x-auto no-scrollbar">
        <div className="flex relative">
          {/* Animated underline */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ease-out"
          ></div>

          {/* Tabs */}
          {tabs.map((tab, i) => (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap
                ${
                  activeTab === tab.value
                    ? "text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value} className="animate-fadeIn">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
