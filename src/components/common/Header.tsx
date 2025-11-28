import React, { useEffect, useRef, useState } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import LOGO from "../../assets/images/png/brand-logo.png";
import DeliverySearchBar from "../DeliverySearchBar";
import { useNavigate } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import Sidebar from "./Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<any>(localStorage.getItem("token"));
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<any>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <header className="w-full bg-white py-4 px-6 shadow-xs sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div
          className="text-center flex items-center"
          style={{ height: "70px" }}
        >
          <div
            onClick={() => setSidebarOpen(true)}
            className="
    p-3 rounded-full cursor-pointer 
    transition-all duration-200
    hover:bg-gray-100 hover:scale-105
  "
          >
            <VscListSelection size={24} />
          </div>

          <img src={LOGO} className="max-h-full" />
          <div className="font-extrabold text-4xl bg-gradient-to-r from-[#FFA726] to-[#EF5350] bg-clip-text text-transparent">
            SPICY
          </div>
        </div>

        <DeliverySearchBar />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          {/* <button className="cursor-pointer group relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 bg-white transition-all duration-200 hover:bg-orange-600 hover:border-orange-600">
            <FiShoppingCart
              className="text-gray-700 transition-all duration-200 group-hover:text-white"
              size={20}
            />
            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-white border-2">
              02
            </span>
          </button> */}
          2 items | ₹498
          {/* 🔥 CONDITIONAL: LOGIN vs PROFILE */}
          {!token ? (
            // LOGIN BUTTON
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer group flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full bg-white text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-orange-600 hover:text-white"
            >
              <FiUser className="text-gray-700 group-hover:text-white" />
              <span className="text-sm font-medium group-hover:text-white">
                Log In
              </span>
            </button>
          ) : (
            // PROFILE DROPDOWN
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-md bg-white text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:border-gray-600 hover:text-gray-800"
              >
                <FiUser className="text-gray-700 group-hover:text-white" />
                <span className="text-sm font-medium">
                  {token && token?.user?.name}
                </span>
                <FiChevronDown
                  className={`transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* DROPDOWN MENU */}
              {open && (
                <div className="absolute right-0 mt-[2px] w-40 bg-white shadow-lg rounded-lg border border-gray-200 animate-fadeIn">
                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Sidebar
        visible={isSidebarOpen}
        position="left"
        width="400px"
        onClose={() => setSidebarOpen(false)}
      >
        User Details go here
      </Sidebar>
    </header>
  );
};

export default Header;
