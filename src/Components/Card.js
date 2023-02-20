import React from "react";
import card from "../Assests/image/g835SLOHDG-F-1-removebg-preview 1.png";
import star from "../Assests/image/icons8-starburst-shape-30 2.png";
import imgAction from "../Assests/image/Frame 6.png";
import {BsCircle} from 'react-icons/bs'
import { AiFillHeart } from "react-icons/ai";
const Card = () => {
  return (
    <div className="  w-[70%] p-2 shadow-lg rounded-md mt-4">
      <div className=" flex items-center gap-2">
        <img className=" w-[220px]" src={card} alt="" />
        <div className=" text-left w-full space-y-1 ">
          <h1 className=" text-2xl font-semibold w-full">
            Beats Studio3 Wireless Headphone
          </h1>
          <div className=" flex items-center gap-2">
            <img src={star} alt="" />

            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p className=" text-gray-400">( 200+ Reviews )</p>
          </div>
          <p className="">
            Ergonomic or cupe with on-oor controls up to 22 hours of tening
            time. Apple Wi crip & Closs{" "}
          </p>
          <p className=" text-[#07FFD2] ">Price $ 450.55</p>
          <div className=" flex items-center gap-5 p-2">
            <p className="  ">Color :</p>
            <p className="w-5 h-5 ring ring-[#66FF1E] rounded-full p-[1px] text-center ">
              <p className="w-full h-full bg-[#66FF1E] rounded-full"></p>
            </p>
            <p className="w-5 h-5 ring ring-[#07FFD2] rounded-full p-[1px] text-center ">
              <p className="w-full h-full bg-[#07FFD2] rounded-full"></p>
            </p>
            <p className="w-5 h-5 ring ring-[#1E78FF] rounded-full p-[1px] text-center ">
              <p className="w-full h-full bg-[#1E78FF] rounded-full"></p>
            </p>
            <p className="w-5 h-5 ring ring-[#8E3785] rounded-full p-[1px] text-center ">
              <p className="w-full h-full bg-[#8E3785] rounded-full"></p>
            </p>
            <img src={imgAction} alt="" />
          </div>
          <div className=" flex gap-3 items-center ">
            <button className=" p-2 px-5 border border-[#38FF4C] rounded-md">
              <AiFillHeart className=" text-[#38FF4C] text-xl" />
            </button>
            <button className=" p-2 px-5 border border-[#38FF4C] rounded-md">
              <p className=" ">Add to card</p>
            </button>
            <button className=" p-2 px-5 border bg-[#38FF4C] rounded-md">
              <p className=" ">Buy Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
