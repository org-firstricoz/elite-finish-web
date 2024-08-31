import React from "react"
import { Shape } from "./Shapes"
import EliteButton from "../../../../components/EliteButton"

export const AboutUs: React.FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen h-auto grid grid-cols-12  items-center lg:px-32 sm:px-8 px-2 ">
               <Shape variant="halfCircleGreen" className="h-24 top-[10.5rem]"/>
                <div className="relative md:col-span-6 col-span-12 flex items-center  justify-center md:justify-start  ">
                    <Shape variant="triangleGreen" className=" right-[9.4rem]"/>

                    <div className="h-[28rem] w-[28rem] bg-gray-300 z-50 ">
                        {/* image placeholder */}
                    </div>
                </div>
                <div className="relative md:col-span-6 col-span-12 h-full flex items-center justify-center ">
                     <div className="flex flex-col gap-5 ">
                        <h1 className="font-medium">About Us</h1>
                        <div className="font-semibold md:text-4xl lg:text-5xl sm:text-3xl text-2xl">
                        <h1>Experience the Power </h1>
                        <h1>of Digital Printing</h1>
                        </div>
                        
                        <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis.</h1>
                        <EliteButton>See Details</EliteButton>
                     </div>
                </div>
            </div>
        </>
    )
}