import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
  position?: "left" | "right"; // default: right
  width?: string; // e.g. "300px"
  children: React.ReactNode;
}

export default function Sidebar({
  visible,
  onClose,
  position = "right",
  width = "320px",
  children,
}: SidebarProps) {
  if (typeof window === "undefined") {
    return null;
  }

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      {visible && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 h-full bg-white shadow-xl z-50
          transition-transform duration-500
          ${position === "right" ? "right-0" : "left-0"}
        `}
        style={{
          width,
          transform: visible
            ? "translateX(0)"
            : position === "right"
            ? "translateX(100%)"
            : "translateX(-100%)",
        }}
      >
        {/* CONTENT */}
        <div className="flex justify-between items-center p-3 shadow-sm">
          <h2 className="text-lg font-normal">Sidebar</h2>
          <button
            onClick={onClose}
            className="text-md font-bold text-gray-500 hover:text-gray-700 cursor-pointer p-2 py-1 rounded-sm hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        <div className="h-full overflow-y-auto p-4">{children}</div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn .25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>,
    document.body
  );
}
