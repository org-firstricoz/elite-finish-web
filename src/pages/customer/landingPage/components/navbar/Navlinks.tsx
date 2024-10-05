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

const Navlinks: React.FC = () => {
  const currentUrl = useLocation().pathname;

  return (
    <div className="md:flex hidden gap-12 items-center text-sm font font-[400]">
      {NAVLINKS.map((link, i) => {
        const isActive = currentUrl.endsWith(link.href);
        return (
          <Link
            to={link.href}
            className={cn("py-3 text-black", {
              "font-semibold": isActive,
            })}
            key={`NAVLINK_${i}`}
          >
            <motion.h1
              initial={{ opacity: 0.5 }} // Start with lower opacity
              animate={{ opacity: 1 }} // Animate to full opacity
              transition={{ duration: 0.3 }} // Smooth transition
              className={cn("", {
                "font-semibold": isActive,
              })}
            >
              {link.title}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="border-b-2 border-elite-red mt-1"
                  initial={{ width: 0 }} // Start with a width of 0
                  animate={{ width: "100%" }} // Animate to full width
                  transition={{ duration: 0.3 }} // Smooth transition
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
