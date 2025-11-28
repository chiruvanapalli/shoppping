import BreadCrumb from "./common/BreadCrumb";
import useDynamicBreadcrumb from "./common/useDynamicBreadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import { FaClock, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="pb-28">
        {/* BEAUTIFUL BANNER */}
        <div className="relative h-30 w-full overflow-hidden">
          {/* <img
            src={restaurant.banner}
            className="w-full h-full object-cover scale-105 animate-fadeInSlow"
          /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/60 to-orange-400/70"></div>
        </div>

        {/* FLOATING CARD */}
        <div className="max-w-5xl mx-auto -mt-24 relative z-10">
          <div className="bg-white shadow-xl p-8 rounded-2xl animate-slideUp">
            {/* Restaurant Title */}
            <h1 className="text-4xl font-semibold">{restaurant.name}</h1>

            {/* Rating & Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-700">
              <div className="flex items-center gap-2">
                <FaStar className="text-green-600" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="text-gray-500">{restaurant.ratingCount}</span>
              </div>

              <span className="text-gray-300">•</span>

              <div className="flex items-center gap-2">
                <FaClock className="text-orange-600" />
                {restaurant.deliveryTime}
              </div>

              <span className="text-gray-300">•</span>

              <span className="font-medium">{restaurant.costForTwo}</span>
            </div>

            <p className="text-gray-600 mt-3">{restaurant.cuisine}</p>
            <p className="text-gray-500">{restaurant.location}</p>

            {/* Offers row */}
            <div className="flex flex-wrap gap-3 mt-6">
              {offers.map((offer, idx) => (
                <div
                  key={idx}
                  className="border border-orange-400 text-orange-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-50 transition cursor-pointer"
                >
                  {offer.title} • {offer.code}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MENU CONTENT */}
        <div className="max-w-5xl mx-auto mt-12 flex gap-10 px-4">
          {/* LEFT SIDEBAR */}
          <div className="hidden md:block w-64 sticky top-28 h-[500px] overflow-y-auto">
            <h3 className="font-bold mb-5 text-lg">Menu</h3>

            <ul className="space-y-4">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer text-gray-700 font-medium hover:text-orange-600 transition relative group"
                >
                  {cat}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* MENU ITEMS RIGHT */}
          <div className="flex-1 space-y-10">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between gap-6 pb-8 border-b border-gray-200 group transition transform hover:-translate-y-1"
              >
                {/* Info */}
                <div className="flex-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      item.veg ? "bg-green-700" : "bg-red-700"
                    }`}
                  ></span>

                  <p className="text-xl font-semibold mt-2 group-hover:text-orange-600 transition">
                    {item.name}
                  </p>

                  <p className="font-medium text-gray-700 mt-1">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-1 max-w-md leading-relaxed">
                    {item.desc}
                  </p>

                  <button className="mt-3 border border-orange-600 text-orange-600 rounded-md px-4 py-1 font-semibold text-sm hover:bg-orange-600 hover:text-white transition">
                    ADD
                  </button>
                </div>

                {/* Image */}
                <img
                  src={item.img}
                  className="w-32 h-28 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CART BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl px-6 py-4 flex items-center justify-between animate-slideUpFast">
          <p className="font-semibold text-lg">2 items | ₹498</p>
          <button
            onClick={() => navigate("/cart")}
            className="bg-orange-600 text-white px-6 pr-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-orange-700 transition"
          >
            View Cart <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
