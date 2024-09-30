import React from "react"
import { AboutUs, Booking, ConnectPainter, Hero, OurApp, Process, Services, Testinomial } from "./components"
import StatsCard from "./components/aboutus/StatsCard"

const LandingPage: React.FC = () => {
  return (
   
      <div className="">
        <Hero />
        <ConnectPainter/>
        <Services />
        <AboutUs />
        <StatsCard/>
        <Testinomial/>
        <Process/>
        <OurApp/>
        <Booking/>
      </div>
  )
}
export default LandingPage