import { EliteWideScreenHandler } from "@/components"
import React from "react"
import Navbar from "../landingPage/components/navbar/Navbar"
import { Header } from "../term-and-condition/component"
import { Content } from "./component"

const PrivacyAndPolicy: React.FC = () => {
    const heroRef = React.useRef<HTMLDivElement>(null)

    const intro = ["Welcome to EliteFinish. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it."]

    const yourInfoPoints = [
        "We use the information we collect in the following ways:",
        "To Provide Services: To deliver the services you request from us.",
        "To Improve Services: To understand how our services are being used and to enhance and improve our offerings.",
        "To Communicate With You: To send you updates, newsletters, and other information that may be of interest to you.",
        "For Marketing: To provide you with personalized advertisements and promotions.",
        "For Security: To maintain the safety and security of our website and services."
    ];
    const shareYourInfo = [
        "We may share your personal data with third parties in the following situations:",
        "With Service Providers: We may share your data with third-party vendors who provide services on our behalf.",
        "For Legal Reasons: We may disclose your data if required to do so by law or in response to valid requests by public authorities.",
        "Business Transfers: If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred."
    ];
    const dataSecurity = ["We use appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure. Despite these measures, we cannot guarantee absolute security."]

    const dataProtection = [
        "You have the following rights regarding your personal data:",
        "Access: You have the right to request access to your personal data.",
        "Correction: You have the right to request the correction of inaccurate or incomplete data.",
        "Deletion: You have the right to request the deletion of your personal data.",
        "Objection: You have the right to object to the processing of your personal data.",
        "Data Portability: You have the right to request the transfer of your data to another service provider."
    ];

    const cookies = ["Our website uses cookies to enhance your browsing experience. You can control the use of cookies through your browser settings."]

    const privacy = ["We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes."]

    const personalData = [
        "While using our services, we may collect the following types of personal data:",
        "Contact Information: Name, email address, phone number, and postal address.",
        "Identification Information: Date of birth, social security number, and other identification details.",
        "Financial Information: Bank account details, credit card information, and transaction history.",
        "Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform."
    ];


    const nonPersonalData = [
        "We may also collect non-personal data that does not identify you individually, such as:",
        "Aggregated Data: Statistical or demographic data.",
        "Behavioral Data: Information on how you use our website and services."
    ];





    return (
        <EliteWideScreenHandler>
            <Navbar heroRef={heroRef} />
            <div className="  ">
                <div className=" min-h-screen  h-auto w-full  px-4 md:px-24  my-24 ">
                    <div ref={heroRef} className="absolute z-40 -top-48 md:-top-32  h-[3rem] w-full" />

                    <Header mainHeading="Privacy and Policy" />
                    <div className="w-full h-auto flex flex-col gap-8   my-24">

                        <Content
                            heading="Introduction"
                            content={intro} />



                        <div className=" w-full flex md:flex-row flex-col  gap-12">
                            <Content
                                className="bg-red-50 rounded-2xl p-8 "
                                heading="Personal Data"
                                content={personalData}
                                pointsGap={4}
                                headingPosition="CENTER" />

                            <Content
                                className="bg-red-50 rounded-2xl p-8"
                                heading="Non Personal Data"
                                content={nonPersonalData}
                                pointsGap={4}
                                headingPosition="CENTER" />
                        </div>


                        <Content
                            heading="How We Use Your Information"
                            content={yourInfoPoints} />

                        <Content
                            heading="Sharing Your Information"
                            content={shareYourInfo} />

                        <Content
                            heading="Sharing Your Information"
                            content={dataSecurity} />

                        <Content
                            heading="Your Data Protection Rights"
                            content={dataProtection} />

                        <Content
                            heading="Cookies"
                            content={cookies} />

                        <Content
                            heading="Changes to This Privacy Policy"
                            content={privacy} />

                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default PrivacyAndPolicy