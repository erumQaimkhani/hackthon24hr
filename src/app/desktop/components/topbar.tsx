
import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#23856D] text-white border-b py-2">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="text-sm text-gray-200 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="text-sm text-gray-200 flex items-center space-x-4">
          <span className="text-center justify-between mr-52">Follow us and get a chance to win 80% off</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;