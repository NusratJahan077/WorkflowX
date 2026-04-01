import React from "react";

const Pricing = ({ setSelectedCard }) => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mt-2">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        
        {/* Starter */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="text-2xl font-bold mt-2">$0</p>

          <ul className="text-sm mt-4 space-y-2 text-gray-600">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
          </ul>

          <button 
            onClick={() => setSelectedCard("starter")}
            className="mt-6 w-full bg-purple-500 text-white py-2 rounded-full"
          >
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="bg-purple-600 text-white p-6 rounded-xl relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-2xl font-bold mt-2">$29/month</p>

          <ul className="text-sm mt-4 space-y-2">
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
          </ul>

          <button 
            onClick={() => setSelectedCard("pro")}
            className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full"
          >
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-100 p-6 rounded-xl ">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-2xl font-bold mt-2">$99/month</p>

          <ul className="text-sm mt-4 space-y-2 text-gray-600">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Dedicated support</li>
          </ul>

          <button 
            onClick={() => setSelectedCard("enterprise")}
            className="mt-6 w-full bg-purple-500 text-white py-2 rounded-full"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
