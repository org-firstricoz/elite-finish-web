import React from "react"
import { Booking, ConnectPainter, Testinomial } from "../landingPage/components"
import { About, FeatureTimeline, Team } from "./components"




const AboutUsPage: React.FC = () => {
  return (
    <div>
      <About />
      <Testinomial />
      <ConnectPainter />
      <FeatureTimeline />
      <Team />
      <Booking />
    </div>
  )
}
export default AboutUsPage