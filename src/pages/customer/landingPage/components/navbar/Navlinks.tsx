
import { cn } from "@/utils";
import React from "react";

import { Link, useLocation } from "react-router-dom";

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
    title: "Contact Us",
    href: "/contact-us",
  },
];

const Navlinks: React.FC = () => {
    
  const currentUrl = useLocation().pathname;
  return (
    
    <div className="md:flex hidden gap-12 items-center text-sm font font-[400] ">
      {NAVLINKS.map((link, i) => (
        <Link
          className={cn("hover:text-elite-green py-3 text-black",
            { 
              " font-semibold":
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