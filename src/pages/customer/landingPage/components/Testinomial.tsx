import { EliteIcons, EliteWideScreenHandler } from "@/components"
import { painterman4 } from "@/constants/imagePath"
import React from "react"

const Testinomial: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className=" h-auto  py-[2rem]  " >
                <div className="grid grid-cols-12  md:px-24 px-4  ">
                    <div className="col-span-5  overflow-hidden ">
                        <img src={painterman4} alt="painterman4"
                            className="object-cover h-full w-full rounded-l-[53px]"
                        />
                    </div>
                    <div className="col-span-7 h-full rounded-r-[53px] bg-elite-gray ">
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
                                <h1 className="md:leading-[4rem] font-semibold"
                                    style={{ fontSize: "clamp(.5rem, 1vw + 3rem, 5vw)" }}>
                                    Amazing job! Our <br /> home looks brand <br /> new.
                                </h1>
                            </div>


                            <h1 className="md:text-lg text-sm font-normal md:pe-16 pe-4">I can recommend this is highly enough. They too my idea made them a better, offer suggestions  of which made  understood who right piece or quality of work was excellent."
                            </h1>

                            <div className="flex flex-col gap-1 md:text-2xl text-xl font-semibold">
                                <h1>Donald Lucas</h1>
                                <h1>Brooklyn, USA</h1>
                                <EliteIcons className="self-end invert" size="2.5rem" variant="play" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Testinomial