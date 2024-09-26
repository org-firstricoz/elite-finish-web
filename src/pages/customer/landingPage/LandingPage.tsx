import React from "react"
import { AboutUs, Booking, Hero, Process, Services, Testinomial } from "./components"

const LandingPage: React.FC = () => {
  return (
   
      <div className="">
        <Hero />
        <Services />
        <AboutUs />
        <Testinomial/>
        <Process/>
        <Booking/>
      </div>
  )
}
export default LandingPage