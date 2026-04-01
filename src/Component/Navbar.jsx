import React, { useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar px-6 md:px-20 lg:px-52 bg-white shadow-md fixed w-full z-50">
      
      {/* Navbar Start (Logo) */}
      <div className="navbar-start">
        <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-6 md:gap-8 text-base md:text-lg font-medium">
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      {/* Navbar End (Cart + Login + Button) */}
      <div className="navbar-end gap-4 md:gap-5">
        <GiShoppingCart className="text-xl cursor-pointer" />
        <h4 className="text-base md:text-lg font-medium cursor-pointer">Login</h4>
        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-4 md:px-6">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-2 text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger / Close Icon */}
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="menu menu-vertical p-4 space-y-2 text-base font-medium">
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
