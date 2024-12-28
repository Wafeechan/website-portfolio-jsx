import React, {useState} from 'react';
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <body className="bg-blue-400 h-screen">
      <div className="pt-[120px] md:pt-[150px] items-center relative">
        {/* Title */}
        <div className="font-Inter text-4xl md:text-5xl text-center mb-[20px] text-white font-bold">Portfolio</div>

        <div className=' mx-auto bg-blue-600 md:w-[850px] md:h-[30px] w-[520px] h-[20px] z-20 relative'/>  

        {/* Image Slider with Background */}
        <div className="relative w-full flex items-center justify-center">

            {/* Rectangle Background */}
            <div className="absolute top-[0px] bg-white md:w-[830px] md:h-[500px] w-[510px] h-[320px] shadow-lg z-0"></div>
          
            {/* Image Slider */}
            <div className="relative mt-[10px] md:w-[800px] md:h-[450px] w-[500px] h-[280px] object-contain z-10">
                <div className='absolute rounded-full w-[25px] h-[25px] bg-white z-30 text-xl shadow-md flex items-center justify-center top-[15px] right-[30px]'>+</div>
                <ImageSlider images={images} width="100%" height="100%" onSlideChange={(index) => setCurrentImageIndex(index)}/>
                <div className='absolute md:w-[150px] md:h-[40px] w-[100px] h-[30px] text-center z-30 bg-teal-400 right-[30px] bottom-[-20px] shadow-lg flex items-center justify-center md:text-md text-sm'>{`${currentImageIndex + 1}/${images.length}`}</div>
            </div>

          
        </div>
      </div>
    </body>
  );
}

export default Portfolio;
