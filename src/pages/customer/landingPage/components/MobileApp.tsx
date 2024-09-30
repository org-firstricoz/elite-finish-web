import { motion, useInView } from "framer-motion";
import { Mobileapp } from "@/constants/imagePath";
import React, { useRef } from "react";

const MobileApp: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="relative h-full w-full flex justify-center items-center overflow-hidden">
            {/* The circles will increase their size when they come into view */}
            <motion.div
                ref={ref}
                className="absolute -z-20 w-[26rem] rounded-full border-2 aspect-square flex flex-col justify-center items-center"
                animate={{ scale: isInView ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
            />
            <motion.div
                className="absolute -z-20 w-[22rem] rounded-full border-2 aspect-square flex flex-col justify-center items-center"
                animate={{ scale: isInView ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
                className="absolute -z-20 w-[18rem] rounded-full border-2 aspect-square flex flex-col justify-center items-center"
                animate={{ scale: isInView ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
            <img className="h-[34rem] " src={Mobileapp} alt="Phone" />
        </div>
    );
};

export default MobileApp;
