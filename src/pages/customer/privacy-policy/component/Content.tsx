import { cn } from "@/utils";
import React from "react"


interface Props {
    heading: string;
    content: string[];
    className?: string;
    pointsGap?: number;
    headingPosition?: "START" | "END" | "CENTER";
}

const Content: React.FC<Props> = ({ heading, content, className, headingPosition , pointsGap=1}) => {
    return (
        <div className={cn("lg:w-8/12 md:w-10/12 w-full px-4 flex flex-col gap-4", className)}>
            <h1 className={`text-[#3E4958] text-2xl font-semibold 
                ${headingPosition === "CENTER" ? "text-center" :
                    headingPosition === 'END' ? "text-end" :
                        "text-start"}`}>
                {heading}
            </h1>
            <ul className={` text-sm flex flex-col gap-${pointsGap} ${content.length > 1 ? "list-disc" : ""}`}>
                {
                    content.map((item, index) => {
                        return <li key={`CONTENT_${index}`} className="text-[#3E4958]">{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Content