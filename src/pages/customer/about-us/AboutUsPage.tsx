import React from "react"
import { Booking, Testinomial } from "../landingPage/components"
import StatsCard from "../landingPage/components/aboutus/StatsCard"
import { About, FeatureTimeline } from "./components"

const AboutUsPage:React.FC = () => {
  return (
    <div>
      <About/>
        <Testinomial/>
        <StatsCard/>
        <FeatureTimeline/>
        <Booking/>
    </div>
  )
}
export default AboutUsPage