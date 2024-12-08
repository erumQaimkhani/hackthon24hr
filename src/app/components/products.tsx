"use client";
import React, { useState } from "react";

const Product = () => {
  // State for sorting/filtering
  const [filter, setFilter] = useState("views");

  // Mock data for images
  const products = [
    { id: 1, image: "product1.png" },
    { id: 2, image: "product2.png" },
    { id: 3, image: "product3.png" },
    { id: 4, image: "product4.png" },
    { id: 5, image: "product5.png" },
    { id: 6, image: "product6.png" },
    { id: 7, image: "product7.png" },
    { id: 8, image: "product8.png" },
    { id: 9, image: "product9.png" },
    { id: 10, image: "product10.png" },
    { id: 11, image: "product11.png" },
    { id: 12, image: "product12.png" },
  ];

  // Sorting products based on selected filter
  const sortedProducts = products.sort((a, b) => {
    if (filter === "views") {
      return b.id - a.id;
    } else if (filter === "popularity") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-6">
        <a href="/" className="text-gray-600 hover:text-blue-500 mr-36">
          HOME
        </a>{" "}
        {">"}
        <a
          href="/shop"
          className="text-gray-600 hover:text-blue-100 display-flex -scroll-ml-6"
        >
          Shop
        </a>{" "}
        {">"}
      </div>

      {/* Filter Options */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span>Show:</span>
          <button
            className={`px-4 py-2 border rounded ${
              filter === "views"
                ? "bg-[rgb(0,122,255)] text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setFilter("views")}
          >
            Views <img src="/view-icon.png" alt="Views" className="inline w-5 ml-2" />
          </button>
          <button
            className={`px-4 py-2 border rounded ${
              filter === "popularity"
                ? "bg-[rgb(0,122,255)] text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setFilter("popularity")}
          >
            Popularity <span className="ml-2">&#8595;</span> {/* Down arrow */}
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            {product.image ? (
              <img
                src={`/images/${product.image}`} // Use correct path
                alt={`Product ${product.id}`}
                className="w-full h-48 object-cover mb-4"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;


