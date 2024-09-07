import { cn } from "@/utils";
import React from "react"

interface EliteLargeHeadingProps {
    headings: string[];
    className?: string;
}

export const EliteLargeHeading: React.FC<EliteLargeHeadingProps> = ({ headings, className }) => {
    return (
        <>
            {headings.map((heading, index) => (
                <h1 className={cn("font-semibold md:text-4xl lg:text-5xl sm:text-3xl text-[5vw] ", className)} key={index}>{heading}</h1>
            ))}

        </>

    )
}