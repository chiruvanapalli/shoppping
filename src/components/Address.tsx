import React, { useState } from "react";

export default function AddressPage() {
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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddAddress = () => {
    if (!newAddress.type || !newAddress.address || !newAddress.phone) return;

    setAddresses([...addresses, { id: Date.now(), ...newAddress }]);

    setNewAddress({ type: "", address: "", phone: "" });
    setModalOpen(false);
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
              onClick={() => setModalOpen(true)}
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
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm">
                    {item.type}
                  </span>
                  {selected === item.id && (
                    <span className="text-orange-600 text-sm font-semibold">
                      Selected
                    </span>
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
          <div className="bg-white border shadow rounded-xl p-6 h-fit sticky top-24">
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
              className={`mt-6 w-full py-3 rounded-full text-white font-semibold transition ${
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Address</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Address Type (Home / Office)"
                className="w-full border px-4 py-2 rounded-md"
                value={newAddress.type}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, type: e.target.value })
                }
              />

              <textarea
                placeholder="Full Address"
                className="w-full border px-4 py-2 rounded-md h-24"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
              ></textarea>

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-md"
                value={newAddress.phone}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, phone: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>

              <button
                className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
                onClick={handleAddAddress}
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}

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
