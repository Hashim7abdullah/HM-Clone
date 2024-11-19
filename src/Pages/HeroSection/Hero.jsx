import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import HeroImg from "../../assets/HeroIMG.avif";
import Hero2 from "../../assets/Hero2IMG.avif";
import Hero3 from "../../assets/Hero3.avif";
import Hero3Sub from "../../assets/Hero3sub.avif";
import Hero4 from "../../assets/Hero4.avif"
import blacktexture from "../../assets/black.jpg";
import "aos/dist/aos.css";
import { IoAdd, IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
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
      {/* MENU SECTION */}
      <div className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),rgba(0,0,0,0))] before:backdrop-filter before:backdrop-blur-sm p-6 rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-black/50 rounded-xl"></div>

          <div className="relative">
            <button
              className="absolute lg:hidden right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 transition-all duration-300 ease-in-out hover:scale-110"
              onClick={() => setMenuVisible(!isMenuVisible)}
              aria-label={isMenuVisible ? "Close menu" : "Open menu"}
            >
              {isMenuVisible ? <IoClose /> : <IoAdd />}
            </button>
          </div>

          {/* Menu Items Section */}
          <div
            className={`
        transition-all duration-500 ease-in-out backdrop-blur-sm rounded-lg mt-4
        ${
          isMenuVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 lg:opacity-100 lg:translate-y-0 hidden lg:block"
        }
      `}
          >
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {["Ladies", "Men", "Kids", "Babies"].map((item, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div
                    className="relative bg-white/10 p-4 rounded-lg text-center font-medium text-white shadow-lg transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-md
              hover:bg-white/20 hover:shadow-xl hover:scale-105 hover:border-white/20"
                  >
                    {item}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
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
      {/* Best sports Section */}
      <div className="relative w-full max-w-[1000px] h-[20vh] md:h-[20vh] mx-auto my-8 sm:px-6 lg:px-8 group cursor-pointer">
        {/* Image Container */}
        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
          <img
            src={blacktexture}
            alt="Background texture"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          {/* Multiple Gradient Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center text-white px-6 md:px-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
            Sportswear: The ultimate bestsellers
          </h3>
          <p className="text-sm md:text-base lg:text-lg font-light opacity-90 transform transition-transform duration-300 delay-75 group-hover:translate-x-2">
            Explore collections
            <span className="block md:inline mt-1 md:mt-0 md:ml-1">
              under ₹1,999
            </span>
          </p>
        </div>

        {/* Arrow with animation */}
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white transition-all duration-300 group-hover:translate-x-2">
          <IoIosArrowForward className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

        <style jsx>{`
          @media (max-width: 768px) {
            .sports-banner {
              height: 40vh;
              margin-bottom: 2rem;
            }
          }
        `}</style>
      </div>
      {/* Hero4 */}
      <div className="relative w-full max-w-[1000px] mx-auto px-1 sm:px-6 lg:px-8">
        <img
          data-aos={!isMobile ? "fade-up" : null}
          src={Hero4}
          alt="Hero"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
        />
        <div className="absolute bottom-[2%] left-0 right-0 text-center text-white px-4 py-[1vh]">
          
          <h2 className="font-Outfit text-[4.5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-[800] tracking-tight leading-tight text-shadow-lg transition-all duration-300 mb-2">
            Sport luxe edit
          </h2>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
