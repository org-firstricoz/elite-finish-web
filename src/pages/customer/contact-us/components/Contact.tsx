import React from "react"
import ContactForm from "./ContactForm"
import { Painterman6 } from "@/constants/imagePath"
import EliteHeading from "@/components/EliteHeading"

const Contact: React.FC = () => {
    return (
        <div className="md:my-24 my-9 md:px-24 px-4">
            <div className="grid grid-cols-12 gap-3">
                <div className="md:col-span-3 " />
                <div className="md:col-span-9 col-span-12 mb-12">
                    <EliteHeading classname="text-start">Contact us</EliteHeading>
                </div>
            </div>
            <div className="grid grid-cols-12  gap-3">
                <div className="md:col-span-3 md:block hidden">
                    <img
                        src={Painterman6}
                        className="w-full" />
                </div>
                <div className="md:col-span-9 col-span-12">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
export default Contact