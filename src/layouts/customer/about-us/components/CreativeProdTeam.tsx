import React from "react"
import ImageCard from "./ImageCard"

const CreativeProdTeam:React.FC = () => {
  return (
    <div className="min-h-auto md:h-screen py-12 md:pb-0">
      <h1 className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold">Creative Production Team</h1>    
      <div className=" w-full md:h-[80vh] h-[40vh]  flex justify-center items-center  lg:px-32 sm:px-8 px-2">
            <div className="bg-gray-300 w-full h-3/4 grid grid-cols-12 ">
                <div className=" md:col-span-3 col-span-5 ">
                    <ImageCard/>
                </div>
                <div className=" md:col-span-9 col-span-7"></div>
            </div>
      </div>
    </div>
  )
}
export default CreativeProdTeam