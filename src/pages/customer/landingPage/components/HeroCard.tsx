import { EliteButton } from "@/components"
import { ChevronDown } from "lucide-react"
import React from "react"

const HeroCard: React.FC = () => {
    return (
        <div className="absolute bottom-40 md:left-24  left-4 right-4 md:right-0 h-[6rem] lg:w-[57rem]  w-contain lg:px-12 sm:px-6 px-3 border-2  bg-white flex items-center  rounded-lg shadow-lg gap-4 ">
            <span className=" absolute md:hidden  top-[-1.5rem] right-3 z-50  bg-elite-green   rounded-xl   text-white  font-bold  text-base  py-2 px-4 shadow-lg   cursor-pointer  " >
                All services
            </span>

            <div className="border-r-2 w-full">
                <div className="flex md:gap-2 gap-1 items-center ">
                    <h1 className="font-bold text-xs sm:text-sm md:text-base">Current Location </h1>
                    <ChevronDown />
                </div>
                <h1 className="text-xs md:text-sm">Enter Your Location</h1>

            </div>

            <div className="border-r-2 w-full">
                <div className="flex md:gap-2 gap-1 items-center ">
                    <h1 className="font-bold text-xs sm:text-sm md:text-base">Type</h1>
                    <ChevronDown />
                </div>
                <h1 className="text-xs md:text-sm">Enter Your Location</h1>

            </div>

            <div className="md:border-r-2 w-full">
                <div className="flex md:gap-2 gap-1  items-center ">
                    <h1 className="font-bold text-xs sm:text-sm md:text-base">Price </h1>
                    <ChevronDown />
                </div>
                <h1 className="text-xs md:text-sm">Enter Your Location</h1>

            </div>

            <div className="w-full  justify-center hidden md:flex">
                <EliteButton className="flex gap-2 ps-5 text-xs md:text-sm items-center">
                    View All Services
                    <ChevronDown className="-rotate-90" />
                </EliteButton>

            </div>

        </div>
    )
}
export default HeroCard