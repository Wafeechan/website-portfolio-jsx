import React, { useState, useEffect } from 'react';

function TabImageSlider({ images, width, height, titles, details1, details2, details3, descriptions, initialIndex }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const categories = [
    { range: [0,2], label: 'Education' },
    { range: [3,5], label: 'Experience' },
    { range: [6,6], label: 'Achievement' },
    { range: [7,11], label: 'Skills' },
  ]

  const currentCategory = categories.find(({ range }) =>
    currentIndex >= range[0] && currentIndex <= range[1]
  )?.label;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gap-4 w-full h-auto pt-4 px-4">
        <div className="text-center text-2xl font-Inter font-bold underline pb-2">{currentCategory}</div>
        <div className='hidden md:grid grid-cols-[1fr,1fr,2fr]'>
            {/* Top Left Image */}
            <div className="relative flex overflow-hidden mx-auto my-8" style={{width, height}}>
                <img
                src={images[currentIndex]}
                alt={titles[currentIndex]}
                className="w-full h-full object-contain"
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
      <div className="hidden col-span-2 md:flex items-center justify-center mt-[70px]">
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

        {/* -----------------------------------------For tablet layout---------------------------- */}
        <div className='hidden md:hidden sm:grid grid-rows-3'>
        <div className='grid grid-cols-2'>
            {/* Top Left Image */}
            <div className="relative flex overflow-hidden mx-auto" style={{width, height}}>
                <img
                src={images[currentIndex]}
                alt={titles[currentIndex]}
                className="w-full h-full object-contain"
                />
            </div>

            {/* Right Side Description */}
            <div className="grid grid-rows-2 gap-4 text-blue-950">
                <div className='text-start mt-auto font-Inter font-semibold text-5xl'>{titles[currentIndex]}</div>
                <div className='grid grid-row-5 text-sm'>
                    <div>Position: {details1[currentIndex]}</div>
                    <div>Location: {details2[currentIndex]}</div>
                    <div>Period: {details3[currentIndex]}</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="justify-start pb-auto pt-6 px-2 text-base font-medium">{descriptions[currentIndex]}</div>

        {/* Bottom Navigation */}
        <div className="flex items-start justify-center mt-8">
          <button
            onClick={handlePrev}
            className="px-1 py-[1px] bg-gray-300 hover:bg-gray-400 text-sm rounded-l-md"
          >
            ❮
          </button>

          <div className="flex space-x-2 mx-3 my-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-1 py-[1px] bg-gray-300 hover:bg-gray-400 text-sm rounded-r-md"
          >
            ❯
          </button>
        </div>
      </div>

        {/* -----------------------------------------For phone layout---------------------------- */}
      <div className='sm:hidden grid grid-rows-3'>
        <div className='grid grid-cols-2'>
            {/* Top Left Image */}
            <div className="relative flex overflow-hidden m-auto" style={{width, height}}>
                <img
                src={images[currentIndex]}
                alt={titles[currentIndex]}
                className="w-full h-full object-contain"
                />
            </div>

            {/* Right Side Description */}
            <div className="grid grid-rows-2 gap-4 text-blue-950">
                <div className='text-start mt-auto font-Inter font-semibold text-md'>{titles[currentIndex]}</div>
                <div className='grid grid-row-5 text-[9px]'>
                    <div>Position: {details1[currentIndex]}</div>
                    <div>Location: {details2[currentIndex]}</div>
                    <div>Period: {details3[currentIndex]}</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="justify-start pt-4 px-2 text-[8px] font-medium">{descriptions[currentIndex]}</div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="px-1 py-[1px] bg-gray-300 hover:bg-gray-400 text-sm rounded-l-md"
          >
            ❮
          </button>

          <div className="flex space-x-2 mx-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-1 py-[1px] bg-gray-300 hover:bg-gray-400 text-sm rounded-r-md"
          >
            ❯
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default TabImageSlider;
