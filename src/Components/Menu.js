import React, { useState } from "react";
import cardImg1 from "../Assests/image/download (1) 1.png";
import cardImg2 from "../Assests/image/download (2) 1.png";
import cardImg3 from "../Assests/image/download (3) 1.png";
import cardImg4 from "../Assests/image/download (4) 1.png";
// import cardImg5 from "../Assests/image/download (5) 1.png";
// import cardImg6 from "../Assests/image/download (7) 1.png";
import { NavLink } from "react-router-dom";

const Menu = () => {


  return (
    <div className="w-full text-center  md:text-left mt-5 px-5 space-y-5">
      <div>
        <div className=" hover:border-l-8 border-[#09FB5B] px-3 my-4">
          <NavLink to={"/"} className="flex items-center   gap-4">
            <img className=" w-5" src={cardImg1} alt="" />
            Home
          </NavLink>
        </div>

        <div className=" px-3 my-4">
          <NavLink to={"/"} className="flex items-center   gap-4">
            <img className=" w-5" src={cardImg2} alt="" />
            Explore
          </NavLink>
        </div>
        <div className=" px-3 my-4">
          <NavLink to={"/"} className="flex items-center   gap-4">
            <img className=" w-5" src={cardImg3} alt="" />
            Saved
          </NavLink>
        </div>
        <div className=" px-3 my-4">
          <NavLink to={"/"} className="flex items-center   gap-4">
            <img className=" w-5" src={cardImg4} alt="" />
            Cart
          </NavLink>
        </div>
     
        <div className=" px-3 my-4">
          <NavLink to={"/"} className="flex items-center   gap-4">
            <img className=" w-5" src={cardImg1} alt="" />
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
