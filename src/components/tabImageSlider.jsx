import React, { useState } from 'react';

function TabImageSlider({ images, width, height, titles, details1, details2, details3, descriptions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gap-4 w-full h-auto pt-10 px-4">
        <div className='grid grid-cols-[1fr,1fr,2fr]'>
            {/* Top Left Image */}
            <div className="relative flex overflow-hidden m-auto" style={{width, height}}>
                <img
                src={images[currentIndex]}
                alt={titles[currentIndex]}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Right Side Description */}
            <div className="grid grid-rows-2 gap-6 text-blue-950">
                <div className='text-start mt-auto font-Inter font-semibold text-5xl'>{titles[currentIndex]}</div>
                <div className='grid grid-row-5'>
                    <div>Position: {details1[currentIndex]}</div>
                    <div>Location: {details2[currentIndex]}</div>
                    <div>Period: {details3[currentIndex]}</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="justify-center py-10 px-6 text-sm">{descriptions[currentIndex]}</div>
        </div>
      

      {/* Bottom Navigation */}
      <div className="col-span-2 flex items-center justify-center mt-[70px]">
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
