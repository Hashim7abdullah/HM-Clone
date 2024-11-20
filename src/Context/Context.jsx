import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Context = createContext();

const ShopContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const currency = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

  const Button = () => {
    return (
      <button className="hidden lg:inline-block bg-white text-gray-800 px-3 py-1 text-[0.9vw] font-semibold tracking-wide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 active:scale-95">
        Shop now
      </button>
    );
  };

  const value = {
    currency,
    navigate,
    isMobile,
    setIsMobile,
    Button,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ShopContextProvider;
