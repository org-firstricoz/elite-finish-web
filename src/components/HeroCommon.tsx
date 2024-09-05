import React from "react";
import { Shape } from "./Shapes";

interface HeroCommmonProps {
    heading: string;
    description: string;
}
export const HeroCommon: React.FC<HeroCommmonProps> = ({
    heading,
    description
}) => {

    return (
        <div className="relativ  h-screen w-full">
            <div className="relative  h-[85vh] bg-elite-blue flex justify-center">

                <div className=" z-40 flex flex-col justify-center items-center text-white   w-4/5 sm:w-3/5 md:w-1/2 gap-12">
                    <h1 className=" md:text-6xl text-4xl font-bold text-wrap">{heading}</h1>
                    <h1 className=" text-xs sm:text-sm text-center leading-relaxed">{description}
                    </h1>
                </div>

            </div>
            <Shape variant="brokenCircleGreen" className="absolute z-0 md:top-24 top-20 md:right-[25vw] right-[22vw] md:scale-75 scale-50" />
            <Shape variant="triangleOrange" className="absolute z-0 top-32 md:left-[25vw]  left-[10vw] md:scale-75 scale-50" />
            <Shape variant="circleOrange" className="absolute bottom-40 md:right-[35vw] right-[30vw] md:scale-100 sm:scale-75 scale-50  " />
            <Shape variant="squareWhite" className="absolute md:bottom-[50vh] bottom-[55vh] md:right-[10vw] right-[8vw] md:scale-75 scale-50 " />
            <Shape variant="squareWhite" className="absolute md:bottom-[50vh] bottom-[55vh] md:left-[7vw] left-[5vw]  md:scale-50 scale-[.3] " />
            <Shape variant="pathGreen" className="absolute bottom-[30vh] md:left-[15vw] left-[8vw] md:scale-75 scale-50 " />
        </div>
    )
}