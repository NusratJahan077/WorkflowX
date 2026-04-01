import React from 'react';

const CatSection = () => {
  return (
    <div className="py-17  w-screen text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mt-4 ">
      
      <h2 className="text-3xl font-bold">
        Ready To Transform Your Workflow?
      </h2>

      <p className="mt-3 text-sm opacity-80">
        Join thousands of professionals who are already using Digitools to work smarter.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-white text-purple-600 px-5 py-2 rounded-full">
          Explore Products
        </button>

        <button className="border border-white px-5 py-2 rounded-full">
          View Pricing
        </button>
      </div>

    </div>
  );
};

export default CatSection;