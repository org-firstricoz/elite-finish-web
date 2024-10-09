import { EliteButton, EliteWideScreenHandler } from "@/components"
import React from "react"
import { Header, termAndCond } from "./component"
import Navbar from "../landingPage/components/navbar/Navbar"

const TermAndCondition: React.FC = () => {
    const heroRef = React.useRef<HTMLDivElement>(null)

    return (
        <EliteWideScreenHandler>
                <Navbar heroRef={heroRef} />
            <div className="  ">
                <div className=" min-h-screen  h-auto w-full  px-4 md:px-24  my-24 ">
                    <div ref={heroRef} className="absolute z-40 -top-48 md:-top-32  h-[3rem] w-full" />

                    <Header mainHeading="Terms of Service" subHeading="AGREEMENT" />

                    <div className="lg:w-7/12 md:w-9/12 w-full mt-12 ps-12">
                        {
                            termAndCond.map((item, index) =>
                                <div key={`TERM_AND_CONDITION_${index}`} className="py-4">
                                    <h1 className="text-lg font-semibold pb-2">{item.title}</h1>
                                    {
                                        item.content.map((content, index) =>
                                            <p key={`TERM_AND_CONDITION_CONTENT_${index}`} className="text-xs text-gray-500 pb-5">{content}</p>
                                        )}
                                </div>
                            )
                        }
                        <EliteButton className="mt-12">Accept & Continue</EliteButton>
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default TermAndCondition