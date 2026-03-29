import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Digitools</h2>
            <p className="max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h3 className="text-white  text-xl  mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl  mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Docs</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Social Link</h3>
            <div className="flex gap-3">
              <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-full" />
              <FaInstagram className="bg-white text-black w-8 h-8 p-2 rounded-full" />
              <FaXTwitter className="bg-white text-black w-8 h-8 p-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-zinc-800 pt-5 flex flex-col md:flex-row justify-between text-sm">
          <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <h5>
              Privacy Policy  &nbsp;&nbsp;  Terms of Service  &nbsp;&nbsp;  Cookies
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
