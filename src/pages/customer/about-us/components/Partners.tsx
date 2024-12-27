import { EliteWideScreenHandler } from "@/components"
import React from "react"
import Marque from "./Marque"

const Partners: React.FC = () => {

  

  return (
    <EliteWideScreenHandler>
      <div className="h-auto flex flex-col items-center justify-center gap-12 py-10 my-12 overflow-hidden">
        <h1 className="text-3xl text-center text-wrap font-semibold">Our Partners and Investors</h1>

       <Marque/>
        
        <div className="flex justify-evenly items-center gap-5  w-full md:px-24 px-4">
          <div className="flex justify-center items-center flex-col     ">
            <h1 className="md:text-8xl sm:text-6xl text-[2rem]  text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">123</h1>
            <h1 className="text-center  md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Investors</h1>
          </div>

          <div>
            <h1 className="md:text-8xl sm:text-6xl text-[2rem]  text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">$123M</h1>
            <h1 className="text-center  md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Funded</h1>
          </div>

          <div>
            <h1 className="md:text-8xl sm:text-6xl text-[2rem]    text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">456</h1>
            <h1 className="text-center md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Partners</h1>
          </div>
        </div>

      </div>
    </EliteWideScreenHandler>
  )
}
export default Partners