import React from 'react';
import insta from "../../../assets/products/Vector.png"
import facebook from "../../../assets/products/Facebook.png"
import twitter from "../../../assets/products/Twitter.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">

<nav>
  
              <h2 className='text-xl font-bold'>DigiTools</h2>
              <p>Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
</nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

  <nav>
    <p>Social Links:</p>
   <div className='flex gap-2.5'>
     <img className='bg-white w-[40px] p-2 rounded-full' src={insta} alt="" />
    <img src={facebook} alt="" />
    <img src={twitter} alt="" />
   </div>

  </nav>
</footer>
        </div>
    );
};

export default Footer;