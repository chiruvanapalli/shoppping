import React from "react";
import BreadCrumb from "./BreadCrumb";
import useDynamicBreadcrumb from "./useDynamicBreadcrumb";

const Cart = () => {
  const crumbs = useDynamicBreadcrumb();
  const cartItems = [
    { name: "Chicken Biryani", price: 259, qty: 1 },
    { name: "Paneer Tikka", price: 199, qty: 1 },
    { name: "Lassi", price: 50, qty: 2 },
    { name: "Gulab Jamun", price: 99, qty: 1 },
    { name: "Naan", price: 30, qty: 3 },
    { name: "Butter Chicken", price: 299, qty: 1 },
  ];

  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="max-w-6xl mx-auto p-6 min-h-screen animate-slideUp">
        <h1 className="text-3xl font-normal mb-6 flex items-center gap-3">
          Your Cart{" "}
          <span className="p-2 py-1 bg-gray-100 rounded-md text-sm">4</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white shadow rounded-xl">
          {/* LEFT SIDE — CART ITEMS */}
          <div className="max-h-full lg:col-span-2">
            <div className="w-full  p-6 pr-2">
              {/* <h2 className="text-xl font-semibold mb-4">Items</h2> */}

              <div className="space-y-6 overflow-y-auto max-h-[320px] pr-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between ${
                      cartItems.length - 1 !== index
                        ? "border-b border-gray-200 pb-4"
                        : ""
                    }`}
                  >
                    {/* Item Info */}
                    <div>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-sm text-gray-600">₹{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100">
                        -
                      </button>
                      <span className="px-3">{item.qty}</span>
                      <button className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — SUMMARY */}
          <div className="p-6 pt-4 h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Bill Summary</h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹458</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                <span>Total</span>
                <span>₹498</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
