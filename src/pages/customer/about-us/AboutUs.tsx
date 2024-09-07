import { EliteCommon, HeroCommon } from "@/components"
import { AboutUsMain, CreativeProdTeam, History, Testimonial, Welcome, Why } from "."

const AboutPage = () => {
  return (
    <div className="">

      <HeroCommon
        heading="About Us"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
      />
      <AboutUsMain />
      <Why />
      <Welcome />
      <CreativeProdTeam />
      <History />
      <EliteCommon />
      <Testimonial />
    </div>
  )
}
export default AboutPage