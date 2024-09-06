import { cn } from "@/utils";
import React from "react"

interface EliteDescriptionProps {
    heading: string;
    className?: string;
}

export const EliteDescription: React.FC<EliteDescriptionProps> = ({ heading, className }) => {
    return (
       
           <h1 className={cn("text-xs sm:text-sm", className)}>{heading}</h1>
       

    )
}