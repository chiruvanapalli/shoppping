import React from "react";
import { FaStar } from "react-icons/fa";
import Dropdown from "./common/Dropdown";
import BreadCrumb from "./common/BreadCrumb";
import useDynamicBreadcrumb from "./common/useDynamicBreadcrumb";
const restaurants = [
  {
    name: "The Bhadrachalam Cafe",
    offer: "50% OFF UPTO ₹100",
    rating: "4.3",
    time: "30-40 mins",
    cuisine: "South Indian, Juices, Tea, Coffee",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/efb8f1bf23d8163ce6cac8dee4734314",
  },
  {
    name: "Olio - The Wood Fired",
    offer: "ITEMS AT ₹119",
    rating: "4.2",
    time: "50-60 mins",
    cuisine: "Pizzas, Italian, Fast Food",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/a5ab128b-4b39-48b9-b7a5-a725f547716c_5974%20(1).jpg",
  },
  {
    name: "Bheema’s",
    offer: "ITEMS AT ₹109",
    rating: "4.6",
    time: "30-35 mins",
    cuisine: "South Indian, Andhra, Fast Food",
    location: "Shaikpet",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v2r0t79ipfotut7nlld6",
  },
  {
    name: "Royal Tiffin Centre",
    offer: "ITEMS AT ₹59",
    rating: "4.3",
    time: "30-35 mins",
    cuisine: "Indian",
    location: "Banjara Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/5e0ee2c6-9bc9-4b00-bc0f-18c76e5468fc_1007186.jpg",
  },

  {
    name: "Olio - The Wood Fired",
    offer: "ITEMS AT ₹119",
    rating: "4.2",
    time: "50-60 mins",
    cuisine: "Pizzas, Italian, Fast Food",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/a5ab128b-4b39-48b9-b7a5-a725f547716c_5974%20(1).jpg",
  },

  {
    name: "The Bhadrachalam Cafe",
    offer: "50% OFF UPTO ₹100",
    rating: "4.3",
    time: "30-40 mins",
    cuisine: "South Indian, Juices, Tea, Coffee",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/efb8f1bf23d8163ce6cac8dee4734314",
  },
  {
    name: "Royal Tiffin Centre",
    offer: "ITEMS AT ₹59",
    rating: "4.3",
    time: "30-35 mins",
    cuisine: "Indian",
    location: "Banjara Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/5e0ee2c6-9bc9-4b00-bc0f-18c76e5468fc_1007186.jpg",
  },
  {
    name: "Bheema’s",
    offer: "ITEMS AT ₹109",
    rating: "4.6",
    time: "30-35 mins",
    cuisine: "South Indian, Andhra, Fast Food",
    location: "Shaikpet",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v2r0t79ipfotut7nlld6",
  },
  {
    name: "The Bhadrachalam Cafe",
    offer: "50% OFF UPTO ₹100",
    rating: "4.3",
    time: "30-40 mins",
    cuisine: "South Indian, Juices, Tea, Coffee",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/efb8f1bf23d8163ce6cac8dee4734314",
  },
  {
    name: "Olio - The Wood Fired",
    offer: "ITEMS AT ₹119",
    rating: "4.2",
    time: "50-60 mins",
    cuisine: "Pizzas, Italian, Fast Food",
    location: "Jubilee Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/a5ab128b-4b39-48b9-b7a5-a725f547716c_5974%20(1).jpg",
  },
  {
    name: "Bheema’s",
    offer: "ITEMS AT ₹109",
    rating: "4.6",
    time: "30-35 mins",
    cuisine: "South Indian, Andhra, Fast Food",
    location: "Shaikpet",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v2r0t79ipfotut7nlld6",
  },
  {
    name: "Royal Tiffin Centre",
    offer: "ITEMS AT ₹59",
    rating: "4.3",
    time: "30-35 mins",
    cuisine: "Indian",
    location: "Banjara Hills",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/5e0ee2c6-9bc9-4b00-bc0f-18c76e5468fc_1007186.jpg",
  },
];

const sortOptions = [
  { name: "Popular", value: "popular" },
  { name: "High to Low", value: "rating_desc" },
  { name: "Low to High", value: "rating_asc" },
  { name: "Delivery Time", value: "time" },
];

const Products = () => {
  const crumbs = useDynamicBreadcrumb();
  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-center flex items-center gap-4">
            Top Restaurants in Hyderabad{" "}
            <span className="bg-orange-100 text-orange-600 rounded-lg p-2 py-1 text-sm">
              10
            </span>
          </h2>
          <Dropdown
            placeholder="Sort by: Popular"
            items={sortOptions}
            panelWidth="auto"
            onSelect={(value) => {
              console.log("Sort selected:", value);
            }}
            className="w-44"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.img}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-semibold px-3 py-1">
                  {item.offer}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-3">
                <h3 className="font-bold text-lg truncate">{item.name}</h3>

                {/* Rating + Time */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mt-1">
                  <FaStar className="text-green-600 text-xs" />
                  <span>{item.rating}</span>
                  <span>• {item.time}</span>
                </div>

                {/* Cuisine */}
                <p className="text-gray-500 text-sm mt-1 truncate">
                  {item.cuisine}
                </p>

                {/* Location */}
                <p className="text-gray-600 text-sm mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
