import React from "react";
import Navlinks from "./Navlinks";
import EliteButton from "../../../../components/EliteButton";


const Navbar: React.FC<{ floating?: boolean }> = ({ }) => {

    return (
        <>
            <div className="py-2 sm:py-5 lg:px-32 sm:px-8 px-2 w-full bg-elite-blue  flex  justify-between items-center" >
             <div className="text-white font-semibold">LOGO</div>
             <Navlinks/>
             <EliteButton className="text-white">Get a Quote</EliteButton>
            </div>
        </>
    );
};

export default Navbar;
