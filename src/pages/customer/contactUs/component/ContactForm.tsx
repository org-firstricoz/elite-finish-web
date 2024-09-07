import React from "react"
import ServiceDetailForm from "../../serviceDetails/components/ServiceDetailForm"

const ContactForm: React.FC = () => {
    return (
        <div className=" w-full ">
            <div className="h-fit ">
                <div className="row-span-3 ">
                    <div className="w-full flex flex-col gap-4 ">
                        <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold sm:font-semibold ">
                            <h1 >Let’s Get In Touch</h1>
                        </div>
                    </div>
                </div>
                <div className=" md:pe-16">
                    <ServiceDetailForm
                        showUploadFileButton={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default ContactForm