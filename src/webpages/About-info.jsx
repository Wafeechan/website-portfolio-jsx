import React from "react";
import { useLocation } from "react-router-dom";
import TabImageSlider from "/src/components/tabImageSlider.jsx";
import { images, titles, details1, details2, details3, descriptions } from './data'

function AboutInfo() {
    const location = useLocation();
    const { index } = location.state || {};
    

    return (
        <div className="p-10 bg-blue-400 h-screen sm:h-[120vh] md:h-screen grid grid-rows-[1fr,4fr] gap-4 sm:gap-10 justify-center">
            <div className="text-white font-Inter text-3xl sm:text-5xl font-semibold flex mt-auto mx-auto">About</div>
            <div className="hidden md:block bg-white rounded-xl w-[1000px] h-[500px]">
                <TabImageSlider images={images} width="200px" height="250px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions} 
                initialIndex={index || 0}/>
            </div>

            {/* Tablet layout */}
            <div className="hidden sm:block md:hidden bg-white rounded-xl w-[600px] h-[700px] mb-10">
                <TabImageSlider images={images} width="200px" height="280px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions} 
                initialIndex={index || 0}/>
            </div>

            {/* Phone layout */}
            <div className="block sm:hidden bg-white rounded-xl w-[300px] h-[450px] mb-10">
                <TabImageSlider images={images} width="100px" height="150px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions} 
                initialIndex={index || 0}/>
            </div>

        </div>
    );
}

export default AboutInfo;
