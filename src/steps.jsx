// src/Steps.jsx
import React from "react";

export default function Steps() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required.",
      icon: "/step-img/user.png",
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "/step-img/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "/step-img/rocket.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-8 rounded-xl shadow-md relative hover:shadow-lg transition"
          >
            {/* Step badge */}
            <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              {step.id}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain" />
            </div>

            {/* Title & Description */}
            <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
