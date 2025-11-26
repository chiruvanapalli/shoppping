import React, { useState } from "react";
import BreadCrumb from "./common/BreadCrumb";
import useDynamicBreadcrumb from "./common/useDynamicBreadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import { FaClock, FaStar } from "react-icons/fa";
import Cart from "./common/Cart";
import Modal from "./common/Modal";

const restaurant = {
  name: "Paradise Biryani",
  rating: 4.4,
  ratingCount: "12K+ ratings",
  deliveryTime: "25–30 mins",
  costForTwo: "₹450 for two",
  cuisine: "Biryani, North Indian, Kebabs",
  location: "Secunderabad",
  banner:
    "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=1200&q=75",
};

const offers = [
  { title: "50% OFF UPTO ₹120", code: "TRYNEW" },
  { title: "20% OFF ABOVE ₹500", code: "FESTIVE20" },
];

const categories = [
  "Recommended",
  "Starters",
  "Biryani",
  "Kebabs",
  "Rice & Curries",
  "Breads",
  "Desserts",
];

const items = [
  {
    name: "Chicken Biryani",
    price: 259,
    img: "https://b.zmtcdn.com/data/dish_photos/f2e/07e933eabca36c99dd61dd9e61e3af2e.jpg?fit=around|130:130&crop=130:130;*,*",
    desc: "Juicy chicken cooked with long-grain basmati rice & spices.",
    veg: false,
  },
  {
    name: "Paneer Tikka",
    price: 199,
    img: "https://b.zmtcdn.com/data/dish_photos/4b5/e6211e228062048527808439a8ee64b5.jpeg?output-format=webp",
    desc: "Soft paneer marinated with tandoori spices & grilled.",
    veg: true,
  },
  {
    name: "Mutton Biryani",
    price: 299,
    img: "https://b.zmtcdn.com/data/dish_photos/5c0/be5b7e21c5fb14aff4cbb8e7dd5415c0.jpeg?output-format=webp",
    desc: "Slow-cooked tender mutton with aromatic spices.",
    veg: false,
  },
];

const ProductDetails = () => {
  const crumbs = useDynamicBreadcrumb();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="pb-24">
        {/* Banner */}
        <div className="relative h-68 w-full">
          <img src={restaurant.banner} className="w-full h-full object-cover" />
          <div className="absolute inset-0"></div>
        </div>

        {/* Floating Card */}
        <div className="max-w-5xl mx-auto -mt-24 relative z-10">
          <div className="bg-white shadow-xl p-6 rounded-2xl">
            {/* Restaurant Info */}
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>

            {/* Rating + Cost + Time */}
            <div className="flex items-center gap-4 mt-3 text-gray-700">
              <div className="flex items-center gap-2">
                <FaStar className="text-green-600" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="text-gray-500">{restaurant.ratingCount}</span>
              </div>

              <span className="text-gray-300">•</span>

              <div className="flex items-center gap-2">
                <FaClock />
                {restaurant.deliveryTime}
              </div>

              <span className="text-gray-300">•</span>

              <span>{restaurant.costForTwo}</span>
            </div>

            {/* Cuisine + Location */}
            <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>
            <p className="text-gray-500">{restaurant.location}</p>

            {/* Offers */}
            <div className="flex gap-3 mt-5">
              {offers.map((offer, idx) => (
                <div
                  key={idx}
                  className="border border-orange-400 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  {offer.title} • {offer.code}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Layout */}
        <div className="max-w-5xl mx-auto mt-10 flex gap-10 px-4">
          {/* LEFT CATEGORY NAV */}
          <div className="hidden md:block w-64 sticky top-24 h-[500px] overflow-y-auto border-r border-gray-400 pr-4">
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer hover:text-orange-600 transition"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT MENU ITEMS */}
          <div className="flex-1 space-y-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between gap-6 pb-6 border-b border-gray-400"
              >
                {/* Info */}
                <div className="flex-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      item.veg ? "bg-green-700" : "bg-red-700"
                    }`}
                  ></span>

                  <p className="text-lg font-semibold mt-1">{item.name}</p>
                  <p className="font-medium text-gray-700 mt-1">
                    ₹{item.price}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 max-w-md">
                    {item.desc}
                  </p>

                  <button className="mt-3 border border-gray-400 rounded-md px-4 py-1 font-semibold text-sm hover:bg-gray-50">
                    ADD
                  </button>
                </div>

                {/* Image */}
                <img
                  src={item.img}
                  className="w-32 h-28 rounded-lg object-cover shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cart Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-3 flex items-center justify-between">
          <p className="font-semibold">2 items | ₹498</p>
          <button
            onClick={() => setIsVisible(true)}
            className="bg-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 cursor-pointer"
          >
            View Cart <IoIosArrowForward />
          </button>
        </div>
        {isVisible && (
          <Modal
            onHide={() => setIsVisible(false)}
            visible={isVisible}
            header="Your Cart"
          >
            {<Cart />}
          </Modal>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
