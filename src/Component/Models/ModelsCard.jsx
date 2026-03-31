
import React, { useState } from 'react';
import { FcCheckmark } from "react-icons/fc";


const ModelsCard = ({model}) => {
   const[isBuy ,setIsBuy] =useState(false)
  const handleBuy =()=>{
   setIsBuy(true)
   }
  return (
    
              <div className="border rounded-lg p-6 shadow-md bg-white relative">
    
                {/* Tag */}
                <div
                  className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold
                    ${model.tag === "Best Seller" ? "bg-yellow-100 text-yellow-700" : ""}
                    ${model.tag === "Popular" ? "bg-indigo-100 text-indigo-600" : ""}
                    ${model.tag === "New" ? "bg-green-100 text-green-700" : ""}`}
                >
                  {model.tag}
                </div>
    
               {/* icon */}
                <div className='border rounded-full w-[60px] h-[60px] flex items-center justify-center mb-4'>
                  <img src={model.icon} alt="" />
                </div>
    
                {/* Title */}
                <h2 className='text-xl md:text-2xl font-bold mb-2'>
                  {model.title}
                </h2>
    
                {/* Description */}
                <p className='text-sm md:text-base opacity-70 mb-3'>
                  {model.description}
                </p>
    
                {/* Price */}
                <div className='font-bold text-2xl md:text-3xl mb-3'>
                  ${model.price}
                </div>
    
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <FcCheckmark /> {feature}
                    </li>
                  ))}
                </ul>
    
                {/* Button */}
                <button onClick={ handleBuy} className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
                                   py-3 rounded-full 
                                   font-semibold text-white'>
                 {isBuy ?"Purchased " : "Buy Now "}
                </button>
    
              </div>
  );
};

export default ModelsCard;