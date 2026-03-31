
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Cart from './Component/Cart/Cart'

import Footer from './Component/Footer'
import Models from './Component/Models/Models'
import Navbar from './Component/Navbar'

 const getModels =async ()=>{
   const res = await fetch("/models.json")
   return res.json()
 }

const ArifaPromidse =getModels()


function App() {
  const [activeTab , setActiveTab] =useState("Products")

  const [carts ,setCarts] =useState([])






  return (
    <>
    <Navbar/>
    <Banner/>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center">

  <input type="radio" name="my_tabs_1" className="tab rounded-full  w-40" aria-label="Products" onClick={() => setActiveTab("Products")} defaultChecked/>

  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={() => setActiveTab("cart")} />
  
</div>

   { activeTab === "Products" && <Models ArifaPromidse={ArifaPromidse}  carts={carts} setCarts={setCarts}/>}

  { activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}

   <Footer/>
    </>
  )
}

export default App