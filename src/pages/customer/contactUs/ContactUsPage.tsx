import { HeroCommon } from "@/components"
import React from "react"
import ContactUs from "./component/ContactUs"
import Maps from "./component/Maps"

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <HeroCommon
        heading="Contact Us"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
      />
      <ContactUs />
      <Maps />
    </div>
  )
}
export default ContactUsPage