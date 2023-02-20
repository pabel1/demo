import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { RiAddCircleFill } from "react-icons/ri";
import pimg from "../Assests/image/g835SLOHDG-F-1-removebg-preview 1.png";
import card from "../Assests/image/g835SLOHDG-F-1-removebg-preview 1.png";
const ProductCard = () => {
  return (
    <div className=" w-[190px] h-[230px] shadow-lg rounded-md ">
      <div className=" px-2 py-3">
        <img src={pimg} alt="" />
        <h1 className=" text-xl font-semibold ">Original Beats Pro </h1>
        <p className=" text-gray-400">Price $33.38</p>
      </div>
      <div className="w-full flex justify-between items-center gap-4">
        <p className=" flex items-center gap-2 text-[#38FF4C]">
          <AiFillStar /> 4.9
        </p>
        <button className="  text-2xl text-[#38FF4C] rounded-full  font-bold">
          <RiAddCircleFill className="text-[#38FF4C] text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
