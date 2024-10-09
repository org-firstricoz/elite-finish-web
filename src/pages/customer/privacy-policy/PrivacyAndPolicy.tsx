import { EliteButton, EliteWideScreenHandler } from "@/components"
import React from "react"
import Navbar from "../landingPage/components/navbar/Navbar"
import { Header } from "../term-and-condition/component"

const PrivacyAndPolicy: React.FC = () => {
    const heroRef = React.useRef<HTMLDivElement>(null)

    return (
        <EliteWideScreenHandler>
            <Navbar heroRef={heroRef} />
            <div className="  ">
                <div className=" min-h-screen  h-auto w-full  px-4 md:px-24  my-24 ">
                    <div ref={heroRef} className="absolute z-40 -top-48 md:-top-32  h-[3rem] w-full" />

                    <Header mainHeading="Privacy and Policy" />

                    <div className="lg:w-7/12 md:w-9/12 w-full mt-12 ps-12">
                        <h1 className="text-[#3E4958]">Introduction</h1>
                        <p className="text-[#3E4958]">Welcome to EliteFinish. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default PrivacyAndPolicy