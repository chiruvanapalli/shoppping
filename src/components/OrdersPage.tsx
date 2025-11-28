import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Dropdown from "./common/Dropdown";
import useDynamicBreadcrumb from "./common/useDynamicBreadcrumb";
import BreadCrumb from "./common/BreadCrumb";

export default function OrdersPage() {
  const crumbs = useDynamicBreadcrumb();

  const [activeTab, setActiveTab] = useState("all");
  const [sortType, setSortType] = useState("newest");
  const [expanded, setExpanded] = useState<number | null>(null);

  const orderDetails = {
    orderId: "ODR45231",
    payment: "UPI",
    address: "H.No 8-2-293, Jubilee Hills, Hyderabad",
    time: "Jan 26, 2025 • 08:32 PM",
  };

  const orders = [
    {
      id: 1,
      restaurant: "Paradise Biryani",
      items: [
        { name: "Chicken Biryani", qty: 1, price: 259 },
        { name: "Paneer Tikka", qty: 1, price: 199 },
      ],
      amount: 498,
      date: "2024-01-26",
      status: "completed",
    },
    {
      id: 2,
      restaurant: "KFC",
      items: [
        { name: "Zinger Burger", qty: 1, price: 189 },
        { name: "Fries", qty: 1, price: 140 },
      ],
      amount: 329,
      date: "2024-01-25",
      status: "cancelled",
    },
    {
      id: 3,
      restaurant: "Domino's Pizza",
      items: [{ name: "Medium Veg Pizza", qty: 1, price: 499 }],
      amount: 499,
      date: "2024-01-20",
      status: "completed",
    },
  ];

  const sortOptions = [
    { name: "Newest", value: "newest" },
    { name: "Oldest", value: "oldest" },
    { name: "High to Low", value: "high" },
    { name: "Low to High", value: "low" },
  ];

  // Filter
  const filteredOrders =
    activeTab === "all" ? orders : orders.filter((o) => o.status === activeTab);

  // Sort
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortType === "newest") return new Date(b.date) - new Date(a.date);
    if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortType === "high") return b.amount - a.amount;
    if (sortType === "low") return a.amount - b.amount;
  });

  return (
    <>
      <BreadCrumb items={crumbs} />
      <div className="max-w-6xl mx-auto p-6 min-h-screen">
        {/* PAGE TITLE */}
        <div className="text-3xl font-normal mb-6 flex items-center gap-3">
          <h1 className="text-3xl font-normal">My Orders</h1>
          <span className="p-2 py-1 bg-gray-100 rounded-md text-sm">
            {orders.length}
          </span>
        </div>

        {/* TABS + SORT */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex gap-4 w-full md:w-auto">
            {["all", "completed", "cancelled"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-2 font-semibold capitalize transition border-b-2 cursor-pointer ${
                  activeTab === tab
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <Dropdown
            placeholder="Sort: Newest"
            items={sortOptions}
            onSelect={(v) => setSortType(v)}
            className="w-48"
          />
        </div>

        {/* ORDER LIST */}
        <div className="space-y-5">
          {sortedOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* TOP ROW */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
                    <IoFastFood size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{order.restaurant}</p>
                    <p className="text-sm text-gray-500">
                      {order.items.map((i) => i.name).join(", ")}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              {/* MIDDLE */}
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>{new Date(order.date).toDateString()}</span>
                <span className="font-semibold text-gray-800">
                  ₹{order.amount}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-5">
                <button
                  onClick={() =>
                    setExpanded(expanded === order.id ? null : order.id)
                  }
                  className="border cursor-pointer px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200"
                >
                  View Details
                  <IoChevronDown
                    className={`transition-transform ${
                      expanded === order.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <button className="bg-orange-600 text-white cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-orange-700">
                  Reorder
                </button>
              </div>

              {/* ACCORDION DETAILS */}
              {expanded === order.id && (
                <div className="mt-6 border-t border-gray-300 pt-4 animate-fadeIn">
                  {/* Items */}
                  <h4 className="font-semibold mb-2">Items Ordered</h4>
                  <div className="space-y-2 border-b border-gray-300 pb-4 mb-4">
                    {order.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-gray-700"
                      >
                        <span>
                          {item.name} × {item.qty}
                        </span>
                        <span>₹{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Extra Details */}
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>
                      <span className="font-semibold">Order ID:</span>{" "}
                      {orderDetails.orderId}
                    </p>
                    <p>
                      <span className="font-semibold">Payment:</span>{" "}
                      {orderDetails.payment}
                    </p>
                    <p>
                      <span className="font-semibold">Delivered to:</span>{" "}
                      {orderDetails.address}
                    </p>
                    <p>
                      <span className="font-semibold">Placed on:</span>{" "}
                      {orderDetails.time}
                    </p>
                  </div>

                  <div className="mt-4 text-right font-bold text-lg">
                    Total: ₹{order.amount}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {sortedOrders.length === 0 && (
          <div className="text-center text-gray-500 py-20 text-lg">
            No orders found under <b>{activeTab}</b>.
          </div>
        )}

        {/* Animation */}
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn .25s ease-out;
        }
      `}</style>
      </div>
    </>
  );
}
