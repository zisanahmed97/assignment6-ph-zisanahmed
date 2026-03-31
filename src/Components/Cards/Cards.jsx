import React, { use, useState } from 'react';
import AvailableCard from '../AvailableCard/AvailableCard';

const Cards = ({cardPromise}) => {
    const cards = use(cardPromise);
    console.log(cards)

    const [selectedType , setSelectedType] = useState("Products");
    // console.log(selectedType , "selected")
    return (
        <div>
            <div >
                <h2 className='text-4xl text-black font-bold text-center mt-[100px]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-sm text-center mt-[20px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center  mt-3'>
                <button onClick={()=>setSelectedType("Products")} className={`btn   ${selectedType === "Products"? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" : ""} rounded-4xl `}>Products</button>

                <button onClick={()=>setSelectedType("Cart")} className={`btn px-[24px]  ${selectedType === "Cart"? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" : ""} rounded-4xl   `}>Cart (0)</button>
            </div>
                 <div className="max-w-7xl mx-auto px-4 py-10">
         <div className="grid grid-cols-1  md:grid-cols-3 gap-6 items-stretch" >
            
            {
                cards.map(availableCard => <AvailableCard key={availableCard.id} availableCard={availableCard}></AvailableCard>)
            }
        </div>
       </div>
        </div>

  
    );
};

export default Cards;