import { EliteLargeHeading } from "@/components"
import React from "react"

const CeoAndManager: React.FC = () => {
    return (
        <div className=" w-full ">
                    <EliteLargeHeading headings={["Ceo And Manager",""]} className="text-center"/>
                <div className="h-auto    lg:px-32 sm:px-8 px-2">
                    <div className="grid grid-cols-12 min-h-[70vh] h-auto  gap-4 md:gap-0 w-full my-12">
                        <div className=" md:col-span-6 col-span-12 w-full  flex">
                            <div className="flex-1 bg-gray-300 w-full aspect-[3/4]"></div>
                            <div className="flex-1 flex flex-col justify-center items-center bg-Elite-voilet">
                                <div className="text-white ">
                                    <h1 className="text-2xl font-semibold">Alex R</h1>
                                    <h1 className="text-xs sm:text-sm lg:text-md">CEO of  Ricoz printing</h1>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-6 col-span-12 h-full flex">
                            <div className="flex-1 bg-gray-300  w-full aspect-[3/4]"></div>
                            <div className="flex-1 flex flex-col justify-center items-center bg-Elite-voilet">
                                <div className="text-white">
                                    <h1 className="text-2xl font-semibold">Alliana H</h1>
                                    <h1 className="text-xs sm:text-sm  lg:text-md">Manager of  Ricoz printing</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6"></div>
                    </div>
                </div>
            </div>
    )
}
export default CeoAndManager