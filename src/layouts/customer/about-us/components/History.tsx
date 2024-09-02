import React from "react"
import HistoryCard from "./HistoryCard"

const History: React.FC = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col md:gap-4 gap-1 justify-center items-center">
                            <h1 className="font-semibold md:text-lg text-sm mb-4">History</h1>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                                <h1 >From Startup to Success The Digital Printing</h1>
                                <h1>Website that Revolutionized the Industry</h1>
                            </div>
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
        </>
    )
}
export default History