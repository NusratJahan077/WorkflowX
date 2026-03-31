import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import BannerImage from "../assets/banner.png"
import Group from "../assets/group.png"
const Banner = () => {
  return (
    <>
       
         <div className="relative min-h-162.5 flex items-center overflow-hidden">
          <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

            {/* Left Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-indigo-100 border border-b-blue-500 text-blue-700 text-sm font-medium px-5 py-2 rounded-full">
              <img src={Group}/>New: AI-Powered Tools Available
              </div>
    
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
               Supercharge Your <br />
                Digital Workflow
              </h1>
    
              <p className="text-lg text-zinc-700 max-w-lg opacity-70">
               Access premium AI tools, design assets, templates, and productivity <br />
              software—all in one place. Start creating faster today <br />
              Explore Products
              </p>
    
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
                   hover:bg-gray-500 
                   px-8 py-4 rounded-2xl 
                   font-semibold text-lg 
                   shadow-xl shadow-blue-500 
                   flex items-center gap-3 group 
                   text-amber-50">
                 Get Unlimited Access
                </button>
                
                <button className="
                 hover:bg-gray-500  
                 px-8 py-4 
                 rounded-2xl 
                 font-semibold text-lg 
                 shadow-xl 
                 flex items-center gap-3 group 
                 text-indigo-600 
                 border border-indigo-600">
                 <CiPlay1 /> Watch Demo
                 </button>

                </div>
        
        </div>
     
        
         <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
                  src={BannerImage}
                  alt="AI Models Banner" />
              </div>

            </div>
          </div>
        </div>
     
       
       </>
  );
};

export default Banner;