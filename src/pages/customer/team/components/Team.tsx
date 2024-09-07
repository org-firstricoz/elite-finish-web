import React from "react"
import ImageCard from "@/components/ImageCard";
import { motion } from "framer-motion"
import { EliteLargeHeading } from "@/components";

const Team: React.FC = () => {
    const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        // Toggle the clicked image, allowing it to collapse if clicked again
        setClickedIndex(clickedIndex === index ? null : index);
    };
    return (
        <div className=" w-full min-h-auto lg:px-32 sm:px-8 px-2    ">

            <EliteLargeHeading headings={["Creative Production Team", ""]} className="text-center" />

            <div className="grid grid-cols-12  h-aut0 gap-4 md:mb-12 mb-4 transition duration-150 ease-out hover:ease-in py-12  ">

                <div className="col-span-12 flex justify-between md:gap-4 gap-1 md:h-[50vh]">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ aspectRatio: 1 }}
                            whileHover={{ aspectRatio: 16 / 9 }}
                            onClick={() => handleClick(index)}
                            animate={{ aspectRatio: clickedIndex === index ? 16 / 9 : 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="aspect-auto md:w-2/6 w-2/6 h-[10rem] sm:h-[10rem] md:h-auto hover:w-auto transition duration-150 ease-out hover:ease-in"
                        >
                            <ImageCard />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>

    )
}
export default Team