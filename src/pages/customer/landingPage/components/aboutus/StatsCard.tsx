import { EliteWideScreenHandler } from "@/components";
import React from "react"

interface statsDataProps {
    stats: String;
    description: String;
}

const StatsCard: React.FC = () => {
    const statsData: statsDataProps[] = [
        {
            stats: "23K+",
            description: "Successfully finished project with creativity."
        },
        {
            stats: "98%",
            description: "client easily conversions growth increased."
        },
        {
            stats: "15+",
            description: "good award wining cleaning service"
        }
    ]

    return (
        <EliteWideScreenHandler>

        <div className="w-full flex justify-between  lg:gap-24 md:gap-12   gap-2 pt-12 pb-6  border-b-[1px] border-black md:px-24 px-4 ">
            {
                statsData.map((data, index) => {
                    return (
                        <div key={`STATSDATA_${index}`} className="col-span-4 w-full  flex justify-center">
                            <div className=" w-full bg-elite-gray md:rounded-[3rem] rounded-3xl flex flex-col items-center justify-center md:p-8 px-2 py-5">
                                <h1 className="md:text-6xl text-2xl font-semibold border-b-[1px] border-black w-full text-center pb-3">{data.stats}</h1>
                                <h1 className="pt-4  md:text-md text-xs">{data.description}</h1>
                            </div>
                        </div>
                    )
                })
            }



        </div>
            </EliteWideScreenHandler>
    )
}
export default StatsCard