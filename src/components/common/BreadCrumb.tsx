import React from "react";
import { IoChevronForward } from "react-icons/io5";

interface BreadCrumbProps {
  items: { label: string; href?: string }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <ul className="flex items-center gap-2 text-gray-600 text-sm">
      {items.map((crumb, index) => {
        return (
          <>
            <li key={index} className="flex items-center gap-2">
              {index === items.length - 1 ? (
                <span className="hover:text-blue-600">{crumb.label}</span>
              ) : (
                <a href={crumb.href} className="hover:text-blue-600">
                  {crumb.label}
                </a>
              )}

              {index < items.length - 1 && (
                <IoChevronForward className="text-gray-400 text-xs" />
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default BreadCrumb;
