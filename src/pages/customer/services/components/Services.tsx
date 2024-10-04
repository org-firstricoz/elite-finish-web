import {  EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { Brush } from "@/constants/imagePath"
import React from "react"
import Navbar from "../../landingPage/components/navbar/Navbar"

const Services:React.FC = () => {
   

    const heroRef = React.useRef<HTMLDivElement>(null)
  return (
    <EliteWideScreenHandler>
        <div className="relative h-auto bg-[#F9F8FF]">
        <div ref={heroRef} className="absolute z-40 -top-48 md:-top-24   h-[11rem] w-full"/>

            <Navbar heroRef={heroRef}/>
        <div className=" flex justify-end">
            <img src={Brush} alt="brush" />
            <EliteHeading classname="absolute left-[50%]  top-[65%] translate-x-[-50%] translate-y-[-50%]">
            We’re highly rated painting service provider.
            </EliteHeading>
        </div>
        </div>
    </EliteWideScreenHandler>
  )
}
export default Services