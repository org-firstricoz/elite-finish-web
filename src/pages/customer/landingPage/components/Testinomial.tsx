import { EliteIcons, EliteWideScreenHandler } from "@/components"
import { painterman4 } from "@/constants/imagePath"
import React from "react"

const Testinomial: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className=" h-auto   " >
                <div className="grid grid-cols-12  md:px-24 px-4  ">
                    <div className="col-span-5 ps-8 py-8 overflow-hidden rounded-l-[53px] bg-elite-dark  ">
                        <div style={{
                            backgroundImage: `url(${painterman4})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }} className="bg-red-200 h-full rounded-l-[53px]">

                        </div>
                    </div>
                    <div className="col-span-7 h-full rounded-r-[53px]  bg-elite-dark ">
                        <div className="flex flex-col justify-center h-full gap-8 md:px-12 px-4 py-12 pt-16">

                            <div className="flex flex-col justify-center   gap-1">
                                <div className="flex gap-1">
                                    {
                                        [1, 2, 3, 4, 5].map((_, index) =>
                                            <EliteIcons key={`STARS_${index}`}
                                                size="2.3rem"
                                                className=""
                                                variant="star" />
                                        )
                                    }
                                </div>
                                <h1 className="md:leading-[4rem] font-semibold text-white"
                                    style={{ fontSize: "clamp(.5rem, 1vw + 3rem, 5vw)" }}>
                                    Amazing job! Our <br /> home looks brand <br /> new.
                                </h1>
                            </div>


                            <h1 className="md:text-lg text-xs font-normal md:pe-16 pe-4 text-white">I can recommend this is highly enough. They too my idea made them a better, offer suggestions  of which made  understood who right piece or quality of work was excellent."
                            </h1>

                            <div className="flex flex-col gap-1 md:text-2xl text-xl font-semibold text-white">
                                <h1>Donald Lucas</h1>
                                <h1>Brooklyn, USA</h1>
                                <EliteIcons className="self-end " size="2.5rem" variant="play" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Testinomial