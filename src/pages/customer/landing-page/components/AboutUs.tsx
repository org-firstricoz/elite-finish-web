import { EliteButton } from "@/components"
import { EliteDescription } from "@/components/EliteDescription"
import { EliteLargeHeading } from "@/components/EliteLargeHeading"
import { EliteSmallHeading } from "@/components/EliteSmallHeading"
import { Shape } from "@/components/Shapes"
import React from "react"
import { Link } from "react-router-dom"


export const AboutUs: React.FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen h-auto grid grid-cols-12 md:pt-0 pt-12  items-center lg:px-32 sm:px-8 px-2 ">
                <Shape variant="halfCircleGreen" className="h-24 top-[10.5rem]" />
                <div className="relative md:col-span-6 col-span-12 flex items-center  justify-center md:justify-start  ">
                    <Shape variant="triangleGreen" className=" right-[9.4rem]" />

                    <div className="h-[28rem] w-[28rem] bg-gray-300 z-50 ">
                        <img src="/public/assets/about-img.jpg" alt="" />
                    </div>
                </div>
                <div className="relative md:col-span-6 col-span-12 h-full  md:py-0 py-8 flex items-center justify-center px-4 ">
                    <div className="flex flex-col md:gap-5 gap-2">

                        <EliteSmallHeading
                            heading="About Us" />

                        <EliteLargeHeading
                            headings={["Choose Elitefinish for a touch of luxury in every stroke."]}
                        />
                        <EliteDescription heading="We specialize in transforming homes, offices, and living spaces into elegant environments that reflect your unique style and personality" />

                        <Link to={'/about-us'}>
                            <EliteButton>See Details</EliteButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}