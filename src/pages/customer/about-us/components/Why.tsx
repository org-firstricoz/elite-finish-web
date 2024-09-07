import { EliteLargeHeading, EliteSmallHeading } from "@/components"
import { Shape } from "@/components/Shapes"
import React from "react"

export const Why: React.FC = () => {
    return (

        <div className="w-full h-fit mb-14 mt-14 md:mt-0   ">
            <div className=" w-full flex flex-col gap-1 text-black text-center ">
                <EliteSmallHeading heading="Why?" />
                <EliteLargeHeading headings={["Fast, Cheap and High-Quality Digital", "Prints Why Not?"]} className="leading-relaxed" />
            </div>
            {/* cards */}
            <div className="w-full h-[22rem] grid grid-cols-3 mt-14 mb-24  lg:px-32 sm:px-8 px-2 ">
                <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full border-[#1A1A1A]   border-r-[1px]  ">
                    <Shape variant="crownIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                    <div className="text-center md:text-lg text-sm font-medium">
                        <h1>Modern</h1>
                        <h1>Technology</h1>
                    </div>
                    <div className="text-center font-[400] md:text-sm text-xs">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h1>consectetur adipisicing elit. Ad, dolorem.</h1>
                    </div>
                </div>
                <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full border-[#1A1A1A]   border-r-[1px]  ">
                    <Shape variant="docsIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                    <div className="text-center md:text-lg text-sm font-medium">
                        <h1>Speed And</h1>
                        <h1>Accuracy</h1>
                    </div>
                    <div className="text-center font-[400] md:text-sm text-xs">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h1>consectetur adipisicing elit. Ad, dolorem.</h1>
                    </div>
                </div>
                <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full  ">
                    <Shape variant="teamIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                    <div className="text-center md:text-lg text-sm font-medium">
                        <h1>Professional</h1>
                        <h1>Team</h1>
                    </div>
                    <div className="text-center font-[400] md:text-sm text-xs">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h1>consectetur adipisicing elit. Ad, dolorem.</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}