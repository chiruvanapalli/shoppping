import React from "react";
import LOGO from "../../assets/images/png/brand-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <div
            className="text-center flex items-center"
            style={{ height: "70px" }}
          >
            <img src={LOGO} className="max-h-full" />{" "}
            <div className="font-extrabold text-4xl bg-gradient-to-r from-[#FFA726] to-[#EF5350] bg-clip-text text-transparent">
              SPICY
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-6">
            Building modern web experiences with clean UI and great UX.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: support@mylogo.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Hyderabad, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} MyLogo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
