import React from "react"
import { AboutUs, BenefitsSection, Booking, ConnectPainter, Hero, OurApp, Process, Services, } from "./components"


const LandingPage: React.FC = () => {
  return (

    <>
      <Hero />
      <Services />
      <ConnectPainter />
      <AboutUs />
      <Process />
      <BenefitsSection />
      <OurApp />
      <Booking />
    </>
  )
}
export default LandingPage