import React from 'react';
import play from "../../../assets/products/Play.png"
import banner from "../../../assets/products/banner.png"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='mr-[40px]'>
      <h1 className="text-7xl text-[#101727] font-bold leading-normal"> Supercharge Your <br></br>Digital Workflow</h1>
      <p className="py-6 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
      </p>
      <button className="btn btn-primary mr-[5px]">  Explore Products</button>
      <button className="btn btn-outline btn-primary"><img src={play} alt="" /> Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;