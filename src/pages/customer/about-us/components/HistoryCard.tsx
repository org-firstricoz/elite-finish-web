import React from "react"

const HistoryCard:React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center md:gap-8 gap-2 ">
        <div className=" w-full md:w-3/5 aspect-[3/4] bg-gray-300"></div>
        <div className="flex flex-col md:gap-4 gap-2 items-center">
            <h1 className="md:text-3xl text-xl font-semibold">2013</h1>
            <div className="text-center font-semibold md:text-base text-xs">
                <h1>Started With Home</h1>
                <h1>Digital Printing</h1>
            </div>
        </div>

       
    </div>
  )
}
export default HistoryCard