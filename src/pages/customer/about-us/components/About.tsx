import EliteHeading from "@/components/EliteHeading"
import { Painterman7, PaintStroke } from "@/constants/imagePath"
import React from "react"
import Navbar from "../../landingPage/components/navbar/Navbar"
import { EliteWideScreenHandler } from "@/components"
import HeroStats from "../../landingPage/components/HeroStats"

const About: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null)
  return (
    <EliteWideScreenHandler>

      <div className="relative">
        <Navbar heroRef={heroRef} />
        <div className="min-h-screen h-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4   pt-32">
        <div ref={heroRef} className="absolute z-40 -top-44 md:-top-24  h-[10rem] w-full"/>

          <div className="  col-span-7 flex flex-col md:ps-24 ps-4 ">
            <EliteHeading classname="text-start w-full ">
              <h1  className="leading-snug text-[clamp(1rem,6vw,5.5rem)] md:text-[clamp(1rem,3vw,5.5rem)] w-full">
                <span className="font-bold leading-snug">EliteFinish’s </span>
                 success over the  <br />
               <span className="leading-snug">years in quality painting</span>  <br />
                services
              </h1>
            </EliteHeading>
            <HeroStats className="mt-24"/>

          </div>
          <div className="col-span-5  flex items-end ">
            <div className="">
              <img src={Painterman7} />
            </div>
          </div>
        </div>
        <img className="absolute -z-10  -bottom-[10rem] h-[25rem]" src={PaintStroke} alt="paint stroke" />

      </div>
    </EliteWideScreenHandler>
  )
}
export default About