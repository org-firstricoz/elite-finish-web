import { cn } from "@/utils"
import React from "react"
import EliteServiceButton from "./EliteServiceButton"
import { Heart } from "lucide-react"

interface props {
    image: string
    title: string
    time?: string
    price: string
    isLike: boolean
    className?: string
}
const EliteImageCard: React.FC<props> = ({ image, title, isLike, price, className }) => {
    return (
        <div className="flex gap-2">

            <div className={cn("bg-elite-gray rounded-[30px] flex flex-col gap-2 justify-center  p-4 sm:w-[20rem] w-[16rem]", className)}>
                <div className="relative">
                    <div className="absolute right-5 top-5 rounded-full bg-white p-1">
                        {
                            isLike ?
                                <Heart className=" " size={19} fill="red" stroke="transparent" />
                                :
                                <Heart className=" " size={19} fill="gray" stroke="transparent" />

                        }
                    </div>
                    <img
                        src={image}
                        alt=""
                        className="aspect-[4/3] object-cover w-full sm:rounded-[30px] rounded-[30px] " />
                </div>

                <div className="flex flex-col  gap-2 ">
                    <h1 className=" text-[1.3rem] font-bold text-black"
                    >
                        {title}
                    </h1>

                    <div className="flex  justify-end sm:items-center  w-full gap-2">
                        {/* <div className="flex items-center gap-1">
                            <EliteIcons variant="timer" size="1.5rem" />
                            <h1 className="text-gray-500 text-xs font-bold">{time}/Days</h1>
                        </div> */}

                        <EliteServiceButton price={price} />
                    </div>
                </div>
            </div>





        </div>
    )
}
export default EliteImageCard