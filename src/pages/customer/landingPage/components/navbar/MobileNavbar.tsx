import React from "react"
import { NAVLINKS } from "./Navlinks"
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils";
import { X } from "lucide-react";

interface props {
    setShowNav: (status: boolean) => void
}

const MobileNavbar: React.FC<props> = ({ setShowNav }) => {

    const currentUrl = useLocation().pathname;
    return (
        <div className="absolute z-[99] top-0 left-0 h-full w-full bg-black/50 flex flex-col ">

            <div className="absolute z-[99] top-0 left-0 h-full w-9/12 bg-white flex flex-col p-4">
                <div className="w-full  flex justify-end">
                    <X onClick={() => setShowNav(false)} className="text-2xl text-black" />
                </div>

                {NAVLINKS.map((link, i) => (
                    <Link
                        to={link.href}
                        className={cn("hover:text-elite-green text-2xl py-3 text-black",
                            {
                                " font-semibold  ":
                                    currentUrl.endsWith(link.href),
                            }
                        )}
                        key={`NAVLINK_${i}`}
                    >
                        <h1 className={cn("",
                            {
                                " font-semibold border-b-2 border-black ":
                                    currentUrl.endsWith(link.href),
                            }
                        )} >{link.title}</h1>
                    </Link>
                ))}

            </div>
        </div>
    )
}
export default MobileNavbar