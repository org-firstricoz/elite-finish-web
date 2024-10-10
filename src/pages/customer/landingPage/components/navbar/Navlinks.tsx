import { cn } from "@/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

interface NavlinksProps {
  isHeroInView: boolean;
  isMainHero? : boolean;
}

const Navlinks: React.FC<NavlinksProps> = ({ isHeroInView , isMainHero=false}) => {
  const currentUrl = useLocation().pathname;

  return (
    <div className="md:flex hidden gap-12 items-center text-sm font-[400]">
      {NAVLINKS.map((link, i) => {
        const isActive = currentUrl.endsWith(link.href);
        return (
          <Link
            to={link.href}
            className={cn("py-3", {
              "font-semibold text-black": isActive, // Active link is always black
            })}
            key={`NAVLINK_${i}`}
          >
            <motion.h1
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                // Apply conditional colors based on scroll and link index
                {
                  "text-black": !isHeroInView  || i < 2, // Black for first two links or when scrolled
                  "text-white": isHeroInView && i >= 2 && isMainHero, // White for last two when in hero view
                },
                { "font-semibold": isActive } // Active link bold
              )}
            >
              {link.title}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="border-b-2 border-elite-red mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
