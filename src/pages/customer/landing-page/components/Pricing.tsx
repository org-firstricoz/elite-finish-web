import { EliteLargeHeading, EliteSmallHeading } from "@/components"
import PricingCard from "@/components/PricingCard"
import React from "react"

const Pricing: React.FC = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <EliteSmallHeading heading="Pricing"/>
                           
                            <EliteLargeHeading headings={["Price Transparency Knowing","How Much You Should Pay"]}
                            className="leading-6 md:leading-relaxed"
                            />
                        </div>
                    </div>
                    <div className="  min-h-screen h-auto   lg:px-32 sm:px-8 px-2">
                        <div className="grid grid-cols-12 py-12 gap-4 md:gap-0">
                            <div className="md:col-span-4  sm:col-span-6 col-span-12 flex justify-center lg:px-4 px-2 ">
                                <PricingCard
                                    heading="Basic Packages"
                                    price={45}
                                    buttonType="primary"
                                    details={[
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                    ]}
                                />
                            </div>
                            <div className="md:col-span-4 sm:col-span-6 col-span-12 flex justify-center  lg:px-4 px-2 ">
                                <PricingCard
                                    heading="Best Value"
                                    price={45}
                                    buttonType="secondary"
                                    cardBg="primary"
                                    details={[
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                    ]}
                                />
                            </div>
                            <div className="md:col-span-4   sm:col-span-6 col-span-12 flex justify-center  lg:px-4 px-2">
                                <PricingCard
                                    heading="Super Packages"
                                    price={45}
                                    buttonType="primary"
                                    details={[
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                        "Lorem ipsum dolor sit amet consectetur.",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Pricing