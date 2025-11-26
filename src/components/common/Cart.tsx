import React from "react";

const Cart = () => {
  return (
    <div
      id="cartModal"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm hidden items-end justify-center z-50"
    >
      <div className="bg-white w-full max-w-lg rounded-t-2xl p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button className="text-gray-500 hover:text-gray-700 text-2xl">
            &times;
          </button>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">Chicken Biryani</p>
              <p className="text-sm text-gray-600">₹259</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded">-</button>
              <span className="px-3">1</span>
              <button className="px-3 py-1 border rounded">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">Paneer Tikka</p>
              <p className="text-sm text-gray-600">₹199</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded">-</button>
              <span className="px-3">1</span>
              <button className="px-3 py-1 border rounded">+</button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>₹458</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total</span>
            <span>₹498</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
