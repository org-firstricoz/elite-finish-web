import { EliteCommon, HeroCommon } from "@/components"
import { AboutUs, CreativeProdTeam, History, Testimonial, Welcome, Why } from "."
import { CompanyLogos } from "@/components/CompanyLogos"

const AboutPage = () => {
  return (
    <div className="">

      <HeroCommon
        heading="About Us"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
      />
      <AboutUs />
      <Why />
      <Welcome />
      <CompanyLogos />
      <CreativeProdTeam />
      <History />
      <EliteCommon />
      <Testimonial />
    </div>
  )
}
export default AboutPage