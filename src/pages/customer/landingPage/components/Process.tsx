import { EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { BrickWall, Headset, LucideCalendarCheck2, Paintbrush } from "lucide-react"
import React from "react"

const Process: React.FC = () => {
  return (
    <EliteWideScreenHandler>

      <div className="h-auto my-12 md:px-24 px-4 mt-24">
        <EliteHeading>Our step-by-step painting <br /> process explained</EliteHeading>

        <div className="flex justify-center gap-8  md:block lg:mt-24">

          <div className="flex md:flex-row flex-col h-[70vh] md:h-auto md:items-center  justify-evenly md:w-full w-auto mt-12 md:px-12 ">

            {/* First Circle */}
            <div className="relative flex justify-center items-center w-fit p-5 rounded-full border-[1px] border-black/25 before:content-['1'] bg-transparent before:absolute before:bg-white before:border-[1px] before:rounded-full before:border-black/25 before:w-[2rem] before:h-[2rem] before:top-[-1px] before:right-[-30px] before:-translate-x-1/2 before:flex before:justify-center before:items-center before:text-xs before:z-10">
              <Headset color="#787878" size={40} />
            </div>

            {/* Dotted Line */}
            <div className="flex-grow translate-x-10 md:translate-x-0  w-0.5 md:w-0 h-0 md:h-.5 border-dotted md:border-b-2 border-l-2 border-black/25 "></div>

            {/* Second Circle */}
            <div className="relative flex justify-center items-center w-fit p-5 rounded-full border-[1px] border-black/25 before:content-['2'] bg-transparent before:absolute before:bg-white before:border-[1px] before:rounded-full before:border-black/25 before:w-[2rem] before:h-[2rem] before:top-[-1px] before:right-[-30px] before:-translate-x-1/2 before:flex before:justify-center before:items-center before:text-xs before:z-10">
              <LucideCalendarCheck2 color="#787878" size={40} />
            </div>

            {/* Dotted Line */}
            <div className="flex-grow translate-x-10 md:translate-x-0  w-0.5 md:w-0 h-0 md:h-.5 border-dotted md:border-b-2 border-l-2 border-black/25"></div>

            {/* Third Circle */}
            <div className="relative flex justify-center items-center w-fit p-5 rounded-full border-[1px] border-black/25 before:content-['3'] bg-transparent before:absolute before:bg-white before:border-[1px] before:rounded-full before:border-black/25 before:w-[2rem] before:h-[2rem] before:top-[-1px] before:right-[-30px] before:-translate-x-1/2 before:flex before:justify-center before:items-center before:text-xs before:z-10">
              <Paintbrush color="#787878" size={40} />
            </div>

            {/* Dotted Line */}
            <div className="flex-grow translate-x-10 md:translate-x-0  w-0.5 md:w-0 h-0 md:h-.5  border-dotted md:border-b-2 border-l-2 border-black/25"></div>

            {/* Fourth Circle */}
            <div className="relative flex justify-center items-center w-fit p-5 rounded-full border-[1px] border-black/25 before:content-['4'] bg-transparent before:absolute before:bg-white before:border-[1px] before:rounded-full before:border-black/25 before:w-[2rem] before:h-[2rem] before:top-[-1px] before:right-[-30px] before:-translate-x-1/2 before:flex before:justify-center before:items-center before:text-xs before:z-10">
              <BrickWall color="#787878" size={40} />
            </div>
          </div>


          {/* titles */}
          <div className="flex flex-col md:flex-row  md:items-center items-start justify-between md:w-full w-auto md:mt-2 mt-12 pb-4">
            <div className="text-center">
              <h1 className="font-semibold text-xl">Get a quote</h1>
              <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-xl">Get a quote</h1>
              <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-xl">Get a quote</h1>
              <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-xl">Get a quote</h1>
              <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
            </div>
          </div>

        </div>


      </div>
    </EliteWideScreenHandler>
  )
}
export default Process