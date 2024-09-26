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
        <div className="w-full grid grid-cols-12 md:gap-4 gap-2 pt-12 pb-6  border-b-[1px] border-black ">
            {
                statsData.map((data, index) => {
                    return (
                        <div key={`STATSDATA_${index}`} className="col-span-4  flex justify-center">
                            <div className="md:w-10/12 w-full bg-elite-gray md:rounded-[3rem] rounded-2xl flex flex-col items-center justify-center md:p-8 px-2 py-5">
                                <h1 className="md:text-6xl text-2xl font-semibold border-b-[1px] border-black w-full text-center pb-3">{data.stats}</h1>
                                <h1 className="pt-4  md:text-md text-xs">{data.description}</h1>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}
export default StatsCard