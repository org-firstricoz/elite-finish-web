import { EliteCommon, HeroCommon } from "@/components"
import TestonomialSection from "@/components/EliteTestimonial"
import React from "react"
import Faq from "./component/Faq"

const FaqPage: React.FC = () => {
  return (
    <>
      <HeroCommon
        heading="FAQ"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
      />
      <Faq />
      <EliteCommon />
      <TestonomialSection
        heading="Testimonials"
        subheading1="Get to Know Our Digital Print"
        subheading2="Services Closer Through"
        subheading3="Customer Reviews"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra."
        author="Sally Wily - Customer Rona"
      />
    </>
  )
}
export default FaqPage