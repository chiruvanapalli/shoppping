import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BreadCrumb from "./common/BreadCrumb";
import useDynamicBreadcrumb from "./common/useDynamicBreadcrumb";

const Wishlist = () => {
  const crumbs = useDynamicBreadcrumb();
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      price: 259,
      rating: 4.6,
      img: "https://b.zmtcdn.com/data/dish_photos/f2e/07e933eabca36c99dd61dd9e61e3af2e.jpg",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 199,
      rating: 4.4,
      img: "https://b.zmtcdn.com/data/dish_photos/4b5/e6211e228062048527808439a8ee64b5.jpeg",
    },
    {
      id: 3,
      name: "Veg Pizza",
      price: 299,
      rating: 4.2,
      img: "https://b.zmtcdn.com/data/dish_photos/5c0/be5b7e21c5fb14aff4cbb8e7dd5415c0.jpeg",
    },
  ]);

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const addToCart = (item: any) => {
    console.log("Added to cart:", item);
    // Add your cart logic here
  };

  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="max-w-6xl mx-auto p-6 pb-20">
        <h1 className="text-3xl font-semibold mb-6">My Wishlist</h1>

        {/* EMPTY STATE */}
        {wishlist.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <FaHeart className="text-orange-500 text-5xl mb-4 mx-auto" />
            <p className="text-lg">Your wishlist is empty</p>
            <p className="text-sm text-gray-400">
              Start adding your favourite items!
            </p>
          </div>
        )}

        {/* WISHLIST GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl shadow-sm p-4 transition hover:shadow-md hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  className="w-full h-40 object-cover rounded-lg"
                />

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <MdDelete size={20} className="text-red-600" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>

                <div className="flex items-center gap-2 mt-1">
                  <FaStar className="text-yellow-500" size={16} />
                  <span className="text-gray-600 text-sm">{item.rating}</span>
                </div>

                <p className="font-medium text-gray-800 mt-1">₹{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
