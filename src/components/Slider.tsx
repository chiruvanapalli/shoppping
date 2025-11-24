import React, { useEffect, useState } from "react";
import Banner from "../assets/images/png/hero-img.png";

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  const slides = [1, 2, 3, 4];

  const quotes = [
    {
      title: (
        <>
          Enjoy <span className="font-semibold">Healthy</span> and <br />
          <span className="font-semibold">Delicious Food</span>
        </>
      ),
      subtitle: (
        <>
          Freshly prepared meals made with love, <br />
          crafted by our talented chefs.
        </>
      ),
    },
    {
      title: (
        <>
          Taste the <span className="font-semibold">Freshness</span> in <br />
          Every Bite
        </>
      ),
      subtitle: (
        <>
          Made with premium ingredients to bring you <br />
          unforgettable flavors.
        </>
      ),
    },
    {
      title: (
        <>
          Elevate Your <span className="font-semibold">Food Experience</span>
        </>
      ),
      subtitle: (
        <>
          Good food, good mood — enjoy meals that make <br />
          you feel amazing.
        </>
      ),
    },
    {
      title: (
        <>
          Savor the <span className="font-semibold">Real Taste</span> of <br />
          Fresh Food
        </>
      ),
      subtitle: (
        <>
          Handcrafted dishes that bring comfort and joy <br />
          in every serving.
        </>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => {
          const isActive = i === index;

          return (
            <div key={slide} className="w-full flex-shrink-0">
              <div className="h-[450px] flex flex-wrap items-center p-8 justify-center px-10 bg-orange-50 shadow-sm">
                <div className="flex items-center justify-between h-full w-[90%] mx-auto">
                  {/* LEFT CONTENT */}
                  <div
                    className={`flex flex-col gap-5 max-w-lg transition-all duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)]
                      ${
                        isActive
                          ? "opacity-100 -translate-x-0"
                          : "opacity-0 -translate-x-5"
                      }
                    `}
                  >
                    <h2 className="text-5xl font-normal leading-tight text-gray-800">
                      {quotes[i].title}
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {quotes[i].subtitle}
                    </p>

                    <button className="mt-2 bg-orange-600 text-white px-6 py-3 rounded-full w-fit font-semibold shadow hover:bg-orange-700 transition">
                      Order Now
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <img
                    src={Banner}
                    alt="Food Banner"
                    className={`max-h-full object-contain rounded-2xl drop-shadow-xl transition-all duration-700
                      ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
                    `}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-orange-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
