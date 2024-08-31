import React from "react"
import { cn } from "../../../../utils";

type ShapeProps = {
    className?: string;
    variant? : "null" | "triangleGreen" | "halfCircleGreen" | "brokeCircle" | "squareVoilet" | "brokeCircleVoilet" | "crownIcon" | "docsIcon" | "teamIcon" | "arrowDownIcon" | "callIcon" | "messageIcon" | "locationIcon" | "graySignIcon" | "playIcon" ;
  };
  
export const Shape:React.FC<ShapeProps> = ({className,variant}) => {


  if(variant == "null"){
    return     
}

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
        <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/arrowDown.svg"
          alt="arrowup_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }

    if(variant == "callIcon"){
      return (
        <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/callIcon.svg"
          alt="call_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }

    if(variant == "messageIcon"){
      return (
        <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/messageIcon.svg"
          alt="message_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }

    if(variant == "locationIcon"){
      return (
        <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/locationIcon.svg"
          alt="location_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }

    if(variant == "graySignIcon"){
      return (
        <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/graySign.svg"
          alt="graySign_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }
    if(variant == "playIcon"){
      return (
        <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/public/assets/play.svg"
          alt="play_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
        )
    }

    


    
    
 
}