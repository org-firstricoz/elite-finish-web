import { EliteLargeHeading, EliteSmallHeading } from "@/components";
import ImageCard from "@/components/ImageCard";
import { motion } from 'framer-motion';
import React from "react";

const Gallery: React.FC = () => {
    const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        // Toggle the clicked image, allowing it to collapse if clicked again
        setClickedIndex(clickedIndex === index ? null : index);
    };

    return (
        <div className="w-full mt-24 ">
            <div className="min-h-auto">
                <div className="row-span-3">
                    <div className="w-full flex flex-col gap-4 justify-center items-center">
                        <EliteSmallHeading heading="Gallery" />
                        <EliteLargeHeading
                            headings={["Spectacular Works from Our", "Digital Print Services"]}
                            className="leading-5 md:leading-relaxed"
                        />
                    </div>
                </div>
                <div className="min-h-auto md:h-screen md:my-20 my-10 lg:px-32 sm:px-8 px-2 w-full ">
                    <div className="grid grid-cols-12 grid-rows-2 md:h-screen gap-4 md:mb-6 mb-4 transition duration-150 ease-out hover:ease-in">
                        <div className="col-span-12 flex justify-between md:gap-4 gap-1 h-auto">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ aspectRatio: 1 }}
                                    whileHover={{ aspectRatio: 16 / 9 }}
                                    onClick={() => handleClick(index)}
                                    animate={{ aspectRatio: clickedIndex === index ? 16 / 9 : 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="aspect-auto md:w-2/6 w-2/6 h-[7rem] sm:h-[10rem] md:h-auto hover:w-auto transition duration-150 ease-out hover:ease-in"
                                >
                                    <ImageCard />
                                </motion.div>
                            ))}
                        </div>

                        <div className="col-span-12 flex justify-between  md:gap-4 gap-1 h-auto">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <motion.div
                                    key={index + 3} 
                                    whileHover={{ aspectRatio: 16 / 9 }}
                                    onClick={() => handleClick(index + 3)} 
                                    animate={{ aspectRatio: clickedIndex === index + 3 ? 16 / 9 : 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                     className="aspect-auto md:w-2/6 w-2/6 h-[7rem] sm:h-[10rem] md:h-auto hover:w-auto transition duration-150 ease-out hover:ease-in"
                                >
                                    <ImageCard />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
