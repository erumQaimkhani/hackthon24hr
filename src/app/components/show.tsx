"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const ItemsSection = () => {
  // State for sorting/filtering
  const [filter, setFilter] = useState('views');

  // Mock data for images
  const products = [
    { id: 1, image: 'product1.png' },
    { id: 2, image: 'product2.png' },
    { id: 3, image: 'product3.png' },
    { id: 4, image: 'product4.png' },
    { id: 5, image: 'product5.png' },
    { id: 6, image: 'product6.png' },
    { id: 7, image: 'product7.png' },
    { id: 8, image: 'product8.png' },
    { id: 9, image: 'product9.png' },
    { id: 10, image: 'product10.png' },
    { id: 11, image: 'product11.png' },
    { id: 12, image: 'product12.png' }
  ];

  // Sorting products based on selected filter
  const sortedProducts = products.sort((a, b) => {
    // Sorting based on filter selected (views or popularity)
    if (filter === 'views') {
      return b.id - a.id; // Just an example, assuming we sort based on ID
    } else if (filter === 'popularity') {
      return b.id - a.id; // Just an example, assuming we sort based on ID
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-6">
        <a href="/" className="text-gray-600 hover:text-blue-500">HOME</a> {'>'}
        <a href="/shop" className="text-gray-600 hover:text-blue-500"> Shop</a> {'>'}
      </div>

      {/* Filter Options */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span>Show:</span>
          <button
            className={`px-4 py-2 border rounded ${filter === 'views' ? 'bg-[rgb(0,122,255)] text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setFilter('views')}
          >
            Views <img src="view-icon.png" alt="Views" className="inline w-5 ml-2" />
          </button>
          <button
            className={`px-4 py-2 border rounded ${filter === 'popularity' ? 'bg-[rgb(0,122,255)] text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setFilter('popularity')}
          >
            Popularity <span className="ml-2">&#8595;</span> {/* Down arrow */}
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            {/* Conditionally render the image */}
            {product.image ? (
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-48 object-cover mb-4"
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Large Image Section */}
      <div className="mt-12">
        {/* Conditionally render the large image */}
        {false ? null : (
          <img
            src="large-image.jpg"
            alt="Large Image"
            className="w-full h-[175px] object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ItemsSection;
