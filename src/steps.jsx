import React from "react";

const Steps = () => {

   const steps = [ { 
    id: "01", 
    title: "Create Account", 
    desc: "Sign up for free in seconds. No credit card required.", 
    icon: "./assets/user.png", },
    
    { id: "02", 
      title: "Choose Products", 
      desc: "Browse our catalog and select the tools that fit your needs.",
       icon: "./assets/package.png", }, 
       
       { id: "03", 
        title: "Start Creating",
         desc: "Download and start using your premium tools immediately.",
          icon: "./assets/rocket.png", }, ]; 
          
          return ( <div className="py-20 text-center"> 
          
          <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2> 
          <p className="text-gray-500 mt-2"> Start using premium digital tools in minutes, not hours. </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 ml-36 mr-36 "> {steps.map((step) => ( <div key={step.id} className="bg-white p-9 h-72 rounded-xl shadow-md relative " >
            
             <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full"> {step.id} </div>
             
              <div 
             className="text-4xl mb-4">{step.icon}</div> <h3 className="font-semibold text-lg">{step.title}</h3> <p className="text-gray-500 text-sm mt-2">{step.desc}</p> 
             
             
             </div>
              ))} 
              </div> 
              </div>
               ); 
              };
               export default Steps;