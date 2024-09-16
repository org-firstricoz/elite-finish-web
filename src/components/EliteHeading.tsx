import { cn } from "@/utils";
import React from "react"

interface props {
    children: React.ReactNode;
    classname?: string;
}
const EliteHeading: React.FC<props> = ({ children, classname }) => {
    return (
        <h1 className={cn("lg:text-5xl text-[4vw] font-semibold text-center", classname)}
            style={{ fontSize: "clamp(1.2rem, 1vw + 2rem, 4vw)" }}
        >{children}</h1>
    )
}
export default EliteHeading