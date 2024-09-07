import React from "react"
import HistoryCard from "./HistoryCard"
import { EliteLargeHeading, EliteSmallHeading } from "@/components"

const History: React.FC = () => {
    return (
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col md:gap-4 gap-1 justify-center items-center">
                            <EliteSmallHeading heading="History" />
                            <EliteLargeHeading headings={["From Startup to Success The Digital Printing","Website that Revolutionized the Industry"]} className="text-center" />
                        </div>
                    </div>
                    <div className="  min-h-fit h-auto  md:my-12 lg:px-32 sm:px-8 px-2">
                        <div className="grid grid-cols-12 py-12 gap-4 md:gap-0">
                            <div className="md:col-span-4   col-span-6   flex justify-center lg:px-4 px-2 ">
                                <HistoryCard />
                            </div>
                            <div className="md:col-span-4 col-span-6  flex justify-center  lg:px-4 px-2 ">
                                <HistoryCard />
                            </div>
                            <div className="md:col-span-4   col-span-6  flex justify-center  lg:px-4 px-2">
                                <HistoryCard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}
export default History