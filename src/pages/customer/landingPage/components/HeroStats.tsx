import { cn } from "@/utils"
import React from "react"

interface props{
    className?: string
}
const HeroStats: React.FC<props> = ({className}) => {
    return (
        <div className= {cn(` flex md:gap-24  gap-4 justify-center w-full  `, className)}>
            <div>
                <h1 className="text-3xl font-semibold text-elite-red">20+</h1>
                <p className="text-gray-400 text-xs md:text-sm">Years of experience</p>
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-elite-red">800+</h1>
                <p className="text-gray-400  text-xs md:text-sm">Property Ready</p>
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-elite-red">1450+</h1>
                <p className="text-gray-400  text-xs md:text-sm">Happy Customers</p>
            </div>
        </div>
    )
}
export default HeroStats