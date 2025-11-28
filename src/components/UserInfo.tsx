import { AiOutlineProduct } from "react-icons/ai";
import { MdEmail, MdLogout, MdPhoneIphone } from "react-icons/md";
import { PiUserCircleDashedDuotone } from "react-icons/pi";
import { RiHeartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface UserSidebarContentProps {
  user: {
    name?: string;
    email?: string;
    phone?: string;
    addresses?: { id: number; label: string; full: string }[];
  };
  closeSidebar?: any;
  onLogout: () => void;
}

export default function UserInfo({
  user,
  onLogout,
  closeSidebar,
}: UserSidebarContentProps) {
  const navigate = useNavigate();
  return (
    <div className="p-6 pt-0 space-y-6">
      {/* USER PROFILE */}
      <div className="flex items-center gap-4">
        <PiUserCircleDashedDuotone className="text-gray-300" size={60} />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-6 space-y-3">
        {/* PHONE */}
        <div className="flex items-center gap-3 text-gray-700">
          <MdPhoneIphone size={22} className="text-orange-600" />
          <span>{user.phone}</span>
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-3 text-gray-700">
          <MdEmail size={22} className="text-orange-600" />
          <span>{user.email}</span>
        </div>
      </div>

      {/* ADDRESSES */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Saved Addresses</h3>

        <div className="space-y-3">
          {/* {user?.addresses?.map((addr) => (
           
          ))} */}
          <div
            className="border border-gray-200 rounded-lg p-3 cursor-pointer flex items-start gap-3 hover:bg-gray-50 transition"
            onClick={() => {
              navigate("/wishlist");
              closeSidebar(false);
            }}
          >
            {/* <MdLocationOn className="text-orange-600 mt-1" size={22} /> */}
            <RiHeartLine size={22} className="text-orange-600" />

            <div>
              <p className="font-semibold">Wishlist</p>
              <p className="text-gray-600 text-sm">Items : 4</p>
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-3 cursor-pointer flex items-start gap-3 hover:bg-gray-50 transition"
            onClick={() => {
              navigate("/orders");
              closeSidebar(false);
            }}
          >
            {/* <MdLocationOn className="text-orange-600 mt-1" size={22} /> */}
            <AiOutlineProduct size={22} className="text-orange-600" />

            <div>
              <p className="font-semibold">Orders</p>
              <p className="text-gray-600 text-sm">Order details are here</p>
            </div>
          </div>
        </div>
      </div>

      {/* LOGOUT */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-full cursor-pointer font-semibold hover:bg-red-600 transition"
      >
        <MdLogout size={20} /> Logout
      </button>
    </div>
  );
}
