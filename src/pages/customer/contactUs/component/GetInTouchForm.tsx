import { EliteButton, EliteInput, EliteTextArea } from "@/components"
import React from "react"

const GetInTouchForm: React.FC = () => {
    return (

        <div className=" w-full grid grid-cols-12  py-12 gap-8 ">

            <div className="md:col-span-6 col-span-12 h-auto">
                <EliteInput
                    label="Your First Name"
                    type="text"
                    placeholder="Enter first name"
                    required
                />
            </div>
            <div className="md:col-span-6 col-span-12 py-0 my-0 ">
                <EliteInput
                    label="Your Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    required
                />
            </div>
            <div className="md:col-span-6 col-span-12">
                <EliteInput
                    label="Your Phone"
                    type="phone"
                    placeholder="+31 2929 29xxx"
                    required
                />
            </div>
            <div className="md:col-span-6 col-span-12 h-auto">
                <EliteInput
                    label="Your Email"
                    type="phone"
                    placeholder="YourEmail@domain.com"
                    className=""
                    required
                />
            </div>

            <div className="col-span-12">
                <EliteTextArea
                    placeholder="Enter message"
                    rows={7}
                    label="message(optional)"
                    required
                    className=""
                />
            </div>
            <div className="col-span-12">
            <EliteButton>Request Order</EliteButton>
            </div>
            
        </div>

    )
}
export default GetInTouchForm