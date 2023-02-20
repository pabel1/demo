import React from "react";
import icon from "../Assests/image/icons8-search-more-100 1.png";
import icon2 from "../Assests/image/icons8-filter-64 1.png";
import { RiMessage2Line } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import img1 from "../Assests/image/Frame 22.png";
import Card from "./Card";
import card from "../Assests/image/g835SLOHDG-F-1-removebg-preview 1.png";
import ProductCard from "./productCard";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div className=" w-full container">
      <div className=" w-full flex items-center justify-between">
        <div className=" p-2">
          <h1 className=" text-[32px] font-semibold">Headphone</h1>
          <p className=" text-lg">For the top band</p>
        </div>
        <div className=" p-2  flex items-center gap-6">
          <div className=" p-2 bg-white flex justify-between items-center border  rounded-md ">
            <img src={icon} alt="" />
            <input type="text" className=" w-[80%]" />
            <img src={icon2} alt="" />
          </div>
          <div className=" flex items-center gap-3">
            <RiMessage2Line className=" text-[40px] bg-[#17FF3C8C] " />
            <MdNotificationsActive className=" text-[40px] bg-[#17FF3C8C] " />
            <FaUserCheck className=" text-[40px] bg-[#17FF3C8C] rounded-md " />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Card />
        <div className="  relative px-2">
          {/* <p className=" text-white"> Summer headphones from top brands</p>

            <p className=" text-white">Buy it Now</p> */}
          <img className=" " src={img1} alt="" />
        </div>
      </div>
      <div className=" flex my-4">
        <div className=" basis-[70%]">
          <div className="  flex items-center gap-x-3">
            {Array(4)
              .fill()
              .map((item, i) => (
                <ProductCard />
              ))}
          </div>
        </div>
        <div className=" basis-[25%] px-3  font-medium">
          <div className=" flex items-center justify-between">
            <h1>Daily Deals</h1>
            <Link to={"/"}>View All</Link>
          </div>
          {Array(10)
            .fill()
            .map((item, i) => (
              <div className=" flex  gap-3 my-4">
                <img className=" w-6 h-6 rounded-full  " src={card} alt="" />
                <div>
                  <h1 className=" text-sm font-semibold ">
                    Bots New Headphone{" "}
                  </h1>
                  <p className=" text-[8px]">256 Review And 1150 Order</p>
                </div>
                <p className=" text-sm text-gray-400"> Price $45.5</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
