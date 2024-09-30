import { EliteButton } from "@/components"
import { ChevronDown } from "lucide-react"
import React from "react"

const HeroCard: React.FC = () => {
    return (
        <div className="absolute bottom-48 left-24 h-[6rem] lg:w-[57rem] w-[50rem] px-12  border-2  bg-white flex items-center  rounded-lg shadow-lg gap-4">

            <div className="border-r-2 w-full">
                <div className="flex gap-2 items-center ">
                    <h1 className="font-bold">Current Location </h1>
                    <ChevronDown />
                </div>
                <h1>Enter Your Location</h1>

            </div>

            <div className="border-r-2 w-full">
                <div className="flex gap-2 items-center ">
                    <h1 className="font-bold">Current Location </h1>
                    <ChevronDown />
                </div>
                <h1>Enter Your Location</h1>

            </div>

            <div className="border-r-2 w-full">
                <div className="flex gap-2 items-center ">
                    <h1 className="font-bold">Current Location </h1>
                    <ChevronDown />
                </div>
                <h1>Enter Your Location</h1>

            </div>

            <div  className="w-full">
                <EliteButton className="flex gap-2 ps-5">
                    View All Services
                    <ChevronDown className="-rotate-90" />
                </EliteButton>

            </div>

        </div>
    )
}
export default HeroCard