
import React from "react";

import { useLocation } from "react-router-dom";
import { cn } from "../../../../utils";

export const NAVLINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Help",
    href: "/help",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Navlinks: React.FC = () => {
 
    
  // const currentUrl = useLocation().pathname;
  return (
    <div className="md:flex hidden gap-12 items-center text-sm font font-[400] font-[18px] ">
      {NAVLINKS.map((link, i) => (
        <a
          className={cn("hover:text-elite-green py-3 text-white")}
          key={`NAVLINK_${i}`}
          href={link.href}
        >
          {link.title}
        </a>
      ))}

    </div>
  );
};

export default Navlinks;
