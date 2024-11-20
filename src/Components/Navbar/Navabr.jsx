import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu, TfiMore } from "react-icons/tfi";
import { CiShoppingCart, CiUser, CiSearch, CiHeart } from "react-icons/ci";
import logo from "../../assets/h-m.svg";
import LoginForm from "../../Pages/Login/LoginForm";
import { Context } from "../../Context/Context";
import "aos/dist/aos.css";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { navigate , isMobile } = useContext(Context);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full h-20 lg:h-40 flex items-center justify-between px-5 relative">
      {/* Mobile Layout (< 1024px) */}
      <div className="flex items-center gap-4 lg:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          <TfiMenu size={24} />
        </button>
        <img src={logo} alt="Logo" className="h-8 object-contain" />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex lg:flex-1">
        {/* Left Section */}
        <div data-aos="fade-right" className="flex items-center gap-5">
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Sustainability
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Customer Service
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Newsletter
          </Link>
          <div className="relative">
            <button
              className="text-gray-800 hover:text-gray-500"
              onClick={toggleDropdown}
            >
              <TfiMore />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2 rounded">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Find a Store
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download on iOS
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download on Android
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed lg:hidden top-0 left-0 h-full w-4/5 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4">
          <Link
            to="#"
            className="block text-gray-800 font-medium hover:text-gray-500"
          >
            Sustainability
          </Link>
          <Link
            to="#"
            className="block text-gray-800 font-medium hover:text-gray-500"
          >
            Customer Service
          </Link>
          <Link
            to="#"
            className="block text-gray-800 font-medium hover:text-gray-500"
          >
            Newsletter
          </Link>
          <div className="border-t pt-4">
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Ladies
            </Link>
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Men
            </Link>
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Baby
            </Link>
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Kids
            </Link>
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              to="#"
              className="block text-gray-800 font-medium hover:text-gray-500"
            >
              Sale
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Section - Only visible on desktop */}
      <div data-aos="zoom-in" className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-1">
        <div data-aos="zoom-in" className="mb-4">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>
        <div className="flex gap-5">
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Ladies
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Baby
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Kids
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-medium hover:text-gray-500"
          >
            Sale
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div data-aos="fade-left" className="flex flex-col items-end gap-2 lg:flex-1 lg:items-end text-gray-800 font-medium">
        <div className="flex items-center gap-4 ">
          <Link to="/sign-in" className="flex items-center gap-2 cursor-pointer">
            <CiUser className="text-2xl" />
            <span className="hidden lg:inline text-sm">Sign In</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 cursor-pointer">
            <CiHeart className="text-2xl" />
            <span className="hidden lg:inline text-sm">Favourites</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 cursor-pointer">
            <CiShoppingCart className="text-2xl" />
            <span className="hidden lg:inline text-sm">Shopping Bag</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 lg:hidden cursor-pointer">
            <CiSearch className="text-2xl" />
          </Link>
        </div>
        {/* Search bar - only visible on desktop */}
        <div className="hidden lg:flex relative items-center">
          <CiSearch className="absolute left-2 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 w-60 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
