import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E8F3E8] text-gray-800 py-8" id="faq">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-bold text-green-700 mb-4">Get in touch</h4>
          <p>support@amrutam.co.in</p>
          <p>Amrutam Pharmaceuticals Pvt Ltd.,</p>
          <p>Chitragupt ganj, Nai Sadak, Lashkar,</p>
          <p>Gwalior - 474001</p>
          <p className="mt-2">+91 9713171999</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
            <FaInstagram className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
            <FaYoutube className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
            <FaTwitter className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
            <FaLinkedinIn className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
            <FaPinterestP className="text-green-700 text-2xl cursor-pointer hover:text-green-500" />
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h4 className="text-lg font-bold text-green-700 mb-4">Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Privacy Policy for Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Shipping and Returns Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                International Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                For Businesses, Hotels and Resorts
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-bold text-green-700 mb-4">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;