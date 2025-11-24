import React, { useEffect } from "react";
import { useApi } from "../api/common-hook/useApi";
import { endPoints } from "../api/common-hook/api-end-points";
import Banner from "../assets/images/png/hero-img.png";

import { FiMenu, FiThermometer, FiUserCheck, FiCoffee } from "react-icons/fi";
import HomeSlider from "./Slider";

const featureIcons: any = {
  "Menu variations": FiMenu,
  "Cooking warm": FiThermometer,
  "Best chef": FiUserCheck,
  "Fast food": FiCoffee,
};

const Home = () => {
  const { data, request } = useApi();

  useEffect(() => {
    request("get", endPoints.popularProducts, null, null);
  }, [request]);

  console.log(data);
  const features = [
    { title: "Menu variations" },
    { title: "Cooking warm" },
    { title: "Best chef" },
    { title: "Fast food" },
  ];

  return (
    <div className="flex flex-col space-y-5">
      <HomeSlider />

      <div className="w-full bg-white py-16 px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gray-500 font-semibold">
            FEATURES
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get a many of interesting <br /> features.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((item, idx) => {
            const Icon = featureIcons[item.title];

            return (
              <div
                key={idx}
                className="group
                bg-gradient-to-b from-gray-50 to-gray-100
                text-gray-800 rounded-2xl p-8 pt-16 relative 
                transform transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                hover:from-orange-500 hover:to-orange-600 hover:text-white
              "
              >
                {/* ICON */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div
                    className="
                    w-20 h-20 rounded-full bg-white p-5 shadow-xl 
                    flex items-center justify-center
                    transition-colors duration-300
                    group-hover:bg-orange-100
                  "
                  >
                    <Icon
                      className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600"
                      size={30}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-center mt-2 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-center mt-2 text-sm transition-colors duration-300 group-hover:text-orange-100">
                  Sed ut perspiciatis unde omnis iste natus error
                </p>

                {/* LINK */}
                <p
                  className="
                  text-gray-800 font-semibold text-center mt-4 cursor-pointer 
                  underline underline-offset-4 decoration-gray-500/70
                  transition-colors duration-300
                  group-hover:text-white group-hover:decoration-white/70
                "
                >
                  Learn More →
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
