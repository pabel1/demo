import React from "react";
import Card from "./Card";
import Content from "./Content";
import Sidebar from "./Sidebar";

import ProductCard from "./productCard";

const Layout = () => {
  return (
    <div className=" flex  gap-4">
      <div className=" w-[20%]">
        <Sidebar />
      </div>

      <div className="">
        <Content />
        
        
      </div>
    </div>
  );
};

export default Layout;
