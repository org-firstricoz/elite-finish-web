import React from "react"
import { Shape } from "./Shapes"
import EliteButton from "../../../../components/EliteButton"

export const AboutUs: React.FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen h-auto grid grid-cols-12  items-center lg:px-32 sm:px-8 px-2 ">
               <Shape variant="halfCircleGreen" className="h-24 top-[10.5rem]"/>
                <div className="relative md:col-span-6 col-span-12 flex items-center   ">
                    <Shape variant="triangleGreen" className=" right-[9.4rem]"/>

                    <div className="h-[28rem] w-[28rem] bg-gray-300 z-50 ">
                        {/* image placeholder */}
                    </div>
                </div>
                <div className="relative md:col-span-6 col-span-12 h-full flex items-center justify-center ">
                    <Shape variant="brokeCircleVoilet" className="z-[-1] top-36 left-12"/>
                     <div className="flex flex-col gap-5 ">
                        <h1 className="font-medium">About Us</h1>
                        <div className="font-semibold text-5xl">
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