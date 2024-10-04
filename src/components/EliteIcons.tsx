import React from "react";
import { cn } from "../utils";

type IconsProps = {
  className?: string;
  variant?: "cart" | "EliteLogo" | "rightArrow" | "star" | "fb" |"insta" | "x" | "send" | "arrow" | "timer" | "play" | "paintBucket" | "waterProof" | "playWhite";
  size?: string; // Accept any size string (e.g., "2rem", "w-10 h-10")
};

export const EliteIcons: React.FC<IconsProps> = ({ className, variant, size }) => {
  const inlineSizeStyle = size ? { width: size, } : {}; 

  if (variant === "cart") {
    return (
      <div className={cn("", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src="public/assets/icons/cart.svg"
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
          src="public/assets/icons/EliteLogo.svg"
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }
  if (variant === "star") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src="public/assets/icons/star.svg"
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
          src="public/assets/icons/rightArrow.svg"
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "x") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src="public/assets/icons/x.svg"
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
          src="public/assets/icons/fb.svg"
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
          src="public/assets/icons/insta.svg"
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
          src="public/assets/icons/send.svg"
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
          src="public/assets/icons/arrow.svg"
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
          src="public/assets/icons/timer.svg"
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
          src="public/assets/icons/play.svg"
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
    );
  }

  if (variant === "paintBucket") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src="public/assets/icons/paintBucket.svg"
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        {/* <div className="absolute inset-0 bg-transparent"></div> */}
      </div>
    );
  }

  if (variant === "waterProof") {
    return (
      <div className={cn("relative", className)} style={inlineSizeStyle}>
        <img
          className="pointer-events-none object-cover"
          src="public/assets/icons/waterProof.svg"
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
          src="public/assets/icons/playWhite.svg"
          alt="elite_logo"
          style={inlineSizeStyle} // Apply the inline style for responsive size
        />
        {/* <div className="absolute inset-0 bg-transparent"></div> */}
      </div>
    );
  }


  return null;
};
