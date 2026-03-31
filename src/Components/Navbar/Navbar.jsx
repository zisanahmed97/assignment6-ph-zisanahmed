import React from 'react';
import shoppingcart from "../../../assets/products/shopping-cart.png"

const Navbar = ({selectedCard}) => {
    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Products</a></li>
      
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-4xl font-bold bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   
    <div className="relative mx-[5px]">

  <img  src={shoppingcart} alt="" />

 
  <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-2 rounded-full">
    {selectedCard.length}
  </span>
</div>
     <a className='mr-[5px]'>Log in</a>
    <a className="btn btn-primary">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;