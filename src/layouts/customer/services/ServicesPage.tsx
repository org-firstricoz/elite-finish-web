import React from "react"
import HeroServices from "./components/HeroServices"
import Testimonial from "./components/Testimonial"
import { EliteCommon } from "../../../components"
import Services from "./components/Services"

const ServicesPage:React.FC = () => {
  return (
   <div>
     <HeroServices/>
     <Services/>
     <EliteCommon/>
     <Testimonial/>
   </div>
  )
}
export default ServicesPage