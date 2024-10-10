import React from "react"
import { Fakelogo1, Fakelogo2 } from "@/constants/imagePath"
import { motion } from 'framer-motion'


const Marque:React.FC = () => {
    const logos = [Fakelogo1, Fakelogo2, Fakelogo1, Fakelogo2, Fakelogo1, Fakelogo2];

  return (
    <div className="relative flex  items-center   md:mx-24 mx-4 overflow-x-hidden mt-12 ">
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
    {/* Right gradient overlay */}
    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex flex-shrink-0  gap-6">
      {[...logos, ...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Partner logo ${index}`}
          className="h-16 "
        />
      ))}
    </motion.div>

    <motion.div
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex  flex-shrink-0 gap-6">

      {[...logos, ...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Partner logo ${index}`}
          className="h-16  flex flex-shrink-0"
        />
      ))}
    </motion.div>

  </div>
  )
}
export default Marque