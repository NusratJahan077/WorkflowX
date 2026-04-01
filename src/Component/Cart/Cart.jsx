import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts ,setCarts}) => {

  const totalPrice =carts.reduce((sum ,item)=> sum+ item.price ,0)

 const handlePayment =() =>{
  setCarts([])
   toast.success("Payment succeccful !")
};

const  handleRemove =(item) =>{
const filteredArray =carts.filter(c => c.id  !== item.id)
setCarts(filteredArray)
 toast.success("Item Removed !")
}



  return (
    <div className="py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

{
  carts. length === 0 ? <p className='text-2xl text-center opacity-70'>No Card Avialable.</p>: 

    <div className= 'space-y-5' >
      {/* Cart Items */}
      {carts.map(item => (

        
        <div 
          className="flex items-center justify-between border rounded-3xl py-4 p-3 " 
          key={item.id}
        >
          {/* Icon */}
          <img 
            className="h-10 w-20 object-contain" 
            src={item.icon} 
            alt={item.title} 
          />

          {/* Title */}
          <h2 className="text-xl font-semibold flex-1 px-4">{item.title}</h2>


           {/* Price */}
          <div className="font-bold text-lg">${item.price}</div>

          {/* Remove Button */}
          <button 
            className="text-red-500 ml-4 hover:underline"
            onClick={() => handleRemove(item)}
          >
            Remove
          </button>

        
        </div>
      ))}

      {/* Total */}
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-xl font-bold">Total</h3>
        <span className="text-2xl font-bold">
          ${totalPrice}
        </span>
      </div>

      {/* Checkout Button */}
      <button 
      onClick={handlePayment}
        className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
       
      >
        Proceed To Checkout
      </button>
</div>
}
  
  


    </div>
  );
};

export default Cart;
