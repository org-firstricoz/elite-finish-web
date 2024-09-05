import React from "react"
import { cn } from "../utils";

type ShapeProps = {
  className?: string;
  variant?: "null" | "triangleGreen" | "halfCircleGreen" | "brokeCircle" | "squareVoilet" | "brokeCircleVoilet" | "crownIcon" | "docsIcon" | "teamIcon" | "arrowDownIcon" | "callIcon" | "messageIcon" | "locationIcon" | "graySignIcon" | "playIcon" | "companyLogo1" | "companyLogo2" | "companyLogo3" | "companyLogo4" | "brokenCircleGreen" | "triangleOrange" | "circleOrange" | "squareWhite" | "pathGreen" | "time" | "printer" | "docs2" | "docBinding" | "text" | "file" | "squareOrange" | "triangleVoilet";
};

export const Shape: React.FC<ShapeProps> = ({ className, variant }) => {


  if (variant == "null") {
    return
  }

  if (variant == "triangleGreen") {
    return (
      <img
        className={cn("absolute", className)}
        src="/assets/triangle.svg"
        alt="triangle" />
    )
  }

  if (variant == "squareVoilet") {
    return (
      <img
        className={cn("absolute ", className)}
        src="/assets/squareVoilet.svg"
        alt="squareVoilet" />
    )
  }
  if (variant == "brokeCircle") {
    return (
      <img
        className={cn("absolute ", className)}
        src="/assets/circlebroke.svg"
        alt="brokeCircle" />
    )
  }
  if (variant == "halfCircleGreen") {
    return (
      <img
        className={cn("absolute ", className)}
        src="/assets/circleGreen.svg"
        alt="halfCircleGreen" />
    )
  }

  if (variant == "brokeCircleVoilet") {
    return (
      <img
        className={cn("absolute ", className)}
        src="/assets/brokenCircleVoilet.svg"
        alt="brocken_circle" />
    )
  }

  if (variant == "crownIcon") {
    return (
      <img
        className={cn(" ", className)}
        src="/assets/crownicon.svg"
        alt="crown_icon" />
    )
  }
  if (variant == "docsIcon") {
    return (
      <img
        className={cn(" ", className)}
        src="/assets/docsIcon.svg"
        alt="docs_icon" />
    )
  }
  if (variant == "teamIcon") {
    return (
      <img
        className={cn(" ", className)}
        src="/assets/teamIcon.svg"
        alt="team_icon" />
    )
  }

  if (variant == "arrowDownIcon") {
    return (
      <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/assets/arrowDown.svg"
          alt="arrowup_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "callIcon") {
    return (
      <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/assets/callIcon.svg"
          alt="call_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "messageIcon") {
    return (
      <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/assets/messageIcon.svg"
          alt="message_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "locationIcon") {
    return (
      <div className={cn("relative", className)}>
        <img
          className="pointer-events-none"
          src="/assets/locationIcon.svg"
          alt="location_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "graySignIcon") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/graySign.svg"
          alt="graySign_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }
  if (variant == "playIcon") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/play.svg"
          alt="play_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "companyLogo1") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/logodemo1.svg"
          alt="logo_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "companyLogo2") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/logodemo2.svg"
          alt="logo_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "companyLogo3") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/logodemo3.svg"
          alt="logo_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "companyLogo4") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/logodemo4.svg"
          alt="logo_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }
  if (variant == "brokenCircleGreen") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/brokenCircleGreen.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "triangleOrange") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/TriangleOrange.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "circleOrange") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/circleOrange.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "squareWhite") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/squareWhite.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "pathGreen") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/pathGreen.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "time") {
    return (
      <div className={cn("", className)}>
        <img
          className="pointer-events-none"
          src="/assets/time.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "printer") {
    return (
      <div className={cn("h-32 aspect-square ", className)}>
        <img
          className="pointer-events-none"
          src="/assets/printer.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "text") {
    return (
      <div className={cn("h-32 aspect-square ", className)}>
        <img
          className="pointer-events-none"
          src="/assets/text.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }


  if (variant == "docs2") {
    return (
      <div className={cn("h-32 aspect-square  ", className)}>
        <img
          className="pointer-events-none"
          src="/assets/docs2.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }


  if (variant == "docBinding") {
    return (
      <div className={cn("h-32 aspect-square  ", className)}>
        <img
          className="pointer-events-none object-cover"
          src="/assets/docBinding.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "file") {
    return (
      <div className={cn("h-32 aspect-square  ", className)}>
        <img
          className="pointer-events-none object-cover"
          src="/assets/file.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }

  if (variant == "squareOrange") {
    return (
      <div className={cn("h-32 aspect-square  ", className)}>
        <img
          className="pointer-events-none object-cover"
          src="/assets/squareOrange.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }
  if (variant == "triangleVoilet") {
    return (
      <div className={cn("h-32 aspect-square  ", className)}>
        <img
          className="pointer-events-none object-cover"
          src="/assets/triangleVoilet.svg"
          alt="circle_icon"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    )
  }










}