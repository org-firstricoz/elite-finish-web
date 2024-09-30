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
            <div ref={heroRef} className="h-screen 3xl:h-auto overflow-hidden">
                <Navbar heroRef={heroRef} />
                <div className="relative grid grid-cols-12 h-full ">
                    <HeroCard/>
                    <HeroStats/>
                    <div className="col-span-6 pt-[10rem] md:px-24 px-4">
                        <div>
                            <h1 className="font-bold  text-elite-black leading-tight"
                             style={{fontSize:'clamp(0.5rem, 4vw, 6rem)'}}
                            >
                                Sustainable <br />
                                <span className="text-elite-red">painting </span>
                                solutions
                            </h1>
                            <p className="text-gray-500 mt-3 "
                            style={{fontSize:'clamp(1rem, 1.5vw, 2rem)'}}
                            >Experience premium painting services for a flawless home, quality and client satisfaction.</p>
                        </div>
                    </div>
                    <div className="col-span-6 h-full overflow-hidden">
                        <div className="h-full w-full bg-red-500">
                            <img
                                className="object-cover  h-full w-full"
                                src={HeroPainter}
                                alt="image" />
                        </div>
                    </div>
                <img className="absolute -z-10 -bottom-[10rem] h-[25rem]" src={PaintStroke} alt="paint stroke" />
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Hero