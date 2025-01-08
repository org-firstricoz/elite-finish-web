import { EliteWideScreenHandler } from "@/components"
import { HeroPainter, PaintStroke, } from "@/constants/imagePath"
import React from "react"
import Navbar from "./navbar/Navbar"
import HeroCard from "./HeroCard"
import HeroStats from "./HeroStats"


const Hero: React.FC = () => {

    const heroRef = React.useRef<HTMLDivElement>(null)
    return (
        <EliteWideScreenHandler>
            <div className="relative">
                <div className=" h-[45rem] 3xl:h-[60rem]  overflow-hidden">
                    <Navbar heroRef={heroRef} isMainHero={true} />
                    <div className="relative grid grid-cols-12 h-full ">
                        <div  ref={heroRef} className="absolute z-50 -top-32 md:bottom-0  h-[13rem] w-full" />
                        {/* <HeroCard /> */}
                        <HeroStats className="absolute bottom-12 md:px-24 px-4" />
                        <div className="md:col-span-6 hidden md:block pt-[10rem] md:ps-24 px-4 w-full">
                            <div className="w-full">
                                <h1 className="font-bold  text-elite-black leading-tight  w-full"
                                    style={{ fontSize: 'clamp(0.5rem, 4vw, 6rem)' }}
                                >
                                    Sustainable <br />
                                    <span className="text-elite-red">painting </span>
                                    solutions
                                </h1>
                                <p className="text-gray-500 mt-3 "
                                    style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
                                >Experience premium painting services for a flawless home, quality and client satisfaction.</p>
                            </div>
                        </div>
                        <div className="md:col-span-6 col-span-12 h-full overflow-hidden">
                            <div className="h-full w-full ">
                                <div className="md:hidden flex flex-col justify-start mt-[9rem]  h-full absolute px-4">
                                    <h1 className="font-bold  text-white leading-tight"
                                        style={{ fontSize: 'clamp(0.5rem, 10vw, 10rem)' }}
                                    >
                                        Sustainable <br />
                                        <span className="text-elite-red">painting </span>
                                        solutions
                                    </h1>
                                    <p className="text-white/75 mt-3 w-11/12"
                                        style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}
                                    >Experience premium painting services for a flawless home, quality and client satisfaction.</p>
                                </div>

                                <img
                                    className="object-cover  h-full w-full"
                                    src={HeroPainter}
                                    alt="image" />
                            </div>
                        </div>
                        <img className="absolute -z-10 -bottom-[10rem] h-[25rem]" src={PaintStroke} alt="paint stroke" />
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Hero