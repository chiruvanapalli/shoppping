import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Hari Krishna",
    email: "hari@example.com",
    phone: "9876543210",
  });

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState(user);

  const handleSave = () => {
    setUser(form);
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      {/* TITLE */}
      <h1 className="text-3xl font-semibold mb-8">My Profile</h1>

      {/* PROFILE HEADER */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-5">
        <FaUserCircle className="text-gray-300" size={90} />

        <div className="flex-1">
          {!editing ? (
            <>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 mt-1">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>

              <button
                onClick={() => setEditing(true)}
                className="mt-4 px-5 py-2 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <>
              {/* Edit Mode */}
              <div className="space-y-3">
                <input
                  type="text"
                  value={form.name}
                  placeholder="Full Name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border px-4 py-2 rounded-md"
                />

                <input
                  type="email"
                  value={form.email}
                  placeholder="Email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border px-4 py-2 rounded-md"
                />

                <input
                  type="text"
                  value={form.phone}
                  placeholder="Phone Number"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  className="px-5 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="px-5 py-2 border rounded-full font-semibold"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* SECTIONS */}
      <div className="mt-10 space-y-6">
        {/* MANAGE ADDRESSES */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">My Addresses</h3>
          <p className="text-gray-600 mb-3">
            View and manage your saved addresses.
          </p>

          <button className="px-4 py-2 border rounded-full hover:bg-gray-50">
            Manage Addresses
          </button>
        </div>

        {/* PAYMENT METHODS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
          <p className="text-gray-600 mb-3">
            Saved UPI, cards, and payment preferences.
          </p>

          <button className="px-4 py-2 border rounded-full hover:bg-gray-50">
            Manage Payments
          </button>
        </div>

        {/* SETTINGS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>

          <ul className="space-y-3 text-gray-700">
            <li className="cursor-pointer hover:text-orange-600">
              Change Password
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              Notifications
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              Privacy Settings
            </li>
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <p className="text-lg font-medium">Logout</p>

          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            <IoLogOutOutline /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
