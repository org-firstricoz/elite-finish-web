import ImageCard from "@/components/ImageCard"
import React from "react"

const Team: React.FC = () => {
    return (
        <div className=" w-full ">
            <div className="min-h-screen">
                <div className="row-span-3 ">
                    <div className="w-full flex flex-col gap-4 justify-center items-center">
                        <div className=" lg:text-5xl md:text-3xl sm:text-2xl text-[6vw] text-center font-bold sm:font-semibold ">
                            <h1 >Creative Production Team</h1>
                        </div>
                    </div>
                </div>
                <div className="h-auto    lg:px-32 sm:px-8 px-2">

                    <div className="grid grid-cols-12 min-h-[70vh] h-auto  lg:gap-16 gap-10 w-full my-12">
                        <div className=" md:col-span-8 col-span-12">
                            <ImageCard
                            />
                        </div>
                        <div className="md:col-span-4 col-span-12 bg-gray-300 h-40 md:h-full"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Team