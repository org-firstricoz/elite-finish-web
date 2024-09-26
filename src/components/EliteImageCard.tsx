import { cn } from "@/utils"
import { EliteIcons } from "./EliteIcons"
import React from "react"

interface props {
    image: string
    title: string
    time: string
    price: string
    className?: string
}
const EliteImageCard: React.FC<props> = ({ image, title, time, price, className }) => {
    return (
        <div className="flex gap-2">

            <div className={cn("bg-elite-gray rounded-[30px] flex flex-col gap-2 justify-center  p-4 w-[20rem]", className)}>
                <img
                    src={image}
                    alt=""
                    className="aspect-[4/3] object-cover w-full sm:rounded-[30px] rounded-[30px] " />

                <div className="flex flex-col  gap-2 ">
                    <h1 className=" text-[1.3rem] font-bold text-black"
                        >
                        {title}
                    </h1>

                    <div className="flex  justify-between sm:items-center  w-full gap-2">
                        <div className="flex items-center gap-1">
                            <EliteIcons variant="timer" size="1.5rem" />
                            <h1 className="text-gray-500 text-xs font-bold">{time}/Days</h1>
                        </div>

                        <button className="bg-black hover:bg-black/75 text-white rounded-xl lg:px-6 px-2  py-2 flex justify-between items-center lg:gap-8 gap-4">
                            <h1 className="text-start lg:text-sm text-xs  ">From <br />Rs.{price}/sqft</h1>
                            <EliteIcons variant="play" />
                        </button>
                    </div>
                </div>
            </div>





        </div>
    )
}
export default EliteImageCard