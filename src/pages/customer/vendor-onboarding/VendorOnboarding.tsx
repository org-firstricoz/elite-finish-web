// import React, { useEffect, useRef } from "react";

// export const VendorOnboarding = (props) => {
//   const iframeRef = useRef(null);

//   const handleMessage = (event) => {
//     const { type, link } = event.data;

//     console.log("Message received from iframe:", type);

//     // Handle navigation if type matches
//     if (type === "action/navigate" && link) {
//       console.log("Navigating to link:", link);
//       window.location.href = link;
//     }
//   };

//   useEffect(() => {
//     // Add event listener
//     window.addEventListener("message", handleMessage);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);

//   return (
//     <iframe
//       ref={iframeRef}
//       src="https://dynamic-forms-git-master-xlongclaws-projects.vercel.app/forms/679207b2fde725d5d9a24a98"
//       className="w-screen h-screen"
//     ></iframe>
//   );
// };

import React, { useEffect, useRef } from "react";

interface MessageEventData {
  type: string;
  link?: string;
}

export const VendorOnboarding: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleMessage = (event: MessageEvent) => {
    const { type, link }: MessageEventData = event.data;

    console.log("Message received from iframe:", type);

    // Handle navigation if type matches
    if (type === "action/navigate" && link) {
      console.log("Navigating to link:", link);
      window.location.href = link;
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("message", handleMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://dynamic-forms-git-master-xlongclaws-projects.vercel.app/forms/6791ed17fde725d5d9a24718"
      className="w-screen h-screen"
    ></iframe>
  );
};
