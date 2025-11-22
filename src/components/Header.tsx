import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import LOGO from "../assets/images/png/brand-logo.png";
import DeliverySearchBar from "./DeliverySearchBar";

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 shadow-xs sticky top-0 z-30">
      {/* light cream-orange background */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="text-center flex gap-2" style={{ height: "70px" }}>
          <img src={LOGO} className="max-h-full" />
        </div>

        <DeliverySearchBar />

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            className="cursor-pointer
    group
    relative w-10 h-10
    flex items-center justify-center
    rounded-full
    border border-gray-500
    bg-white
    transition-all duration-200
    hover:bg-orange-600
    hover:border-orange-600
  "
          >
            {/* Cart Icon */}
            <FiShoppingCart
              className="
      text-gray-700 
      transition-all duration-200 
      group-hover:text-white
    "
              size={20}
            />

            {/* Cart Count */}
            <span
              className="
    absolute -top-1 -right-1 
    bg-orange-600 text-white 
    text-[10px] w-5 h-5 
    rounded-full flex items-center justify-center font-bold
     border-white border-2
  "
            >
              02
            </span>
          </button>

          {/* LOGIN BUTTON (ALWAYS WHITE ICON + TEXT) */}
          <button
            className="
            cursor-pointer
    group
    flex items-center gap-2 
    border border-gray-500
    px-4 py-2 rounded-full
    bg-white
    text-gray-700
    transition-all duration-200
    hover:bg-orange-600
    hover:border-orange-600
    hover:text-white
  "
          >
            <FiUser
              className="
      text-gray-700 
      transition-all 
      duration-200 
      group-hover:text-white
    "
            />
            <span className="text-sm font-medium group-hover:text-white cursor-pointer">
              Log In
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
