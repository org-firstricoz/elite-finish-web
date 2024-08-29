import React from "react"
import { cn } from "../../../../utils";

type ShapeProps = {
    className?: string;
    variant? : "triangleGreen" | "halfCircleGreen" | "brokeCircle" | "squareVoilet" | "brokeCircleVoilet" | "crownIcon" | "docsIcon" | "teamIcon" | "arrowDownIcon" ;
  };
  
export const Shape:React.FC<ShapeProps> = ({className,variant}) => {

    if(variant == "triangleGreen"){
        return (
            <img 
            className={cn("absolute", className)}
            src="/public/assets/triangle.svg" 
            alt="triangle" />
          )
    }

    if(variant == "squareVoilet"){
        return (
            <img 
            className={cn("absolute ", className)}
            src="/public/assets/squareVoilet.svg" 
            alt="squareVoilet" />
          )
    }
    if(variant == "brokeCircle"){
        return (
            <img 
            className={cn("absolute ", className)}
            src="/public/assets/circlebroke.svg" 
            alt="brokeCircle" />
          )
    }
    if(variant == "halfCircleGreen"){
        return (
            <img 
            className={cn("absolute ", className)}
            src="/public/assets/circleGreen.svg" 
            alt="halfCircleGreen" />
          )
    }
 
    if(variant == "brokeCircleVoilet"){
        return (
            <img 
            className={cn("absolute ", className)}
            src="/public/assets/brokenCircleVoilet.svg" 
            alt="brocken_circle" />
          )
    }

    if(variant == "crownIcon"){
        return (
            <img 
            className={cn(" ", className)}
            src="/public/assets/crownicon.svg" 
            alt="crown_icon" />
          )
    }
    if(variant == "docsIcon"){
        return (
            <img 
            className={cn(" ", className)}
            src="/public/assets/docsIcon.svg" 
            alt="docs_icon" />
          )
    }
    if(variant == "teamIcon"){
        return (
            <img 
            className={cn(" ", className)}
            src="/public/assets/teamIcon.svg" 
            alt="team_icon" />
          )
    }

    if(variant == "arrowDownIcon"){
        return (
            <img 
            className={cn(" ", className)}
            src="/public/assets/arrowDown.svg" 
            alt="arrowDown_icon" />
          )
    }

    if(variant == "arrowUpIcon"){
        return (
            <img 
            className={cn(" ", className)}
            src="/public/assets/arrowUp.svg" 
            alt="arrowup_icon" />
          )
    }
 
}