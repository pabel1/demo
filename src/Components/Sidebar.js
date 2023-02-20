import React from "react";
import Logo from "../Assests/image/download (8) 1.png";
import LogoName from "../Assests/image/MK Sounds.png";
import sidefotterimg from "../Assests/image/Frame 2.png";
// import transaction from '../Assets/img/icons/ic_transcation.svg'
// import invoices from '../Assets/img/icons/ic_invoices.svg'

import { FaRegUser } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import MainMenu from "./Menu";

const Sidebar = () => {
  // const activeClass='activeClass'
  // const normalClass='normalClass'

  return (
    <div className=" h-screen flex flex-col items-start md:items-center  overflow-auto border-r-2">
      {/* logo  */}
      <div className="w-full  flex items-center gap-2  py-5 px-4 mx-auto">
        <img className=" bg-active p-2 rounded-xl " src={Logo} alt="" />
        <span className=" hidden md:block">
          <img className="" src={LogoName} alt="" />
        </span>
      </div>

      {/* Main Menu */}
      <MainMenu />

      {/* Footer */}
      <div className=" mt-24 text-center mx-2 hidden md:block">
       
       <img className=" relative " src={sidefotterimg} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
