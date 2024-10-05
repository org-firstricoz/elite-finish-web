import React from "react";
import { NAVLINKS } from "./Navlinks";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  setShowNav: (status: boolean) => void;
  isShowNav: boolean;
}

const MobileNavbar: React.FC<Props> = ({ setShowNav, isShowNav }) => {
  const currentUrl = useLocation().pathname;

  return (
    <AnimatePresence>
      {/* Only render the navbar if showNav is true */}
      {isShowNav && (
        <div className="fixed z-[99] top-0 left-0 h-full w-full bg-transparent flex flex-col">
          {/* Add motion.div for the sliding effect */}
          <motion.div
            initial={{ x: "-100%" }} // Start outside of view (left)
            animate={{ x: 0 }} // Animate to its position
            exit={{ x: "-100%" }} // Exit animation
            transition={{ type: "spring", stiffness: 60, damping: 15 }} // Smooth spring effect
            className="absolute z-[99] top-0 left-0 h-full w-9/12 bg-white border-r-[1px] flex flex-col p-4"
          >
            <div className="w-full flex justify-end">
              <X onClick={() => setShowNav(false)} className="text-2xl text-black" />
            </div>

            {NAVLINKS.map((link, i) => (
              <Link
                to={link.href}
                className={cn("hover:text-elite-green text-2xl py-3 text-black", {
                  "font-semibold": currentUrl.endsWith(link.href),
                })}
                key={`NAVLINK_${i}`}
              >
                <h1
                  className={cn("", {
                    "font-semibold border-b-2 border-elite-red": currentUrl.endsWith(link.href),
                  })}
                >
                  {link.title}
                </h1>
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
