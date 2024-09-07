import React from "react";
import { Shape } from "./Shapes";
import { motion } from "framer-motion"

interface HeroCommmonProps {
    heading: string;
    description: string;
}
export const HeroCommon: React.FC<HeroCommmonProps> = ({
    heading,
    description
}) => {

    // Animation Variants
    const animationVariants = {
        initial: { x: "-20vh", y: "20vh", opacity: 0, scale: 0.01 }, 
        animate: (position: { x: string; y: string; scale: number }) => ({
            x: position.x, 
            y: position.y,
            scale: position.scale,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                duration: 1.8,
            },
        }),
    };

    const textAnimationVariants = {
        hidden: { opacity: 0, y: 20 }, 
        visible: (i: number) => ({
            opacity: 1,
            y: 0, 
            transition: {
                delay: i * 0.3, 
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relativ  h-screen w-full">
            <div className="relative  h-[85vh] bg-elite-blue flex justify-center">

                <div className=" z-40 flex flex-col justify-center items-center text-white   w-4/5 sm:w-3/5 md:w-1/2 gap-12">
                    <motion.h1
                        className="md:text-6xl text-4xl font-bold"
                        initial="hidden"
                        animate="visible"
                        custom={0} // Index 0 for the heading
                        variants={textAnimationVariants}
                    >
                        {heading}
                    </motion.h1>
                    <motion.h1
                        className="text-xs sm:text-sm text-center leading-relaxed"
                        initial="hidden"
                        animate="visible"
                        custom={1} // Index 1 for the description
                        variants={textAnimationVariants}
                    >
                        {description}
                    </motion.h1>
                </div>

            </div>
            <motion.div
                className="absolute  z-0 md:top-24 top-20 md:right-[25vw] right-[22vw]  "
                variants={animationVariants}
                initial={{ x: "-20vh", y: "20vh", opacity: 0, scale: .01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh ", scale: .7 }}
            >
                <Shape variant="brokenCircleGreen" />
            </motion.div>
            <motion.div
                className="absolute z-0 top-32 md:left-[25vw]  left-[10vw] md:scale-75 scale-50"
                variants={animationVariants}
                initial={{ x: "20vh", y: "20vh", opacity: 0, scale: 0.01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh", scale: .7 }}
            >
                <Shape variant="triangleOrange" />
            </motion.div>

            <motion.div
                className="absolute bottom-40 md:right-[35vw] right-[30vw] md:scale-100 sm:scale-75 scale-50  "
                variants={animationVariants}
                initial={{ x: "-20vh", y: "-20vh", opacity: 0, scale: 0.01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh", scale: .7 }}
            >
                <Shape variant="circleOrange" />

            </motion.div>

            <motion.div
                className="absolute md:bottom-[50vh] bottom-[59vh] md:right-[10vw] right-[8vw] scale-50 "
                variants={animationVariants}
                initial={{ x: "-20vh", y: "-2vh", opacity: 0, scale: 0.01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh", scale: .3 }} >
                <Shape variant="squareWhite" />
            </motion.div>

            <motion.div
                className="absolute md:bottom-[50vh] bottom-[59vh] md:left-[7vw] left-[5vw]  "
                variants={animationVariants}
                initial={{ x: "20vh", y: "-2vh", opacity: 0, scale: 0.01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh", scale: .3 }} >
                <Shape variant="squareWhite" />
            </motion.div>
            <motion.div
                className="absolute bottom-[30vh] md:left-[15vw] left-[8vw] md:scale-75 scale-50 "
                variants={animationVariants}
                initial={{ x: "20vh", y: "-20vh", opacity: 0, scale: 0.01 }}
                animate="animate"
                custom={{ x: "1vw", y: "2vh", scale: .7 }} >
                <Shape variant="pathGreen" />
            </motion.div>

        </div>
    )
}