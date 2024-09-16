import { EliteButton, EliteIcons } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { commercialPainter, paintergirl } from "@/constants/imagePatht"
import React from "react"

const Services: React.FC = () => {
    return (
        <div className="bg-elite-whiteSmoke min-h-screen h-auto w-full py-16 md:px-12 px-2">
            {/* heading */}
            <div>
                <EliteHeading>Comprehensive Painting Services</EliteHeading>
            </div>
            {/*image cards */}
            <div>
                <div className="grid grid-cols-12  gap-4 py-12 pt-24">
                    <div className="col-span-12 md:col-span-6 flex justify-center ">
                        <div className="lg:w-8/12 w-10/12 place-self-center border-[1px] border-black rounded-b-[33px] rounded-t-[75px] py-12 px-4">
                            <img
                                src={paintergirl}
                                alt=""
                                className="aspect-square object-cover " />

                            <div className="flex justify-between mt-12">
                                <h1 className=" lg:text-3xl text-2xl text-black">Interior painting</h1>
                                <EliteIcons size="2.5rem" variant="rightArrow" />
                            </div>
                        </div>


                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-center ">
                        <div className="lg:w-8/12 w-10/12 border-[1px] border-black rounded-b-[33px] rounded-t-[75px] py-12 px-4">
                            <img
                                src={commercialPainter}
                                alt=""
                                className="aspect-square object-cover " />

                            <div className="flex justify-between mt-12">
                                <h1 className=" lg:text-3xl text-2xl text-black">Commercial painting</h1>
                                <EliteIcons size="2.5rem" variant="rightArrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* button */}
            <div className="w-ful flex justify-center">
                <EliteButton className="text-black py-3 px-16 text-xl">view all services</EliteButton>
            </div>

         
        </div>
    )
}
export default Services