import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AvailableCard = ({availableCard, handleAddToCart}) => {
    console.log(availableCard);

    const [isSelected , setIsSelected] = useState(false);

    const handleChooseProduct= () => {
      setIsSelected(true);
       handleAddToCart(availableCard); 
       toast.success("Added to cart!");
    }
    return (
        <div >
          <div className="card w-96 h-full bg-base-100 shadow-sm ">
  <div className="card-body">
   <div className='flex justify-between'>
    <img className='border p-2 rounded-full border-blue-100' src={availableCard.icon} alt="" />
     <span className="badge badge-xs badge-warning ">{availableCard.tag}</span>
   </div>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{availableCard.name}</h2>
      {/* <span className="text-xl">${availableCard.price}/<span className='text-[#627382] text-sm' >{ availableCard.period}</span></span> */}
    </div>
    <p className='text-sm text-[#627382]'>{availableCard.description}</p>
     <span className="text-xl">${availableCard.price}/<span className='text-[#627382] text-sm' >{ availableCard.period}</span></span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{availableCard.feature1}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{availableCard.feature2}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{availableCard.feature3}</span>
      </li>
    
    
    </ul>
    <div className="mt-6">
      <button  onClick={handleChooseProduct}  className="btn btn-primary btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl">
        {isSelected === true ? "Added to Cart" : "Buy Now"}
        </button>
    </div>
  </div>
</div>


        </div>
    );
};

export default AvailableCard;