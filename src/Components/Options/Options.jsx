import React from 'react';
import user from "../../../assets/products/user.png"
import pack from "../../../assets/products/package.png"
import rocket from "../../../assets/products/rocket.png"
const Options = () => {
    return (
        <div>
            <h2 className='text-[#101727] font-bold text-4xl mt-6 text-center'>Get Started in 3 Steps</h2>
            <p className='text-[#627382] text-sm text-center mt-3'>Start using premium digital tools in minutes, not hours.</p>

            <div className='flex justify-around items-center flex-col md:flex-row my-10  '>
                <div className='border border-blue-100 w-[380px] py-[88px] px-[24px] rounded-3xl shadow-xl'>
                    <img className='mx-auto bg-fuchsia-100 rounded-full p-3' src={user} alt="" />
                    <h2 className='text-center mt-2 text-black font-bold text-xl'>Create Account</h2>
                    <p className='text-[#627382] text-sm text-center mt-2'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border border-blue-100 w-[380px] py-[88px] px-[24px] rounded-3xl shadow-xl '>
                    <img className='mx-auto bg-fuchsia-100 rounded-full p-3' src={pack} alt="" />
                    <h2 className='text-center mt-2 text-black font-bold text-xl'>Create Account</h2>
                    <p className='text-[#627382] text-sm text-center mt-2'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border border-blue-100 w-[380px] py-[88px] px-[24px]  rounded-3xl shadow-xl'>
                    <img className='mx-auto bg-fuchsia-100 rounded-full p-3' src={rocket} alt="" />
                    <h2 className='text-center mt-2 text-black font-bold text-xl'>Create Account</h2>
                    <p className='text-[#627382] text-sm text-center mt-2'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
        </div>
    );
};

export default Options;