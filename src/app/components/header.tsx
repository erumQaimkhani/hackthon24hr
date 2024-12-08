

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faInfoCircle, faBlog, faPhone, faSearch, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';  // Include user icon for login/register

const Header = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-#23A6F0">Bandage</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/shop" className="hover:text-gray-400">Shop</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/blog" className="hover:text-gray-400">Blog</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Search, Heart, Cart, Login/Register */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <a href="#" className="text-[#23A6F0] p-2 rounded-full hover:bg-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </a>

          {/* Heart Icon */}
          <a href="#" className="text-black p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </a>

          {/* Cart Icon */}
          <a href="#" className="text-black p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faStore} size="lg" />
          </a>

          {/* User Icon (for Login/Register) */}
          <a href="/login" className="text-black p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>

          {/* Register Link */}
          <a href="/register" className="hover:text-gray-400">Register/ Login</a>
        </div>
      </div>

      {/* Hero Image with Text Section */}
      <div className="relative">
        {/* Hero Image */}
        <img src="shop-hero-1-product-slide-1.png" alt="GIRL" className="w-full h-98" />

        {/* Text Section on top of Image */}
        <div className="absolute top-1/2 left-ceter justify-center transform -translate-y-1/2 text-white bg-opacity-70 p-52 ">
          <h2 className="text-3xl font-bold mb-10">SUMMER 2020</h2>
          <h3 className="text-xl font-semibold mb-10">NEW COLLECTION</h3>
          <p className="text-sm text-white mb-10">We know how large objects will act, but things on a small scale.</p>
          {/* Shop Now Button */}
          <a href="#" className="bg-[#2DC071] text-white px-6 py-2 rounded-sm text-lg hover:bg-gray-700 transition duration-300">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Header;



