import React from "react"
import { CompanyLogos } from "../../../components/CompanyLogos"
import { AboutUs } from "./components/AboutUs"
import { Why } from "./components/Why"
import { Services } from "./components/Services"
import { EliteCommon } from "../../../components/EliteCommon"
import { Team } from "./components/Team"
import Testonomial from "./components/Testonomial"
import Pricing from "./components/Pricing"
import Gallery from "./components/Gallery"
import Blog from "./components/Blog"
import Hero from "./components/Hero"

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CompanyLogos />
      <AboutUs />
      <Why />
      <Services />
      <Team />
      <EliteCommon />
      <Gallery />
      <Pricing />
      <Testonomial />
      <Blog />
    </div>
  )
}

export default LandingPage