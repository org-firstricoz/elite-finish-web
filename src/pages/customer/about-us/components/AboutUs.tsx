import { EliteDescription, EliteLargeHeading, EliteSmallHeading } from "@/components"
import React from "react"

export const AboutUsMain: React.FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen h-auto grid grid-cols-12 md:pt-0 pt-12  items-center lg:px-32 sm:px-8 px-2 ">
                <div className="relative md:col-span-6 col-span-12 flex items-center  justify-center md:justify-start  ">

                    <div className="h-[28rem] w-[28rem] bg-gray-300 z-50 ">
                        {/* image placeholder */}
                    </div>
                </div>
                <div className="relative md:col-span-6 col-span-12 h-full  md:py-0 py-8 flex items-center justify-center px-4 ">
                     <div className="flex flex-col md:gap-5 gap-2 ">
                        <EliteSmallHeading heading="About Us" className=""/>
                        <EliteLargeHeading headings={["Experience the Power","of Digital Printing"]} />
                        <EliteDescription  heading="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequa"/>
                     </div>
                </div>
            </div>
        </>
    )
}