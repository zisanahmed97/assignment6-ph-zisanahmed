import React from 'react';

const Review = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex justify-around py-[60px]'>
            <div>
                <h1 className='text-[#FFFFFF] text-5xl font-bold'>50K+</h1>
                <p className='text-[#FFFFFF] text-xl '>Active Users</p>
            </div>

            <div>
                <h1 className='text-[#FFFFFF] text-5xl font-bold'>200+</h1>
                <p className='text-[#FFFFFF] text-xl '>Premium Tools</p>
            </div>

            <div>
                <h1 className='text-[#FFFFFF] text-5xl font-bold'>4.9</h1>
                <p className='text-[#FFFFFF] text-xl '>Rating</p>
            </div>
            
        </div>
    );
};

export default Review;