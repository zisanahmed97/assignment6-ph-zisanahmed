import React from 'react';
import { toast } from 'react-toastify';

const SelectedCard = ({selectedCard, handleRemoveFromCart, handleClearCart}) => {
    console.log(selectedCard)
  const totalPrice = selectedCard.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <div className='border border-blue-100 shadow max-w-7xl mx-auto px-4 py-10 mt-3 rounded-2xl'>

                <p className='text-xl font-bold text-black ml-10'>Your Cart</p>

                <div className="max-w-6xl mx-auto mt-6">
                {
                    selectedCard.length === 0 ? (
                        <p className="text-center text-gray-500">Cart is empty</p>
                    ) : (
                        selectedCard.map(item => (
                            <div key={item.id} className="border border-blue-100 p-4 mb-3 rounded-2xl shadow py-10">
                              <div className='flex justify-between'>
                                 <div className='flex gap-4'>
                                <img className='border p-2 rounded-full border-blue-100' src={item.icon} alt="" />
                                 <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                <p className='text-[#627382] text-sm'>${item.price}</p>
                                 </div>
                               </div>
                               <button  onClick={() =>{
                                handleRemoveFromCart(item.id);
                                toast.error("Item removed!");
                               } } className="btn btn-soft btn-error">Remove</button>
                              </div>
                             
                            </div>
                        ))
                    )
                }
            </div>
             <div className='flex justify-between'>
                                <p className='text-[#627382] text-sm mt-2.5'>Total:</p>
                                <p className='text-xl font-bold text-black'>${totalPrice}</p>
                              </div>


                <div className='w-5xl mx-auto'>
                      <button  onClick={handleClearCart} className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold mt-3.5 w-5xl rounded-2xl">Proceed to Checkout</button>            

                </div>
            </div>

          
        </div>
    );
};

export default SelectedCard;