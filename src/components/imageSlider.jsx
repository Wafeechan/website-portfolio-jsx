import React, { useState } from 'react';

function ImageSlider({ images, width, height, onSlideChange, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (event) => {
    event.stopPropagation(); //Prevents modal from opening
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handlePrev = (event) => {
    event.stopPropagation(); //Prevents modal from opening
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handleDotClick = (event, index) => {
    event.stopPropagation();
    setCurrentIndex(index);
  }

  return (
    <div 
        className="relative object-contain my-auto overflow-hidden bg-gray-200 cursor-pointer"
        style={{width, height}}
        onClick={() => onImageClick(currentIndex)} //Opens modal on image click
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 sm:left-4 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full sm:text-base text-xs"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 sm:right-4 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full sm:text-base text-xs"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={(event) => handleDotClick(event, idx)} //Prevents modal from opening
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
