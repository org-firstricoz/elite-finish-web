import React from "react"
import EliteButton from "../../../../components/EliteButton"
import { Shape } from "./Shapes"

export const Services: React.FC = () => {
    return (
        <>
            <div className=" h-auto bg-elite-blue py-24  lg:px-32 sm:px-8 px-2">
                <div className="w-full  mb-12">
                    <h1 className="font-semibold text-md mb-4 text-white">Services</h1>
                    <div className="text-white  flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                        <div className=" md:text-4xl sm:text-3xl text-xl">
                            <h1>Easy and Fast Print Customization </h1>
                            <h1>with Digital Print Services</h1>
                        </div>
                        <EliteButton className="text-md">Learn More</EliteButton>
                    </div>
                </div>

                <div className="w-full h-screen ">
                    <div className="w-full h-1/2 grid grid-cols-4">
                        <div className="col-span-1 h-full w-full bg-slate-200"></div>
                        <div className="col-span-1 h-full w-full flex flex-col justify-center items-center gap-8">
                            <h1 className="text-2xl text-white font-semibold">Doc Print</h1>
                            <Shape variant="arrowDownIcon" className="h-6" />
                        </div>
                        <div className="col-span-1 h-full w-full bg-slate-200"></div>
                        <div className="col-span-1 h-full w-full flex flex-col justify-center items-center gap-8">
                            <h1 className="text-2xl text-white font-semibold">Sticker Print</h1>
                            <Shape variant="arrowDownIcon" className="h-6" />
                        </div>
                    </div>

                    <div className="w-full h-1/2 grid grid-cols-4">
                    <div className="col-span-1 h-full w-full flex flex-col justify-center items-center gap-8">
                            <h1 className="text-2xl text-white font-semibold">Digital Print</h1>
                            <Shape variant="arrowDownIcon" className="h-6 rotate-180" />
                        </div>
                        <div className="col-span-1 h-full w-full bg-slate-200"></div>
                        <div className="col-span-1 h-full w-full flex flex-col justify-center items-center gap-8">
                            <h1 className="text-2xl text-white font-semibold">Shirt Print</h1>
                            <Shape variant="arrowDownIcon" className="h-6 rotate-180" />
                        </div>
                        <div className="col-span-1 h-full w-full bg-slate-200"></div>
                    </div>
                </div>
            </div>
        </>
    )
}