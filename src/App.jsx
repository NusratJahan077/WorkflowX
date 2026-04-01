import { useState } from 'react';
import './App.css';

// Import components
import Banner from './Component/Banner';
import Cart from './Component/Cart/Cart';
import Footer from './Component/Footer';
import Models from './Component/Models/Models';
import Navbar from './Component/Navbar';
import Pricing from './Pricing';
import StatsSection from './Component/StatsSection';
import CatSection from './Component/CatSection';
import Steps from './Steps';


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const dataPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);
  

  return (
    <>
      <Navbar />
      <Banner />
      <StatsSection />

      {/* Tabs Section */}
      <div className="px-4 md:px-10 lg:px-20">
        <div className="text-center py-10 md:py-20">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Premium Digital Tools
          </h2>
          <p className="text-sm md:text-base mt-3">
            Choose from our curated collection of premium digital products designed
            <br className="hidden md:block" />
            to boost your productivity and creativity.
          </p>
        </div>

        <div className="tabs text-2xl font-black justify-center">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 mb-10 checked:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
            aria-label="Products"
            onClick={() => setActiveTab("Products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 checked:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {/* Conditional rendering based on active tab */}
      {activeTab === "Products" && (
        <Models dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

     

        <Steps/>
          <Pricing  />
          <CatSection />
          <Footer />
      
   

    </>
  );
}

export default App;
``