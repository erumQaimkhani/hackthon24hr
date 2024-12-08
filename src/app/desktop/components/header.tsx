import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faInfoCircle, faBlog, faPhone, faSearch, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="text-black bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Bandage</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <span>Home</span>
          </a>
          <a href="/shop" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faStore} size="sm" />
            <span>Shop</span>
          </a>
          <a href="/about" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faInfoCircle} size="sm" />
            <span>About</span>
          </a>
          <a href="/blog" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faBlog} size="sm" />
            <span>Blog</span>
          </a>
          <a href="/contact" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faPhone} size="sm" />
            <span>Contact</span>
          </a>
        </div>

        {/* Search, Heart, Cart, Login/Register */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <a href="#" className=" p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#333" />
          </a>

          {/* Heart Icon */}
          <a href="#" className=" p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faHeart} size="lg" color="#333" />
          </a>

          {/* Cart Icon */}
          <a href="#" className=" p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FontAwesomeIcon icon={faStore} size="lg" color="#333" />
          </a>

          {/* User Icon (for Login/Register) */}
          <a href="/login" className="text-[#23A6F0] p-2 rounded-full hover:bg-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>

          {/* Register Link */}
          <a href="/register" className="hover:text-[#589bc2]">Register / Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

