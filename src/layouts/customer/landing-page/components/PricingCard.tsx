import React from "react"
import EliteButton from "../../../../components/EliteButton"
import { Shape } from "./Shapes"

interface PricingCardProps {
    heading: string;
    price: number;
    buttonType: "primary" | "secondary";
    cardBg?: "primary" | "secondary";
    details: string[];
}
const PricingCard: React.FC<PricingCardProps> = ({
    heading,
    price,
    buttonType,
    cardBg,
    details,
}
) => {
    return (
        <div className={` ${cardBg == "primary" ? "bg-Elite-voilet text-white " : "bg-white text-black  border-2"}
        min-h-[70vh] h-auto w-[16rem] sm:w-full py-5 px-5  border-black flex flex-col gap-12 justify-center  items-center  `}>
            <div className="flex flex-col  items-center justify-center ">
                <h1 className="text-xs md:text-md lg:text-xl  font-semibold  text-center ">{heading}</h1>
                <h1 className="font-semibold lg:text-xl md:text-lg sm:text-sm text-xs"> <span className="lg:text-5xl md:text-3xl sm:text-xl text-base ">${price}/</span>packages</h1>
            </div>
            <div className={`flex flex-col gap-5 py-5 px-5 border-y-[1px] ${cardBg == "primary" ? "border-white" : "border-black"}  `}>
                {details.map((detail, index) => (
                    <div className="flex items-center gap-2" key={index}>
                        <Shape variant="playIcon" className={`${cardBg == "primary" ? "invert" : ""}`} />
                        <h1 className="text-xs sm:text-sm md:text-base">{detail}</h1>
                    </div>
                ))}
            </div>
            <div>
                <EliteButton variant={buttonType}> Choose Now </EliteButton>
            </div>
        </div>
    )
}
export default PricingCard