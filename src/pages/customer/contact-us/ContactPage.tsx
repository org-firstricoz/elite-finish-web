import React from "react"
import { Contact } from "./components"
import { EliteWideScreenHandler } from "@/components"

const ContactPage:React.FC = () => {
  return (
    <EliteWideScreenHandler >
      <Contact/>
    </EliteWideScreenHandler>
  )
}
export default ContactPage