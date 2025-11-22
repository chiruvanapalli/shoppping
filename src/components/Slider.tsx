import React, { useEffect, useState } from "react";
import { slides } from "../json/sliderData";
import Banner from "../assets/images/png/hero-img.png";

export default function FoodDiscountBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    // <div className="w-full h-72 md:h-96 overflow-hidden relative">
    //   {/* Slider container */}
    //   <div
    //     className="whitespace-nowrap h-full transition-transform duration-700 ease-out"
    //     style={{ transform: `translateX(-${index * 100}%)` }}
    //   >
    //     {slides.map((slide) => (
    //       <div
    //         key={slide.id}
    //         className="inline-flex items-center justify-center w-full h-72 md:h-96 relative"
    //       >
    //         {/* Background Image */}
    //         {/* <img
    //           src={slide.image}
    //           alt={slide.title}
    //           className="w-full h-full object-cover"
    //         /> */}

    //         {/* Overlay */}
    //         <div className="absolute inset-0 bg-black/40"></div>

    //         {/* Content */}
    //         <div className="absolute text-center text-white drop-shadow-lg px-4">
    //           <div className="text-4xl md:text-6xl font-extrabold mb-2">
    //             {slide.discount}
    //           </div>
    //           <h2 className="text-2xl md:text-4xl font-bold mb-1">
    //             {slide.title}
    //           </h2>
    //           <p className="text-lg md:text-xl opacity-90">{slide.desc}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Dots */}
    //   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
    //     {slides.map((s, i) => (
    //       <button
    //         key={s.id}
    //         onClick={() => setIndex(i)}
    //         className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
    //           i === index ? "bg-white scale-110" : "bg-white/50"
    //         }`}
    //       ></button>
    //     ))}
    //   </div>
    // </div>
    // <div className="p-6">
    //   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" />
    // </div>
    <div className="h-[450px] flex items-center p-8 justify-between px-10 bg-gradient-to-r from-orange-50 to-white rounded-2xl shadow-sm">
      {/* LEFT SIDE TEXT */}
      <div className="flex flex-col gap-5 max-w-lg">
        <h2 className="text-5xl font-extrabold leading-tight text-gray-800">
          Enjoy Your Healthy <br /> Delicious Food
        </h2>

        <p className="text-gray-600 text-lg">
          We are a team of talented chefs serving mouth-watering dishes made
          with love.
        </p>

        <button className="mt-2 bg-orange-600 text-white px-6 py-3 rounded-full w-fit font-semibold shadow hover:bg-orange-700 transition">
          Order Now
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <img
        src={Banner}
        alt="Food Banner"
        className="h-full object-contain rounded-2xl drop-shadow-xl"
      />
    </div>
  );
}
