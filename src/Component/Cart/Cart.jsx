import React from 'react';

import { toast } from 'react-toastify';

// Cart component receives carts state and setCarts function
const Cart = ({ carts=[], setCarts }) => {

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  // Handle payment (clear cart and show success message)
  const handlePayment = () => {
    setCarts([]);
    toast.success("Checkout complete 🎉 Your tools are ready!");
  };

  // Handle removing a single item from cart
  const handleRemove = (item) => {
    const filteredArray = carts.filter(c => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item removed!");
  };

  return (
    <div className="py-20 mb-32 justify-center max-w-5xl mx-auto border border-gray-400 opacity-80 rounded-xl p-8 bg-white shadow-lg ">
      {/* Cart Header */}
      <h2 className="text-3xl font-bold ">Your Cart</h2>

      {/* If cart is empty, show message */}
      {carts.length === 0 ? (
        <p className="text-2xl text-center opacity-70 my-10">No Cart Available.</p>
      ) : (
        <div className="space-y-5">
          
          {/* Cart Items */}
          {carts.map(item => (
            <div 
              className="flex items-center justify-between rounded-3xl py-4 px-4 bg-gray-100 shadow-sm" 
              key={item.id}
            >
              {/* Item Icon */}
              <img 
                className="h-10 w-20 object-contain" 
                src={item.icon} 
                alt={item.title} 
              />

              {/* Item Title */}
              <h2 className="text-xl font-semibold flex-1 px-4">{item.title}</h2>

              {/* Item Price */}
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

          {/* Total Price Section */}
          <div className="flex items-center justify-between rounded-3xl py-4 px-4 ">

            <h3 className="text-xl ">Total</h3>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button 
            onClick={handlePayment}
            className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};


export default Cart;
