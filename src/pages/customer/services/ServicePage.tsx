import React from "react"
import { Estimation, Services } from "./components"
import ServicesSection from "./components/ServicesSection"

const ServicePage:React.FC = () => {
  return (
    <div>
        <Services/>
        <ServicesSection/>
        <Estimation/>
    </div>
  )
}
export default ServicePage