import React from 'react';
import ImageSlider from '/src/components/imageSlider.jsx';

import Image1 from '/src/assets/image/placeholder1.jpg';
import Image2 from '/src/assets/image/placeholder2.jpg';
import Image3 from '/src/assets/image/placeholder3.png';

function Portfolio() {
  const images = [
    Image1,
    Image2,
    Image3,
  ];

  return (
    <div className="text-center w-[600px] h-[400px]">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default Portfolio;
