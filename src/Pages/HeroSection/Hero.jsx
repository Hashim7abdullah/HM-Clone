import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import HeroImg from "../../assets/HeroIMG.avif";
import Hero2 from "../../assets/Hero2IMG.avif";
import Hero3 from "../../assets/Hero3.avif";
import Hero3Sub from "../../assets/Hero3sub.avif";
import "aos/dist/aos.css";
import EnhancedStarfield from "../../Components/GlitterEffect/GlitterEffect";
import { IoAdd, IoClose } from "react-icons/io5";
import Winter from "../../Components/BestSellers/Winter";

const Hero = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { currency, isMobile, Button } = useContext(Context);

  return (
    <div className="min-h-screen bg-gray-50 py-2 px-4">
      {/* Top Section */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <p
          data-aos={!isMobile ? "fade-up-right" : null}
          className="text-gray-800 font-medium hover:text-gray-500 p-2 block text-center lg:block lg:text-left text-xs sm:text-xs md:text-sm cursor-pointer"
        >
          {`Free shipping above ${currency} 1999`}
        </p>
        <p
          data-aos={!isMobile ? "zoom-in-up" : null}
          className="text-gray-800 font-medium hover:text-gray-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm cursor-pointer"
        >
          Free &amp; flexible 15 days return
        </p>
        <p
          data-aos={!isMobile ? "fade-up-left" : null}
          className="text-gray-800 font-medium hover:text-gray-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm cursor-pointer"
        >
          Estimated delivery time: 2-7 days
        </p>
      </div>
      {/* Hero Image 1 */}
      <div className="relative w-full max-w-[1000px] mx-auto px-1 sm:px-6 lg:px-8">
        <img
          data-aos={!isMobile ? "fade-up" : null}
          src={HeroImg}
          alt="Hero"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
        />
        <div className="absolute bottom-[2%] left-0 right-0 text-center text-white px-4 py-[1vh]">
          <p className="font-Outfit text-[3vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.2vw] font-[600] tracking-wider mb-[1vh] text-shadow-sm">
            New Arrivals
          </p>
          <h2 className="font-Outfit text-[4.5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-[800] tracking-tight leading-tight text-shadow-lg transition-all duration-300 mb-2">
            The black tie edit
          </h2>
          <Button />
        </div>
      </div>
      {/* Hero Image 2 */}
      <div
        data-aos={!isMobile ? "fade-up" : null}
        className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8"
      >
        <img
          src={Hero2}
          alt="Hero"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
        />
        <div className="absolute bottom-[5%] left-[5%] sm:bottom-[5%] sm:left-[5%] md:bottom-[8%] md:left-[6%] text-white space-y-2 text-left max-w-[60%] sm:max-w-[55%] md:max-w-[50%]">
          <h2 className="font-Outfit text-[3.5vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[3.5vw] font-[800] tracking-wide mb-1 text-shadow-sm">
            Sharp comfort
          </h2>
          <h3 className="font-Outfit text-[4.5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[1.5vw] font-[500] tracking-tight leading-tight text-shadow-lg transition-all duration-300 mb-2 max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
            Statement hoodies, sweatshirts, and puffers with a sporty allure.
          </h3>
          <Button />
        </div>
      </div>
      {/* Starfield and Menu Section */}
      <div className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8">
        {/* Starfield Section */}
        <div className="relative bg-gray-500">
          <EnhancedStarfield
            title="Get winter ready"
            description="Find sweaters, jackets, hoodies, and knits to keep you warm this winter."
          />

          {/* Toggle Menu Icon - Only visible below 1024px */}
          <button
            className="absolute lg:hidden right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 transition-all duration-300 ease-in-out"
            onClick={() => setMenuVisible(!isMenuVisible)}
            aria-label={isMenuVisible ? "Close menu" : "Open menu"}
          >
            {isMenuVisible ? <IoClose /> : <IoAdd />}
          </button>
        </div>

        {/* Menu Items Section */}
        <div
          className={`
          bg-black px-6 pb-6  transition-all duration-500 ease-in-out
          ${isMenuVisible ? "block" : "hidden lg:block"}
        `}
        >
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {["Ladies", "Men", "Kids", "Babies"].map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md text-center font-medium text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-gray-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero3 */}
      <div
        data-aos={!isMobile ? "fade-up" : null}
        className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8"
      >
        {/* Responsive Image */}
        <picture className="block w-full">
          <source srcSet={Hero3Sub} media="(max-width: 1023px)" />
          <img
            src={Hero3}
            alt="Hero"
            className="w-full h-auto max-h-[100vh] object-cover object-top"
          />
        </picture>

        {/* Text Content */}
        <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 text-black space-y-4 text-left max-w-[20%] sm:max-w-[60%] lg:max-w-[40%] lg:text-white">
          <h2
            className="font-Outfit font-[800] tracking-wide text-shadow-sm
      text-[5vw]          /* Mobile default */
      sm:text-[5vw]       /* Small screens */
      md:text-[4vw]       /* Medium screens */
      lg:text-[2.5vw]       /* Large screens */
      leading-tight
      transform-gpu
    "
          >
            Holiday 2024
          </h2>
          <Button />
        </div>
      </div>
      {/* Best winter Section */}
      <div className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8">
        <Winter />
      </div>
    </div>
  );
};

export default Hero;
