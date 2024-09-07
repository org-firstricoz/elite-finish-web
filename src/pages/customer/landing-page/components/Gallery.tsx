import { EliteLargeHeading, EliteSmallHeading } from "@/components"
import ImageCard from "@/components/ImageCard"
import { motion } from 'framer-motion'
const Gallery = () => {
    return (
            <div className=" w-full  mt-24 ">
                <div className="min-h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <EliteSmallHeading heading="Gallery"/>
                            <EliteLargeHeading headings={["Spectacular Works from Our","Digital Print Services"]}
                            className="leading-5 md:leading-relaxed"
                            />
                        </div>
                    </div>
                    <div className=" min-h-auto md:h-screen my-20   lg:px-32 sm:px-8 px-2 ">

                        <div className="grid grid-cols-12 grid-rows-2 md:h-screen gap-4  md:mb-6  mb-4 transition duration-150 ease-out hover:ease-in">
                            <div className="col-span-12 flex  gap-4">

                                <motion.div 
                                initial={{ aspectRatio: 1 }}
                                whileHover={{ aspectRatio: 16 / 9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className=" aspect-auto md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto  hover:w-auto transition duration-150 ease-out hover:ease-in  ">
                                    <ImageCard />
                                </motion.div>
                                <motion.div 
                                 initial={{ aspectRatio: 1 }}
                                 whileHover={{ aspectRatio: 16 / 9 }}
                                 transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="aspect-auto  hover:aspect-video md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto hover:w-auto transition duration-150 ease-out hover:ease-in">
                                    <ImageCard />
                                </motion.div>
                                <motion.div 
                                 initial={{ aspectRatio: 1 }}
                                 whileHover={{ aspectRatio: 16 / 9 }}
                                 transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="aspect-auto  hover:aspect-video md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto hover:w-auto transition duration-300 ease-out hover:ease-in">
                                    <ImageCard />
                                </motion.div>
                            </div>
                            <div className="col-span-12 flex  gap-4">

                                <motion.div 
                                 initial={{ aspectRatio: 1 }}
                                 whileHover={{ aspectRatio: 16 / 9 }}
                                 transition={{ duration: 0.5, ease: "easeInOut" }}
                                className=" aspect-auto hover:aspect-video md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto  hover:w-auto transition duration-150 ease-out hover:ease-in  ">
                                    <ImageCard />
                                </motion.div>
                                <motion.div 
                                 initial={{ aspectRatio: 1 }}
                                 whileHover={{ aspectRatio: 16 / 9 }}
                                 transition={{ duration: 0.5, ease: "easeInOut" }}
                                className=" aspect-auto hover:aspect-video md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto  hover:w-auto transition duration-150 ease-out hover:ease-in  ">
                                    <ImageCard />
                                </motion.div>
                                <motion.div 
                                 initial={{ aspectRatio: 1 }}
                                 whileHover={{ aspectRatio: 16 / 9 }}
                                 transition={{ duration: 0.5, ease: "easeInOut" }}
                                className=" aspect-auto hover:aspect-video md:w-2/6 w-auto h-[7rem] sm:h-[10rem] md:h-auto  hover:w-auto transition duration-150 ease-out hover:ease-in  ">
                                    <ImageCard />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}
export default Gallery