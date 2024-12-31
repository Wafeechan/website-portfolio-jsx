import React, { useState } from 'react';

function TabImageSlider({ images, titles, descriptions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full h-auto">
      {/* Top Left Image */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={titles[currentIndex]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Description */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{titles[currentIndex]}</h2>
        <p className="text-gray-700">{descriptions[currentIndex]}</p>
      </div>

      {/* Bottom Navigation */}
      <div className="col-span-2 flex items-center justify-start mt-4">
        <button
          onClick={handlePrev}
          className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-sm rounded-l-md"
        >
          ❮
        </button>

        <div className="flex space-x-2 mx-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-sm rounded-r-md"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default TabImageSlider;
