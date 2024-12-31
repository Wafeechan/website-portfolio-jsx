import React, { useState } from "react";

function tabImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-wrap w-full h-[500px] border shadow-lg">
      {/* Top-Left Image Section */}
      <div className="w-1/2 h-1/2 flex justify-center items-center border">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Bottom-Left Controls Section */}
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center border">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            ❮
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Right Side Description Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-start p-6 border">
        <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
        <p className="mt-2 text-gray-600">{slides[currentIndex].description}</p>
      </div>
    </div>
  );
}

export default tabImageSlider;
