import { EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { Fakelogo1, Fakelogo2 } from "@/constants/imagePath"
import React from "react"
import { motion } from 'framer-motion'
const Partners: React.FC = () => {

  const logos = [Fakelogo1, Fakelogo2, Fakelogo1, Fakelogo2, Fakelogo1, Fakelogo2];

  return (
    <EliteWideScreenHandler>
      <div className="h-auto flex flex-col items-center justify-center gap-10 py-10 overflow-hidden">
        <EliteHeading>Our Partners and Investors</EliteHeading>

        <div className="flex items-center gap-8">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Partner logo ${index}`}
              className="h-16"
            />
          ))}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner logo ${index}`}
              className="h-16"
            />
          ))}
        </div>

        <div className="flex justify-evenly items-center gap-5  w-full md:px-24 px-4">
          <div className="flex justify-center items-center flex-col     ">
            <h1 className="md:text-8xl sm:text-6xl text-4xl  text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">123</h1>
            <h1 className="text-center  md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Investors</h1>
          </div>

          <div>
            <h1 className="md:text-8xl sm:text-6xl text-4xl  text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">$123M</h1>
            <h1 className="text-center  md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Funded</h1>
          </div>

          <div>
            <h1 className="md:text-8xl sm:text-6xl text-4xl   text-center font-bold bg-gradient-to-b from-elite-dark to-white inline-block text-transparent bg-clip-text">456</h1>
            <h1 className="text-center md:text-3xl sm:text-xl text-lg font-bold text-elite-red/50">Partners</h1>
          </div>
        </div>

      </div>
    </EliteWideScreenHandler>
  )
}
export default Partners