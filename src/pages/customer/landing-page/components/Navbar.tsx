import React from "react";
import Navlinks from "./Navlinks";
import { EliteButton } from "@/components";

const Navbar: React.FC<{ floating?: boolean }> = ({}) => {
  return (
    <>
      <div className=" fixed top-0 py-2 z-[999999]  sm:py-5 lg:px-32 sm:px-8 px-2 w-full bg-elite-blue  flex  justify-between items-center">
        <div className="text-white font-semibold flex items-center">
          <img src="/public/assets/logo-elite.png" className="h-10 mt-1" alt="" />
          <p>ELITE FINISH</p>
        </div>
        <Navlinks />
        <EliteButton className="text-white">Get a Quote</EliteButton>
      </div>
    </>
  );
};

export default Navbar;
