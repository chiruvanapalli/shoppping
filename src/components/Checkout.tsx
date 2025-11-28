import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import Modal from "./common/Modal";
import { commonService } from "../api/commonService";
// import { useNavigate } from "react-router-dom";

export default function Checkout() {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "H.No 8-2-293, Jubilee Hills, Hyderabad, 500033",
      phone: "9876543210",
    },
    {
      id: 2,
      type: "Office",
      address: "Mindspace IT Park, Hitech City, Hyderabad, 500081",
      phone: "9876543210",
    },
  ]);

  const [selected, setSelected] = useState<number | null>(1);

  const [newAddress, setNewAddress] = useState({
    type: "",
    address: "",
    phone: "",
  });

  const handleAddAddress = () => {
    if (!newAddress.type || !newAddress.address || !newAddress.phone) return;

    setAddresses([...addresses, { id: Date.now(), ...newAddress }]);

    setNewAddress({ type: "", address: "", phone: "" });
    setIsModalOpen(false);
  };

  const handleCheckout = async () => {
    const activeAddress = addresses.find((addr) => addr.id === selected);
    const shippingAddress = activeAddress
      ? {
          line1: activeAddress.address,
          city: "Hyderabad",
          state: "TS",
          postalCode: "500033",
          country: "IN",
          phone: activeAddress.phone,
          label: activeAddress.type,
        }
      : {
          line1: "123 Test St",
          city: "Testville",
          state: "CA",
          postalCode: "90210",
          country: "US",
        };

    try {
      const response = await commonService.createOrder({
        currency: "usd",
        successPath: "/order-status",
        cancelPath: "/checkout-cancel",
        items: [
          {
            productId: "sku-123",
            name: "Test Item",
            price: 19.99,
            quantity: 1,
          },
          {
            productId: "sku-987",
            name: "Static Sample Add-on",
            price: 9.99,
            quantity: 2,
          },
        ],
        shippingAddress,
      });

      const sessionUrl =
        response?.data?.sessionUrl ||
        response?.data?.url ||
        response?.data?.checkoutUrl;

      if (sessionUrl) {
        window.location.href = sessionUrl;
      } else {
        console.error("Checkout response missing redirect URL", response?.data);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-normal mb-8">Select Delivery Address</h1>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE — ADDRESS CARDS */}
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Saved Addresses</h2>
            <div
              className="border border-dashed border-gray-400 rounded-full p-2 px-4 text-center cursor-pointer hover:bg-gray-50"
              onClick={() => setIsModalOpen(true)}
            >
              <p className="text-md font-semibold text-gray-600">
                + Add New Address
              </p>
            </div>
          </div>

          <div className="grid  gap-4 md:grid-cols-2 sm:grid-cols-1">
            {addresses.map((item) => (
              <div
                key={item.id}
                className={`border rounded-xl p-5 cursor-pointer transition shadow-sm ${
                  selected === item.id
                    ? "border-orange-600 bg-orange-50"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => setSelected(item.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`py-1 ${
                      selected === item.id
                        ? "font-semibold"
                        : "bg-gray-100 px-3"
                    } rounded-md text-gray-900 text-sm`}
                  >
                    {item.type}
                  </span>
                  {selected === item.id && (
                    <IoIosCheckmark size={30} color="#EA580C" />
                  )}
                </div>

                <p className="text-gray-800">{item.address}</p>
                <p className="text-gray-500 text-sm mt-1">📞 {item.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Order Summary</h2>
          <div className="bg-white border border-gray-300 shadow rounded-xl p-6 h-fit sticky top-24">
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹458</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-3">
                <span>Grand Total</span>
                <span>₹498</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className={`mt-6 w-full py-3 rounded-full text-white font-semibold cursor-pointer transition ${
                selected
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
            {/* ADD NEW ADDRESS CARD */}
          </div>
        </div>
      </div>

      {/* ADD ADDRESS MODAL */}
      {
        <Modal
          size="lg"
          visible={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          title="Add New Address"
          footer={
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-sm cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              <button
                className="px-6 py-2 bg-orange-600 text-white rounded-sm cursor-pointer hover:bg-orange-700"
                onClick={handleAddAddress}
              >
                Save Address
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Address Type (Home / Office)"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={newAddress.type}
              onChange={(e) =>
                setNewAddress({ ...newAddress, type: e.target.value })
              }
            />

            <textarea
              placeholder="Full Address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md h-24"
              value={newAddress.address}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address: e.target.value })
              }
            ></textarea>

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={newAddress.phone}
              onChange={(e) =>
                setNewAddress({ ...newAddress, phone: e.target.value })
              }
            />
          </div>
        </Modal>
      }

      {/* Animation */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up .25s ease-out; }
      `}</style>
    </div>
  );
}
