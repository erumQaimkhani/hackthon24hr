"use client";
import React, { useState } from "react";
import { FaTh, FaBars, FaEllipsisV } from "react-icons/fa";

const ResultsList = () => {
  // State for toggling views and options
  const [isGridView, setIsGridView] = useState(true);  // Grid/List toggle
  const [isFilterOpen, setIsFilterOpen] = useState(false);  // Filter dropdown
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // Options dropdown
  const [isResultsVisible, setIsResultsVisible] = useState(true); // Toggle results visibility

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header: Showing Results, Views, Filters */}
      <div className="flex items-center justify-between mb-6">
        {/* Showing Results */}
        <h2
          className="text-xl font-semibold cursor-pointer"
          onClick={() => setIsResultsVisible((prev) => !prev)} // Toggle results section visibility
        >
          {isResultsVisible ? "Hide all results" : "Showing all results"}
        </h2>

        {/* View Icons, Popularity Text, and Filter Options */}
        <div className="font-bold flex items-center space-x-4">
          {/* View Icons: Grid and List */}
          <button
            className="p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => setIsGridView(true)} // Set grid view
          >
            <FaTh size={20} />
          </button>
          <button
            className="p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => setIsGridView(false)} // Set list view
          >
            <FaBars size={20} />
          </button>

          {/* Popularity Text */}
          <span className="text-sm font-medium">Popularity ↓</span>

          {/* Filter Button */}
          <button
            className="p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => setIsFilterOpen((prev) => !prev)}  // Toggle filter visibility
          >
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Filter Dropdown */}
      {isFilterOpen && (
        <div className="absolute bg-white shadow-lg rounded p-4 mt-2 w-48">
          <p className="text-lg font-medium">Filter Options</p>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}

      {/* List of Entries - Visible only when isResultsVisible is true */}
      {isResultsVisible && (
        <div className="space-y-4">
          {[...Array(12).keys()].map((entry) => (
            <div
              key={entry}
              className="flex items-center justify-between p-4 border rounded shadow-sm hover:bg-gray-50 transition"
            >
              {/* List Entry */}
              <div>
                <p className="text-lg font-medium">List Entry # {entry + 1}</p>
              </div>

              {/* Options Button (3 dots) */}
              <button
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                onClick={() => setIsOptionsOpen((prev) => !prev)}  // Toggle options menu
              >
                <FaEllipsisV size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Options Dropdown */}
      {isOptionsOpen && (
        <div className="absolute bg-white shadow-lg rounded p-4 mt-2 w-48">
          <ul>
            <li>Option A</li>
            <li>Option B</li>
            <li>Option C</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
