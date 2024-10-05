import React from "react"
import {motion} from 'framer-motion'
interface Props{
    children : React.ReactNode;
}

const EliteBtnAnimWrapper:React.FC <Props>= ({children}) => {
  return (
    <motion.div  whileTap={{ scale: 0.98 }}>
        {children}
    </motion.div>
  )
}
export default EliteBtnAnimWrapper