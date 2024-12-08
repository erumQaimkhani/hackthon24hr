import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-change-auto">
      {/* Navigation Links */}
      <div className="w-full flex justify-between items-center px-10 mb-6">
        <span className="text-xl font-bold text-[#252B42]">HOME</span>
        <span className="text-xl font-bold text-[#BDBDBD]">Shop</span>
      </div>

      {/* Sidebar Image */}
      <img
        src="desktop-product-cards-42.png"
        alt="sidebar"
        className="w-[1404px] h-[598px] mb-42"
      />
      {/* Sidebar Image */}
  
      <img
         className="w-{1404px} h-[598px] mb-42" />
      <img  src='product-description-1.png'
        alt="product"
        className="w-[1440px] h-[572px] mb-42"
      />
    </div>
  );
}

