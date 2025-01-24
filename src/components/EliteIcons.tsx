import React from "react";
import { cn } from "../utils";
import eliteLogo from "../assets/icons/EliteLogo.svg";
import play from "../assets/icons/play.svg"
import facebook from "../assets/icons/fb.svg"
import instagram from "../assets/icons/insta.svg"
import twitter from "../assets/icons/x.svg"
import send from "../assets/icons/send.svg"
import rightArrow from "../assets/icons/rightArrow.svg"
import cart from "../assets/icons/cart.svg"
import star from "../assets/icons/star.svg"
import arrow from "../assets/icons/arrow.svg"
import timer from "../assets/icons/timer.svg"
// import paintBucket from "../assets/icons/paintBucket.svg"
import waterProof from "../assets/icons/waterProof.svg"
import playWhite from "../assets/icons/playWhite.svg"

type IconsProps = {
  className?: string;
  variant?: "cart" | "EliteLogo" | "rightArrow" | "star" | "fb" | "insta" | "x" | "send" | "arrow" | "timer" | "play" | "paintBucket" | "waterProof" | "playWhite" | "playBlack";
  size?: string; // Accept any size string (e.g., "2rem", "w-10 h-10")
};

export const EliteIcons: React.FC<IconsProps> = ({ className, variant, size }) => {
  const inlineSizeStyle = size ? { width: size, } : {};

  if (variant === "cart") {
    return (
      <div className={cn("", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={cart}
          alt="cart_icon"
          style={inlineSizeStyle}
        />
      </div>
    );
  }

  if (variant === "EliteLogo") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={eliteLogo} // Use imported asset
          alt="Elite Logo"
          style={inlineSizeStyle}
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>
    );
  }


  if (variant === "star") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={star}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "rightArrow") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={rightArrow}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>
    );
  }

  if (variant === "x") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={twitter}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }



  if (variant === "fb") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={facebook}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }


  if (variant === "insta") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={instagram}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "send") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={send}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "arrow") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={arrow}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "timer") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={timer}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "play") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={play}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }



  if (variant === "waterProof") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={waterProof}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        {/* <div className="absolute inset-0 bg-transparent"></div> */}
      </div>
    );
  }

  if (variant === "playWhite") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src={playWhite}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        {/* <div className="absolute inset-0 bg-transparent"></div> */}
      </div>
    );
  }

  if (variant === "playBlack") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover invert-0"
          src={playWhite}
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        {/* <div className="absolute inset-0 bg-transparent"></div> */}
      </div>
    );
  }


  return null;
};
