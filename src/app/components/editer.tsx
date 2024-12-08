import React from 'react';

const Editor = () => {
  return (
    <div className="bg-white py-12">
      {/* Editor's Pick Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-black">EDITOR'S PICK</h2>
        <p className="text-xl text-black mt-4">Problems trying to resolve the conflict between image and text here.</p>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* MEN Category */}
        <div className="relative">
          <img src="col-md-2.png" alt="MEN" className="w-full h-auto rounded-lg" style={{ height: '770px', width: '100%' }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-semibold">
            
          </div>
        </div>

        {/* WOMEN Category */}
        <div className="relative">
          <img src="card-item.png" alt="WOMEN" className="w-full h-auto rounded-lg" style={{ height: '770px', width: '100%' }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-semibold">
            
          </div>
        </div>

        {/* ACCESSORIES Category */}
        <div className="relative">
          <img src="col-md-3.png" alt="ACCESSORIES" className="w-full h-auto rounded-lg" style={{ height: '770px', width: '100%' }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-semibold">
            
          </div>
        </div>

        
        </div>
      </div>
    
  );
};

export default Editor;


