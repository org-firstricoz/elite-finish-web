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
                    <p className="text-center text-lg text-gray-400">Commitment to quality, trust, and customer satisfaction</p>
                </div>
                <div className=" flex justify-end items-center  h-[22rem] w-full rounded-2xl"
                    style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)), url(${HouseFull})`,
                     backgroundPosition: 'center', 
                     backgroundSize: 'cover' }}>
                    <div className="w-5/12 flex flex-col gap-4">
                        <h1 className="font-bold text-3xl text-white">Coloring Made Simple</h1>
                        <p className="text-sm font-thin text-white">Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
                        <EliteButton className="">Find Out More</EliteButton>
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default ConnectPainter