
import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaSearch,
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
            <FaSearch />
          </div>
        </div>
        <div className="text-sm text-gray-200 flex items-center space-x-4">
          <span className="mr-4">Follow us and get a chance to win 80% off</span>
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

const Header = () => {
  return (
    <div className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <span className="text-xl font-bold">Bandage</span>
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-400 font-bold">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/blog" className="hover:text-gray-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/pages" className="hover:text-gray-400">
            Pages
          </a>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="desktop-shop-cards-18.png"
        alt="Banner"
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <a
          href="/shop"
          className="bg-[#2DC071] px-6 py-2 rounded text-lg font-semibold hover:bg-green-800 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

const ItemsSection = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6 flex items-center">
        <a href="/" className="hover:text-gray-800">
          Home
        </a>
        <span className="mx-2">{'>'}</span>
        <span className="font-bold text-gray-800">Shop</span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Mock Product 1 */}
        <div className="border rounded-lg p-4">
          <img
            src="product1.png"
            alt="Product 1"
            className="w-full h-54 object-cover mb-4"
          />
          <p className="text-gray-600">$99.99</p>
          <a
            href="#"
            className="mt-4 inline-block bg-[#2DC071] px-4 py-2 rounded text-white hover:bg-green-800 transition"
          >
            Add to Cart
          </a>
        </div>

        {/* Mock Product 2 */}
        <div className="border rounded-lg p-4">
          <img
            src="product2.png"
            alt="Product 2"
            className="w-full h-54 object-cover mb-4"
          />
          <p className="text-gray-600">$79.99</p>
          <a
            href="#"
            className="mt-4 inline-block bg-[#2DC071] px-4 py-2 rounded text-white hover:bg-green-800 transition"
          >
            Add to Cart
          </a>
        </div>

        {/* Mock Product 3 */}
        <div className="border rounded-lg p-4">
          <img
            src="product3.png"
            alt="Product 3"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="text-gray-600">$149.99</p>
          <a
            href="#"
            className="mt-4 inline-block bg-[#2DC071] px-4 py-2 rounded text-white hover:bg-green-800 transition"
          >
            Add to Cart
          </a>
        </div>

        {/* Mock Product 4 */}
        <div className="border rounded-lg p-4">
          <img
            src="product4.png"
            alt="Product 4"
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">Product 4</h3>
          <p className="text-gray-600">$59.99</p>
          <a
            href="#"
            className="mt-4 inline-block bg-[#2DC071] px-4 py-2 rounded text-white hover:bg-green-800 transition"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroSection />
      <ItemsSection />
    </div>
  );
};

export default Shop;
