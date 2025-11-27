import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export default function OrderSuccess() {
  const order = {
    orderId: "ODR-928374",
    deliveryTime: "30 - 40 mins",
    address: "H.No 8-2-293, Jubilee Hills, Hyderabad, 500033",
    amount: 498,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white max-w-xl w-full rounded-2xl p-8 shadow-lg text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <IoCheckmarkCircle className="text-green-500" size={90} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-2">
          Thank you for ordering. Your delicious food is being prepared.
        </p>

        {/* Order ID */}
        <p className="mt-4 text-gray-700 font-medium">
          Order ID: <span className="text-gray-900">{order.orderId}</span>
        </p>

        {/* Delivery Info */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-2">Delivery Details</h3>

          <div className="flex items-center gap-2 text-gray-700">
            <FaClock className="text-orange-600" />
            <span>Estimated Time: {order.deliveryTime}</span>
          </div>

          <div className="flex items-start gap-2 mt-2 text-gray-700">
            <FaMapMarkerAlt className="text-orange-600 mt-1" />
            <span>{order.address}</span>
          </div>

          <div className="flex justify-between items-center mt-4 pt-3 border-t">
            <span className="font-medium text-gray-700">Total Paid</span>
            <span className="text-lg font-bold text-gray-900">
              ₹{order.amount}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Track Order
          </button>

          <Link
            to="/"
            className="text-orange-600 font-semibold hover:underline text-sm"
          >
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
}
