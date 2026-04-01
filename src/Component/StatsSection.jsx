import React from 'react';
const StatsSection = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <div className="my-10  w-full">
      <div className="w-screenh  h-[200px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          
          {stats.map((item, index) => (
            <div key={index} className="relative">
              
              <h2 className="text-3xl md:text-4xl font-bold">
                {item.value}
              </h2>
              <p className="text-sm mt-2 opacity-80">
                {item.label}
              </p>

              {/* Divider (only middle items) */}
              {index !== stats.length - 1 && (
                <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/40"></span>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default StatsSection;
