import { Shape } from "@/components/Shapes"
import React from "react"

export const Why: React.FC = () => {
    return (
        <>
            <div className="w-full h-fit mb-14 mt-14 md:mt-0   ">
                <div className=" w-full flex flex-col gap-1 text-black text-center ">
                    <h1 className="font-semibold md:text-lg text-sm mb-4 text-black">Why?</h1>
                    <div className="font-semibold md:text-4xl lg:text-5xl sm:text-3xl text-2xl">
                        <h1 className="">We believe that every space deserves </h1>
                        <h1 className=" ">the touch of perfection</h1>
                    </div>
                </div>
                {/* cards */}
                <div className="w-full h-[22rem] grid grid-cols-3 mt-14 mb-24  lg:px-32 sm:px-8 px-2 ">
                    <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full border-[#1A1A1A]   border-r-[1px]  ">
                        <Shape variant="crownIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                        <div className="text-center md:text-lg text-sm font-medium">
                            <h1>Unmatched Quality </h1>
                            <h1>T& Craftsmanship</h1>
                        </div>
                        <div className="text-center font-[400] md:text-sm text-xs">
                            <h1>At Elitefinish, we use only premium-grade paints and </h1>
                            <h1>finishes, ensuring long-lasting durability, vibrant colors,</h1>
                            <h1> and a flawless result. Our expert team takes pride in </h1>
                            <h1>delivering meticulous craftsmanship that </h1>
                            <h1>transforms your space into a work of art.</h1>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full border-[#1A1A1A]   border-r-[1px]  ">
                        <Shape variant="docsIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                        <div className="text-center md:text-lg text-sm font-medium">
                            <h1>Personalized Experience</h1>
                        </div>
                        <div className="text-center font-[400] md:text-sm text-xs">
                            <h1>We tailor our services to your unique vision and needs.</h1>
                            <h1> From consultation to the final brushstroke, Elitefinish </h1>
                            <h1>focuses on every detail to ensure your home or office </h1>
                            <h1>reflects your style and personality with a touch </h1>
                            <h1>of luxury in every stroke.</h1>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex justify-center items-center flex-col gap-6 h-full  ">
                        <Shape variant="teamIcon" className="md:h-[7rem] sm:h-[5rem] h-[3rem] " />
                        <div className="text-center md:text-lg text-sm font-medium">
                            <h1>Elite-Class Service</h1>
                        </div>
                        <div className="text-center font-[400] md:text-sm text-xs">
                            <h1>Our commitment to excellence goes beyond just painting. </h1>
                            <h1>We provide an elevated experience with precision, </h1>
                            <h1>punctuality, and care, making the entire process seamless</h1>
                            <h1> and stress-free. Elitefinish is your partner in </h1>
                            <h1>achieving elegance and sophistication in any space.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}