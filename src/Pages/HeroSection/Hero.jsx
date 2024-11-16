import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import HeroImg from "../../assets/HeroIMG.avif";
import Hero2 from "../../assets/Hero2IMG.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import EnhancedStarfield from "../../Components/GlitterEffect/GlitterEffect";

const Hero = () => {
  const { currency } = useContext(Context);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to handle AOS initialization and updates
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < 768;
      setIsMobile(isCurrentlyMobile);

      if (isCurrentlyMobile) {
        // Disable AOS and remove all AOS animations
        AOS.init({ disable: true });
        document.querySelectorAll("[data-aos]").forEach((element) => {
          element.removeAttribute("data-aos-animate");
          element.removeAttribute("data-aos-delay");
          element.style.transform = "none";
          element.style.opacity = "1";
        });
      } else {
        // Re-enable and initialize AOS for desktop
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
          offset: 100,
          disable: false,
        });
      }
      AOS.refresh();
    };

    // Initial setup
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-2 px-4">
      {/* Top Section */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <p
          data-aos={!isMobile ? "fade-up-right" : null}
          className="text-gray-800 font-medium hover:text-blue-500 p-2 block text-center lg:block lg:text-left text-xs sm:text-xs md:text-sm"
        >
          {`Free shipping above ${currency} 1999`}
        </p>
        <p
          data-aos={!isMobile ? "zoom-in-up" : null}
          className="text-gray-800 font-medium hover:text-blue-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm"
        >
          Free &amp; flexible 15 days return
        </p>
        <p
          data-aos={!isMobile ? "fade-up-left" : null}
          className="text-gray-800 font-medium hover:text-blue-500 p-2 hidden md:block text-sm sm:text-xs md:text-sm"
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
          <button className="hidden lg:inline-block bg-white text-gray-800 px-3 py-1 text-[0.9vw] font-semibold tracking-wide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 active:scale-95">
            Shop now
          </button>
        </div>
      </div>

      {/* Hero Image 2 */}
      <div className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8">
        <img
          data-aos={!isMobile ? "fade-up" : null}
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
          <button className="hidden lg:inline-block bg-white text-gray-800 px-3 py-1 text-[0.9vw] font-semibold tracking-wide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 active:scale-95">
            Shop now
          </button>
        </div>
      </div>
      <div className="relative w-full max-w-[1000px] mx-auto my-8 px-1 sm:px-6 lg:px-8">
        <EnhancedStarfield title="Get winter ready"  description="Find sweaters, jackets, hoodies and knits to keep you warm this winter." />
        
      </div>
    </div>
  );
};

export default Hero;
