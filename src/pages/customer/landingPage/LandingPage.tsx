import React from "react"
import { AboutUs, Booking, ConnectPainter, Hero, OurApp, Process, Services, Testinomial } from "./components"
import StatsCard from "./components/aboutus/StatsCard"

const LandingPage: React.FC = () => {
  return (
   
      <div>
        <Hero />
        <Services />
        <ConnectPainter/>
        <AboutUs />
        <StatsCard/>
        <div className="my-12">
        <Testinomial/>
        </div>
        <Process/>
        <OurApp/>
        <Booking/>
      </div>
  )
}
export default LandingPage