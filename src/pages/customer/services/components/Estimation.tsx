import { EliteButton, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import React from "react"

const Estimation: React.FC = () => {
    return (
        <EliteWideScreenHandler>

            <div className="my-24 md:px-24 px-4">
                <EliteHeading>GET THE ESTIMATION FOR <br /> PAINTING AND WATERPROOFING</EliteHeading>

                <div className="flex flex-col md:flex-row w-full md:gap-24 gap-6 my-12">


                    <div className="bg-elite-gray shadow-md rounded-[84px] md:px-12 py-12 pb-24 px-8 flex flex-col justify-center  gap-24">
                        <div className="flex flex-col gap-4 ">
                            <h1 className="text-4xl font-bold"
                                style={{ fontSize: "clamp(1.5rem, 2vw + 2rem, 2.5vw)" }}>
                                Painting Cost</h1>
                            <p className="text-xs md:text-base" >Instantly Calculate The Painting Expenses For Your House With Our User-Friendly Cost Calculator</p>
                        </div>
                        <EliteButton className="w-full  rounded-xl py-6 bg-elite-dark">Estimate Painting Cost</EliteButton>
                    </div>

                    <div className="bg-elite-gray shadow-md rounded-[84px] md:px-12 py-12 pb-24 px-8 flex flex-col justify-center  gap-24">
                        <div className="flex flex-col gap-4 ">
                            <h1
                                className="text-4xl font-bold "
                                style={{ fontSize: "clamp(1.2rem, 2vw + 2rem, 2.5vw)" }}>
                                WATERPROOFING COST
                            </h1>
                            <p className="text-xs md:text-base" >Instantly Calculate The Painting Expenses For Your House With Our User-Friendly Cost Calculator</p>
                        </div>
                        <EliteButton className="w-full  rounded-xl py-6 bg-elite-dark">Estimate Wateroofing Cost</EliteButton>
                    </div>
                </div>
                <EliteHeading>Have a question? <span className="text-elite-red">Free quote.</span></EliteHeading>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Estimation