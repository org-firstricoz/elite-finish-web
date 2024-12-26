import React from "react"
import { Booking, ConnectPainter, Testinomial } from "../landingPage/components"
import { About, FeatureTimeline, Partners, Team, WhoWeAre } from "./components"




const AboutUsPage: React.FC = () => {
  return (
    <div>
      <About />
      <Testinomial />
      <ConnectPainter />
      <FeatureTimeline />
      <Team />
      <WhoWeAre />
      <Partners />
      <Booking />
    </div>
  )
}
export default AboutUsPage