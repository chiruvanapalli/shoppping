import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  visible: boolean;
  onHide: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  dismissableMask?: boolean;
  className?: string;
  headerTemplate?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Modal({
  visible,
  onHide,
  children,
  title,
  footer,
  dismissableMask = true,
  headerTemplate,
  size = "md",
  className = "",
}: ModalProps) {
  if (typeof window === "undefined") return null;

  const widthClasses = {
    sm: "md:w-[400px]",
    md: "md:w-[600px]",
    lg: "md:w-[800px]",
  };

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      {visible && (
        <div
          onClick={() => dismissableMask && onHide()}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
        ></div>
      )}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4
          ${visible ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <div
          className={`
            bg-white rounded-lg shadow-xl
            w-full sm:w-[90%]
            ${widthClasses[size]}
            max-h-[90vh] overflow-hidden
            flex flex-col
            transform transition-all duration-300
            ${
              visible
                ? "scale-100 opacity-100 animate-slideUp"
                : "scale-95 opacity-0"
            }
            ${className}
          `}
        >
          {/* Header */}
          {headerTemplate ? (
            headerTemplate
          ) : (
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <div className="text-lg font-semibold">{title}</div>
              <button
                onClick={onHide}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 cursor-pointer p-3 py-2 rounded-sm"
              >
                ✕
              </button>
            </div>
          )}

          {/* Body */}
          <div className="p-6 overflow-y-auto">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="p-4 border-t border-gray-300 bg-gray-50 flex justify-end gap-3">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
