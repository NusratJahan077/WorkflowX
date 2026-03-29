import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar  px-52 ">
    
      <div className="navbar-start">
        <h1 className="font-bold  text-4xl leading-normal bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 text-lg font-medium">
         <li><a href="">Products</a></li>
         <li><a href="">Features</a></li>
         <li><a href="">Pricing</a></li>
         <li><a href="">Testimonial</a></li>
         <li><a href="">FAQ</a></li>

        </ul>
      </div>

   
      <div className="navbar-end gap-5">
        <GiShoppingCart className='text-xl w-auto' />
        <h4 className="text-lg font-medium  cursor-pointer">Login</h4>
        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-full px-6">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default Navbar;
