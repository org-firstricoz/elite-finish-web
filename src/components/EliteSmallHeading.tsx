import React from "react";
import { cn } from "@/utils"

interface EliteSmallHeadingProps{
    heading : string;
    className?: string
}

export const EliteSmallHeading:React.FC<EliteSmallHeadingProps> = ({
    heading,
    className
}) => {
  return (
    <h1 className={cn("font-semibold md:text-lg text-sm mb-4", className)}>{heading}</h1>
  )
}