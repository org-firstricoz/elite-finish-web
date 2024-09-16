import { EliteIcons, EliteWideScreenHandler } from "@/components"
import { painterman4 } from "@/constants/imagePatht"
import React from "react"

const Testinomial: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="min-h-screen h-auto py-[2rem]" >
                <div className="grid grid-cols-12 md:px-12 p-2 h-full ">
                    <div className="col-span-5 h-full overflow-hidden">
                        <img src={painterman4} alt="painterman4"
                            className="object-cover h-full w-full rounded-l-[53px]"
                        />
                    </div>
                    <div className="col-span-7 bg-elite-whiteSmoke rounded-r-[53px]">
                        <div className="flex flex-col gap-12 md:px-12 px-4 py-12 pt-16">

                            <div className="flex flex-col gap-1">
                                <div className="flex  gap-1">

                                    {
                                        [1, 2, 3, 4, 5].map((_, index) =>
                                            <EliteIcons key={`STARS_${index}`} size="2.3rem" variant="star" />
                                        )
                                    }
                                </div>
                                <h1 className="text-6xl font-bold">Amazing job! Our <br /> home looks brand <br /> new.</h1>
                            </div>


                            <h1 className="text-lg font-normal pe-16">I can recommend this is highly enough. They too my idea made them a better, offer suggestions  of which made  understood who right piece or quality of work was excellent."
                            </h1>

                            <div className="flex flex-col gap-1 text-2xl font-semibold">
                            <h1>Donald Lucas</h1>
                            <h1>Brooklyn, USA</h1>
                            <EliteIcons className="self-end" size="2.5rem" variant="rightArrow" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Testinomial