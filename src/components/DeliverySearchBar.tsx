import React from "react";
import { FiMapPin, FiCrosshair, FiSearch } from "react-icons/fi";

const DeliverySearchBar = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-full flex items-center px-6 py-3 shadow">
        {/* Left Input Section */}
        <div className="flex items-center gap-3 flex-1">
          <FiMapPin size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Enter delivery address"
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Locate Me */}
        <button className="flex items-center gap-2 text-gray-700 mr-4 hover:text-orange-500 cursor-pointer">
          <FiCrosshair size={17} />
          <span className="text-sm font-medium">Locate Me</span>
        </button>

        {/* Search Button */}
        <button className="bg-orange-600 text-white cursor-pointer rounded-full px-6 py-2 flex items-center gap-2 font-medium hover:bg-orange-700">
          <FiSearch size={16} />
          Search
        </button>
      </div>
    </div>
  );
};

export default DeliverySearchBar;
