import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu, TfiMore } from "react-icons/tfi";
import { CiShoppingCart, CiUser, CiSearch, CiHeart } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/h-m.svg";
import { Context } from "../../Context/Context";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigate, isMobile } = useContext(Context);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="w-full h-20 lg:h-40 flex items-center justify-between px-5 relative"
    >
      {/* Mobile Layout (< 1024px) */}
      <motion.div variants={childVariants} className="flex items-center gap-4 lg:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          <TfiMenu size={24} />
        </button>
        <motion.img
          src={logo}
          alt="Logo"
          className="h-8 object-contain"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Desktop Layout (>= 1024px) */}
      <motion.div variants={childVariants} className="hidden lg:flex lg:flex-1">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          {["Sustainability", "Customer Service", "Newsletter"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="#" className="text-gray-800 font-medium hover:text-gray-500">
                {item}
              </Link>
            </motion.div>
          ))}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-800 hover:text-gray-500"
              onClick={toggleDropdown}
            >
              <TfiMore />
            </motion.button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-full left-0 bg-white shadow-lg py-2 rounded"
                >
                  {["Find a Store", "Download on iOS", "Download on Android"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                      className="px-4 py-2 cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed lg:hidden top-0 left-0 h-full w-4/5 bg-white z-50"
          >
            <div className="p-5 space-y-4">
              {["Sustainability", "Customer Service", "Newsletter", "Ladies", "Men", "Baby", "Kids", "Home", "Sale"].map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link to="#" className="block text-gray-800 font-medium hover:text-gray-500">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Middle Section - Only visible on desktop */}
      <motion.div
        variants={childVariants}
        className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-1"
      >
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="h-12 object-contain"
          />
        </motion.div>
        <div className="flex gap-5">
          {["Ladies", "Men", "Baby", "Kids", "Home", "Sale"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="#" className="text-gray-800 font-medium hover:text-gray-500">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={childVariants}
        className="flex flex-col items-end gap-2 lg:flex-1 lg:items-end text-gray-800 font-medium"
      >
        <div className="flex items-center gap-4">
          {[
            { icon: <CiUser className="text-2xl" />, text: "Sign In", link: "/sign-in" },
            { icon: <CiHeart className="text-2xl" />, text: "Favourites", link: "#" },
            { icon: <CiShoppingCart className="text-2xl" />, text: "Shopping Bag", link: "#" },
          ].map((item) => (
            <motion.div
              key={item.text}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.link} className="flex items-center gap-2 cursor-pointer">
                {item.icon}
                <span className="hidden lg:inline text-sm">{item.text}</span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden"
          >
            <Link to="#" className="flex items-center gap-2 cursor-pointer">
              <CiSearch className="text-2xl" />
            </Link>
          </motion.div>
        </div>
        {/* Search bar - only visible on desktop */}
        <motion.div
          variants={childVariants}
          className="hidden lg:flex relative items-center"
        >
          <CiSearch className="absolute left-2 text-xl" />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            type="text"
            placeholder="Search"
            className="pl-8 w-60 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;