import EliteHeading from "@/components/EliteHeading"
import { Painterman7 } from "@/constants/imagePath"
import { Triangle } from "lucide-react"
import React from "react"

const About: React.FC = () => {
  return (

    <div className="min-h-screen h-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:px-24 px-4 mb-12">
      <div className="col-span-7 flex flex-col justify-evenly">
        <EliteHeading classname="text-start">EliteFinish’s success over the  <br />  years in qualitypainting services</EliteHeading>

        <div className="bg-elite-blue w-5/12 rounded-lg px-4 flex flex-col gap-12 py-8">
          <Triangle className="rotate-180" fill="black" color="#000000" strokeWidth={1} />

          <div className="flex flex-col gap-4">
          <p className="text-sm">EliteFinish was founded with vision provide exceptional painting services that ensure a spotless and healthy environment for our clients.</p>
          <div>
            <h1>✅  Easily book painting</h1>
            <h1> ️✅  Reminders about painting</h1>
            <h1> ️✅  Get 24/7 on-demand care</h1>
          </div>
          </div>
        </div>
      </div>
      <div className="col-span-5  flex items-end ">
        <div className="">
          <img src={Painterman7} />
        </div>
      </div>
    </div>
  )
}
export default About