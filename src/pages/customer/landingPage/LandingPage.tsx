import React from "react"
import { AboutUs, Booking, Hero, Services, Testinomial } from "./components"

const LandingPage: React.FC = () => {
  return (
   
      <div className="">
        <Hero />
        <Services />
        <AboutUs />
        <Testinomial/>
        <Booking/>
      </div>
  )
}
export default LandingPage