
import './App.css'
import Banner from './Component/Banner'

import Footer from './Component/Footer'
import Models from './Component/Models/Models'
import Navbar from './Component/Navbar'

 const getModels =async ()=>{
   const res = await fetch("/models.json")
   return res.json()
 }

const ArifaPromidse =getModels()


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
   <Models ArifaPromidse={ArifaPromidse}/>
   
   <Footer/>
    </>
  )
}

export default App
