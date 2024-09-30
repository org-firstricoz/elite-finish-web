import { EliteIcons, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { painterman2, painterman3 } from "@/constants/imagePath"
import React from "react"

const AboutUs: React.FC = () => {
    return (
        <EliteWideScreenHandler>

            <div className="w-full h-auto pt-12 md:px-24 px-4   ">
                <div className=" flex  flex-col items-center justify-center">
                    <EliteHeading>
                        Dedicated to delivering top-quality,
                        <br />
                        professional painting services
                    </EliteHeading>
                    <p className="text-center md:text-sm text-xs text-gray-500 lg:w-6/12 md:w-8/12 sm:w-8/12 w-9/12  mt-5">
                        We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with more than oncebuild, scale your vision most efficient.
                    </p>
                </div>
                {/* title section */}
                <div className="flex items-center gap-4 px-12 my-8 mt-12 ">
                    <h1 className="text-3xl font-semibold">About Us</h1>
                    <EliteIcons variant="play" className="invert" />
                </div>

                {/* image section */}
                <div className="grid grid-cols-12 gap-4 w-full ">
                    <div className="col-span-4 ">
                        <img src={painterman2} alt="painterman2" className="w-full  object-cover  aspect-auto" />
                    </div>
                    <div className="col-span-8  flex justify-end items-end md:pt-24 pt-12">
                        <img src={painterman3} alt="painterman3" className="rounded-3xl  w-full aspect-video object-cover" />
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default AboutUs