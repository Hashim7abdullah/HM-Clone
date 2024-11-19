import React from 'react';
import { ArrowRight, Facebook, Instagram, Youtube, Music2, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 px-6 py-12 mt-2">
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Shop Column */}
          <div className="hidden md:block">
            <h3 className="font-medium text-base tracking-wider text-gray-800 mb-6 uppercase">Shop</h3>
            <ul className="space-y-3.5">
              {['Ladies', 'Men', 'Baby', 'Kids', 'Home', 'Magazine'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Info Column */}
          <div className="hidden md:block">
            <h3 className="font-medium text-base tracking-wider text-gray-800 mb-6 uppercase">Corporate Info</h3>
            <ul className="space-y-3.5">
              {[
                'Career at CartHex',
                'About CartHex group',
                'Sustainability CartHex group',
                'Press',
                'Investor Relations',
                'Corporate Governance'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="hidden md:block">
            <h3 className="font-medium text-base tracking-wider text-gray-800 mb-6 uppercase">Help</h3>
            <ul className="space-y-3.5">
              {[
                'Customer services',
                'My Carthex',
                'Find a store',
                'Legal & Privacy',
                'Contact',
                'Report a scam',
                'Cookie Notice',
                'Cookie Settings'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-medium text-base tracking-wider text-gray-800 mb-6 uppercase">Sign Up</h3>
            <p className="mb-6 text-gray-600 text-sm leading-relaxed">
              Sign up and be the first to know about exclusive offers, latest fashion news & style tips
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 group">
              <span className="text-sm border-b border-gray-800 group-hover:border-blue-600">Read more</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Mobile View Headings */}
        <div className="md:hidden space-y-6 mb-8">
          <h3 className="font-medium text-base tracking-wider text-gray-800 uppercase">Shop</h3>
          <h3 className="font-medium text-base tracking-wider text-gray-800 uppercase">Corporate Info</h3>
          <h3 className="font-medium text-base tracking-wider text-gray-800 uppercase">Help</h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mt-16 mb-12">
          <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
          <Music2 className="w-6 h-6 text-gray-600 hover:text-green-600 transition-colors duration-200 cursor-pointer" />
          <Music className="w-6 h-6 text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer" />
          <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer" />
          <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer" />
        </div>

        {/* Copyright Text */}
        <p className="text-center text-sm text-gray-500 mb-8 tracking-wide">
          The Content of this site is copyright-protected and is the property of CarHex
        </p>

        {/* Logo Placeholder */}
        <div className="flex justify-center mb-6">
          {/* Add your logo here */}
          <div className="w-32 h-12 bg-slate-100 flex items-center justify-center rounded-lg shadow-sm">
            Logo
          </div>
        </div>

        {/* Country */}
        <h3 className="text-center font-medium tracking-wider text-gray-800">INDIA</h3>
      </div>
    </footer>
  );
};

export default Footer;