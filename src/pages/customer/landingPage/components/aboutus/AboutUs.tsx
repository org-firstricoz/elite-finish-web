import { EliteButton, EliteIcons, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { solarLight, team } from "@/constants/imagePath"
import { MoveUpRight } from "lucide-react"

import React from "react"

const AboutUs: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="w-full h-auto  md:px-24 px-4">

                {/* heading */}
                <EliteHeading>
                    <h1>Dedicated to delivering top-quality,</h1>
                    <h1> professional painting services</h1>
                </EliteHeading>
                {/* Description */}
                <div className="w-full md:w-[75%] text-center lg:text-lg md:text-md text-sm  text-gray-400 py-10 mx-auto    ">
                    <p >We deploy world-class creative design, team on demand. that can design surest
                        easurers of success is when a client partner with more than oncebuild, scale your
                        vision most efficient.
                    </p>
                </div>

                {/* tag */}
                <div className="flex items-center  gap-2 mt-12">
                    <h1 className="text-black text-2xl font-semibold">About Us</h1>
                    <EliteIcons className="invert" variant="playWhite" />
                </div>

                <div className="grid grid-cols-12 mt-12">
                    <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 flex flex-col justify-center gap-2 lg:mt-0 mt-12">
                        <div className="flex items-center gap-5">
                            <div className="bg-gray-700 h-1 w-20 rounded-full" />
                            <p>WHO WE ARE</p>
                        </div>
                        <h1 className="text-3xl font-semibold md:pe-32 pe-12">
                            Discover Sustainable Luxury Living with Elite Finish.
                        </h1>
                        <p className="text-gray-500  md:pe-32 pe-12 sm:text-base text-sm mt-6">
                            At EliteFinish, we are a passionate team committed to making home painting services simple, reliable, and accessible. We understand that finding skilled painters for your home can be a challenge, which is why we’ve built a platform that connects homeowners with trusted professionals who deliver exceptional results.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <EliteButton className=" flex items-center gap-4 mt-2 px-4 py-2">
                                <p>Find Out More</p>
                                <div>
                                    <MoveUpRight />
                                </div>

                            </EliteButton>
                        </div>

                    </div>
                    <div className="lg:col-span-6 col-span-12 order-1 lg:order-2"> 
                        <img
                            src={solarLight}
                            alt="solarLight"
                            className="rounded-xl" />
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-24">
                    <div className="lg:col-span-6 col-span-12">
                        <img
                            src={team}
                            alt="solarLight"
                            className="rounded-xl w-full" />
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:ps-12  flex flex-col justify-center gap-2 lg:mt-0 mt-12">
                        <div className="flex items-center gap-5">
                            <div className="bg-gray-700 h-1 w-20 rounded-full" />
                            <p>OUR MISSION</p>
                        </div>
                        <h1 className="text-3xl font-semibold ">
                            Transform your painting experience into a seamless journey from start to finish.
                        </h1>
                        <p className="text-gray-500  md:pe-32 pe-12 sm:text-base text-sm mt-6">
                            Our vision is to simplify the process of hiring painters while ensuring every home gets the care and attention it deserves. Backed by technology and a network of verified professionals, we aim to transform your painting experience into a seamless journey from start to finish.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <EliteButton className=" flex items-center gap-4 mt-2 px-4 py-2">
                                <p>Learn More</p>
                                <div>
                                    <MoveUpRight />
                                </div>

                            </EliteButton>
                        </div>

                    </div>

                </div>
            </div>

        </EliteWideScreenHandler>
    )
}
export default AboutUs