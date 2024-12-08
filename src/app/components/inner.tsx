import React from 'react';
import Image from 'next/image';
export default function Inner() {
  return (
    <div>
      {/* Image 1 */}
      <img
        src="carousel-inner.png"
        alt="carousel inner"
        className="w-full h-auto rounded-lg"
      />

      {/* Image 2 */}
      <img
        src="container-fluid.png"
        alt="container fluid"
        className="w-full h-auto rounded-lg"
      />

      {/* Image 3 */}
      <img
        src="desktop-blog-3.png"
        alt="desktop blog"
        className="w-full h-auto rounded-lg"
      />
    </div>
 
  );
}
