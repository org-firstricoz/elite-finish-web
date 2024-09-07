import React from "react"
import NeedHelp from "./NeedHelp"
import GetInTouchForm from "./GetInTouchForm"

const ContactUs: React.FC = () => {
  return (
    <div className="grid grid-cols-12 w-full lg:px-32 sm:px-8 px-2">
      <div className="md:col-span-6 col-span-12 md:pe-10 pe-0">
        <GetInTouchForm />
      </div>
      <div className=" md:col-span-6 col-span-12 bg-[#EFEFEF]">
        <NeedHelp />
      </div>
    </div>
  )
}
export default ContactUs