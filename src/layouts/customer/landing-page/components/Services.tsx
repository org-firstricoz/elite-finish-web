import { EliteButton, EliteSmallHeading } from "@/components"
import { Shape } from "@/components/Shapes"
import React from "react"
import { Link } from "react-router-dom"


export const Services: React.FC = () => {
    return (
        <>
            <div className=" h-auto bg-elite-blue py-24  lg:px-32 sm:px-8 px-2">
                <div className="w-full  mb-12">
                    <EliteSmallHeading heading="Services" className="text-white"/>
                    <div className="text-white  flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                        <div className=" font-semibold md:text-4xl lg:text-5xl sm:text-3xl text-2xl">
                            <h1>Easy and Fast Print Customization </h1>
                            <h1>with Digital Print Services</h1>
                        </div>
                        <Link to={"services"}>
                        <EliteButton className="text-md">Learn More</EliteButton>
                        </Link>
                    </div>
                </div>

                <div className="w-full h-screen ">
                    <div className="grid  grid-cols-2 md:grid-cols-4 w-full h-full">
                        <div className="col-span-2">

                            <div className="w-full h-full grid grid-cols-2 grid-rows-2 ">
                                <div className="col-span-1  bg-gray-300"></div>
                                <div className="col-span-1 flex flex-col justify-center items-center md:gap-8 gap-2">
                                    <h1 className="  text-md md:text-2xl text-white font-semibold">Doc Print</h1>
                                    <Shape variant="arrowDownIcon" className="w-3 md:w-6" />

                                </div>
                                <div className="col-span-1  flex flex-col justify-center items-center  md:gap-8 gap-2">
                                    <Shape variant="arrowDownIcon" className="w-3 md:w-6 rotate-180" />
                                    <h1 className="  text-md md:text-2xl text-white font-semibold">Digital Print</h1>

                                </div>
                                <div className="col-span-1   bg-gray-300"> </div>
                            </div>

                        </div>
                        <div className="col-span-2">
                            <div className="w-full h-full grid grid-cols-2 grid-rows-2 ">
                                <div className="col-span-1  bg-gray-300"></div>
                                <div className="col-span-1  flex flex-col justify-center items-center  md:gap-8 gap-2">
                                    <h1 className=" text-md md:text-2xl text-white font-semibold">Sticker Print</h1>
                                    <Shape variant="arrowDownIcon" className=" w-3 md:w-6" />
                                </div>
                                <div className="col-span-1   flex flex-col justify-center items-center  md:gap-8 gap-2 ">
                                    <Shape variant="arrowDownIcon" className="w-3 md:w-6 rotate-180" />
                                    <h1 className=" text-md md:text-2xl text-white font-semibold">Shirt Print</h1>
                                </div>
                                <div className="col-span-1   bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}