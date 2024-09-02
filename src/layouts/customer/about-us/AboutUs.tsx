import { EliteCommon } from "../../../components"
import { CompanyLogos } from "../landing-page/components/CompanyLogos"
import { AboutUs } from "./components/AboutUs"
import CreativeProdTeam from "./components/CreativeProdTeam"
import HeroAbout from "./components/HeroAbout"
import History from "./components/History"
import Testimonial from "./components/Testimonial"
import Welcome from "./components/Welcome"
import { Why } from "./components/Why"

const AboutPage = () => {
  return (
    <div className="">
      
       <HeroAbout/>
       <AboutUs/>
       <Why/>
       <Welcome/>
       <CompanyLogos/>
       <CreativeProdTeam/>
       <History/>
       <EliteCommon/> 
       <Testimonial/>
    </div>
  )
}
export default AboutPage