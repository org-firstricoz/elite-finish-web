import { EliteButton, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { HouseFull } from "@/constants/imagePath"
import React from "react"

const ConnectPainter: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="h-auto  my-16 md:px-24 px-4">
                <div className="mb-12">
                    <EliteHeading>Connect with house painters</EliteHeading>
                    <p className="text-center md:text-lg  sm:text-base text-sm text-gray-400">Commitment to quality, trust, and customer satisfaction</p>
                </div>
                <div className="relative flex justify-end items-center  h-[22rem] w-full rounded-2xl"
                    style={{
                        backgroundImage: `url(${HouseFull})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                    <div className=" absolute  w-full h-full rounded-2xl bg-gradient-to-b from-transparent to-black   md:bg-gradient-to-r md:from-transparent md:to-black    " />
                    <div className="absolute  md:w-5/12 w-full flex flex-col items-end justify-end md:justify-center h-full md:gap-4 gap-2 pb-4 md:pb-0  ">
                        <h1 className="font-bold md:text-3xl text-2xl text-white text-center w-full md:text-start">Coloring Made Simple</h1>
                        <p className="md:text-sm text-xs text-center md:text-start font-thin text-white px-5 md:px-0 w-full ">Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
                        <div className="w-full flex justify-center md:justify-start">
                            <EliteButton className="">Find Out More</EliteButton>
                        </div>
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default ConnectPainter