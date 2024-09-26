import { EliteButton, EliteIcons } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import React from "react"

const Estimation: React.FC = () => {
    return (
        <div className="my-24">
            <EliteHeading>GET THE ESTIMATION FOR <br /> PAINTING AND WATERPROOFING</EliteHeading>

            <div className="flex flex-col md:flex-row w-full md:gap-24 gap-6 my-12">


                <div className="bg-elite-blue rounded-[84px] md:px-12 py-12 px-8 flex flex-col justify-center  gap-6">
                    <h1 className="text-4xl font-bold"
                        style={{ fontSize: "clamp(1.5rem, 2vw + 2rem, 2.5vw)" }}>
                        Painting Cost</h1>
                    <p className="text-xs md:text-base" >Instantly Calculate The Painting Expenses For Your House With Our User-Friendly Cost Calculator</p>
                    <EliteButton className="w-full  rounded-xl py-4">Estimate Painting Cost</EliteButton>
                    <EliteIcons className=" w-fit self-end " variant="paintBucket" size="5rem" />
                </div>

                <div className="bg-elite-blue rounded-[84px] md:px-12 py-12 px-8 flex flex-col justify-center  gap-6">
                    <h1
                        className="text-4xl font-bold "
                        style={{ fontSize: "clamp(1.2rem, 2vw + 2rem, 2.5vw)" }}>
                        WATERPROOFING COST
                    </h1>
                    <p className="text-xs md:text-base" >Instantly Calculate The Painting Expenses For Your House With Our User-Friendly Cost Calculator</p>
                    <EliteButton className="w-full  rounded-xl py-4">Estimate Wateroofing Cost</EliteButton>
                    <EliteIcons className=" w-fit self-end " variant="waterProof" size="5rem" />
                </div>
            </div>
            <EliteHeading>Have a question? Free quote.</EliteHeading>
        </div>
    )
}
export default Estimation