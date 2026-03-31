import React, { use } from 'react';
import AvailableCard from '../AvailableCard/AvailableCard';

const Cards = ({cardPromise}) => {
    const cards = use(cardPromise);
    console.log(cards)
    return (
       <div className="max-w-7xl mx-auto px-4 py-10">
         <div className="grid grid-cols-1  md:grid-cols-3 gap-6 items-stretch" >
            
            {
                cards.map(availableCard => <AvailableCard key={availableCard.id} availableCard={availableCard}></AvailableCard>)
            }
        </div>
       </div>
    );
};

export default Cards;