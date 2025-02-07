import {  EliteWideScreenHandler } from "@/components"
import { Brush } from "@/constants/imagePath"
import React from "react"
import Navbar from "../../landingPage/components/navbar/Navbar"

const Services:React.FC = () => {
   

    const heroRef = React.useRef<HTMLDivElement>(null)
  return (
    <EliteWideScreenHandler>
        <div className="relative h-auto bg-[#F9F8FF] overflow-hidden">
        <div ref={heroRef} className="absolute z-40 -top-48 md:-top-24   h-[11rem] w-full"/>

            <Navbar heroRef={heroRef}/>
        <div className=" flex justify-end">
            <img src={Brush} alt="brush" className="md:translate-x-28 translate-x-48" />
            <div className="absolute left-[50%] sm:w-auto  w-full  font-bold  top-[70%] translate-x-[-50%] translate-y-[-50%] ">
            <p className="3xl:text-7xl md:text-5xl sm:text-4xl xs:text-2xl text-lg text-center"> We’re highly rated painting service provider.
            </p>
            </div>
        </div>
        </div>
    </EliteWideScreenHandler>
  )
}
export default Services