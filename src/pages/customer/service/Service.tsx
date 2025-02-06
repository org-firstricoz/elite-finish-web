import React from "react"
import ServiceHero from "./components/ServiceHero"
import Services from "./components/Services"

const Service:React.FC = () => {
  return (
    <div className="mb-24 ">
      <ServiceHero/>
      <Services/>
    </div>
  )
}
export default Service