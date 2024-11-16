import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu, TfiMore, TfiHeart } from "react-icons/tfi";
import { CiShoppingCart, CiUser,CiSearch } from "react-icons/ci";

import logo from "../../assets/h-m.svg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="w-full h-40 lg:flex   justify-between text-sm  items-center px-5 relative">
      {/* Burger Menu for small screens */}
      <div
        className="block lg:hidden cursor-pointer absolute top-5 left-5 z-10"
        onClick={toggleMenu}
      >
        <TfiMenu size={24} />
      </div>

      {/* Left Section */}
      <div
        className={`flex items-center gap-5 absolute lg:static bg-white lg:bg-transparent w-full h-full lg:w-auto top-0 lg:top-0 left-0 shadow-md lg:shadow-none px-5 py-3 lg:px-0 transition-all duration-300 ${
          menuOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
          Sustainability
        </Link>
        <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
          Customer Service
        </Link>
        <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
          Newsletter
        </Link>
        <div className="relative">
          <div
            className="cursor-pointer text-gray-800 hover:text-gray-600"
            onClick={toggleDropdown}
          >
            <TfiMore />
          </div>
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

      {/* Middle Section */}
      <div className={`flex flex-col items-center ${menuOpen ? "block" : "hidden lg:flex"}`} >
        <div className="mt-2">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>
        <div className="flex gap-5 mt-2">
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Ladies
          </Link>
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Men
          </Link>
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Baby
          </Link>
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Kids
          </Link>
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Home
          </Link>
          <Link to="#" className="text-gray-800 font-medium hover:text-gray-600">
            Sale
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:items-center gap-2">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <CiUser className="text-xl" />
            <p className="text-sm hidden md:block">Sign In</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <TfiHeart className="text-xl" />
            <p className="text-sm hidden md:block">Favourites</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <CiShoppingCart className="text-xl" />
            <p className="text-sm hidden md:block">Shopping Bag</p>
          </div>
        </div>
        <div className="relative sm:flex  lg:flex items-center">
          <CiSearch className="absolute left-2 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 w-60 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
