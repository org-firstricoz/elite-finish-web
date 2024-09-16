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
        <div className="w-full grid grid-cols-12 gap-4 pt-12 pb-2  border-b-[1px] border-black ">
            {
                statsData.map((data, index) => {
                    return (
                        <div key={`STATSDATA_${index}`} className="col-span-4  flex justify-center ">
                            <div className="w-10/12 bg-elite-whiteSmoke rounded-[3rem] flex flex-col items-center justify-center p-8">
                                <h1 className="text-6xl font-semibold border-b-[1px] border-black w-full text-center pb-3">{data.stats}</h1>
                                <h1 className="pt-4  text-md">{data.description}</h1>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}
export default StatsCard