import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import HeroImg from "../../assets/HeroIMG.avif";

const LandingPage = () => {
  const { currency } = useContext(Context);
  return (
    <div className="min-h-screen bg-gray-50 py-2 px-4">
      <div className="flex justify-center items-center gap-6 mb-4">
        <p className="text-gray-800 font-medium hover:text-blue-500 p-2 block text-center lg:block lg:text-left text-xs sm:text-xs md:text-sm">
          {`Free shipping above ${currency} 1999`}
        </p>
        <p className="text-gray-800 font-medium hover:text-blue-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm">
          Free &amp; flexible 15 days return
        </p>
        <p className="text-gray-800 font-medium hover:text-blue-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm">
          Estimated delivery time: 2-7 days
        </p>
      </div>
      <div className="relative w-full max-w-[1000px] mx-auto px-1 sm:px-6 lg:px-8">
        <img
          src={HeroImg}
          alt="Hero"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
        />
        <div className="absolute bottom-[2%] left-0 right-0 text-center text-white px-4 py-[1vh]">
          {/* Updated p tag */}
          <p className="font-Outfit text-[1.8vw] sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw] font-semibold font-[600] 
             tracking-wider mb-[1vh] text-shadow-sm">
            New Arrivals
          </p>
          {/* Updated h2 tag */}
          <h2 className="font-Outfit text-[4.5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold font-[800] 
             tracking-tight leading-tight text-shadow-lg
             transition-all duration-300 mb-2">
            The black tie edit
          </h2>
          <button 
            className="hidden lg:inline-block bg-white text-gray-800 px-3 py-1 
                     text-[1vw] font-bold tracking-wide
                     transform transition-transform duration-300 ease-in-out
                     hover:scale-105 hover:bg-gray-100
                     focus:outline-none focus:ring-2 focus:ring-gray-400
                     active:scale-95">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
