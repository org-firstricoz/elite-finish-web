import React from "react"
import PricingCard from "./PricingCard"

const Pricing: React.FC = () => {
    return (
        <>
            <div className=" w-full ">
                {/* <div className="grid grid-rows-12 min-h-screen h-auto"> */}
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <h1 className="md:font-bold font-semibold md:text-md text-sm ">Pricing</h1>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                                <h1 >Price Transparency Knowing</h1>
                                <h1>How Much You Should Pay</h1>
                            </div>
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