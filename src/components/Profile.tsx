import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdLocationOn, MdModeEdit, MdAdd } from "react-icons/md";
import Modal from "./common/Modal"; // your existing global modal

export default function ProfilePage() {
  // Mock user
  const [user, setUser] = useState({
    name: "Hari Krishna",
    email: "hari@example.com",
    phone: "9876543210",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "Jubilee Hills, Hyderabad",
    },
    {
      id: 2,
      label: "Office",
      address: "Mindspace, Hitech City",
    },
  ]);

  // Modals
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addAddressOpen, setAddAddressOpen] = useState(false);

  // Edit profile form
  const [profileForm, setProfileForm] = useState(user);

  const saveProfile = () => {
    setUser(profileForm);
    setEditProfileOpen(false);
  };

  // Add new address
  const [newAddress, setNewAddress] = useState({ label: "", address: "" });

  const saveAddress = () => {
    if (!newAddress.label || !newAddress.address) return;
    setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
    setNewAddress({ label: "", address: "" });
    setAddAddressOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 pb-20">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex items-center gap-4">
            <FaUserCircle size={70} className="text-gray-300" />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>

          <button
            className="flex items-center gap-2 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 transition"
            onClick={() => setEditProfileOpen(true)}
          >
            <MdModeEdit /> Edit Profile
          </button>
        </div>

        {/* ADDRESSES CARD */}
        <div className="col-span-2 bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Saved Addresses</h3>
            <button
              onClick={() => setAddAddressOpen(true)}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
            >
              <MdAdd /> Add Address
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MdLocationOn className="text-orange-600" />
                  <span className="font-semibold">{addr.label}</span>
                </div>

                <p className="text-gray-600 text-sm">{addr.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDIT PROFILE MODAL */}
      <Modal
        visible={editProfileOpen}
        onHide={() => setEditProfileOpen(false)}
        title="Edit Profile"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
            value={profileForm.name}
            onChange={(e) =>
              setProfileForm({ ...profileForm, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
            value={profileForm.email}
            onChange={(e) =>
              setProfileForm({ ...profileForm, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-md"
            value={profileForm.phone}
            onChange={(e) =>
              setProfileForm({ ...profileForm, phone: e.target.value })
            }
          />

          <button
            onClick={saveProfile}
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Save
          </button>
        </div>
      </Modal>

      {/* ADD ADDRESS MODAL */}
      <Modal
        visible={addAddressOpen}
        onHide={() => setAddAddressOpen(false)}
        title="Add New Address"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Home / Office / Other"
            className="w-full border px-4 py-2 rounded-md"
            value={newAddress.label}
            onChange={(e) =>
              setNewAddress({ ...newAddress, label: e.target.value })
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

          <button
            onClick={saveAddress}
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Save Address
          </button>
        </div>
      </Modal>
    </div>
  );
}
