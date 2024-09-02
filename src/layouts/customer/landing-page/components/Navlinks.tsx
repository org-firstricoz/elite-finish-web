
import React from "react";

import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../../utils";

export const NAVLINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Page",
    href: "/page",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Navlinks: React.FC = () => {
    
  const currentUrl = useLocation().pathname;
  console.log('>>>>>>>>>>>', currentUrl)
  return (
    
    <div className="md:flex hidden gap-12 items-center text-sm font font-[400] font-[18px] ">
      {NAVLINKS.map((link, i) => (
        <Link
          className={cn("hover:text-elite-green py-3 text-white",
            { 
              "text-elite-green font-semibold":
                currentUrl.endsWith(link.href),
            }
          )}
          key={`NAVLINK_${i}`}
          to={link.href}
        >
          {link.title}
        </Link>
      ))}

    </div>
  );
};

export default Navlinks;
