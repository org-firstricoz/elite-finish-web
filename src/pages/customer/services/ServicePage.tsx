import React from "react"
import { Estimation, Services } from "./components"

const ServicePage:React.FC = () => {
  return (
    <div className="md:px-24 px-4">
        <Services/>
        <Estimation/>
    </div>
  )
}
export default ServicePage